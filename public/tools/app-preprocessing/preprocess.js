// In the base folder (same level as package.json), run "npm run preprocess".

const fs = require("fs");
const path = require('path');

const SCRIPT_PATH_PREFIX = "./public"

// TODO(winerip) dynamically find the newest full run. Alternatively, have
// lighthouse point this path at the most recent run
// TODO(winerip) find a good way to handle top 200 - right now, the json output
// files are doubled up and appear in both folders.
const RCB_DATA = "/scan-results/base/rcb.misc/lighthouse/";
const RCO_DATA = "/scan-results/base/rco.misc/lighthouse/";
const RCB_DATA_FOLDER = path.join(SCRIPT_PATH_PREFIX, RCB_DATA);
const RCO_DATA_FOLDER = path.join(SCRIPT_PATH_PREFIX, RCO_DATA);

let averages = {
    scores: {
        performance: { rcb: 0, rco: 0 },
        accessibility: { rcb: 0, rco: 0 },
        "best-practices": { rcb: 0, rco: 0 },
        seo: { rcb: 0, rco: 0 },
        pwa: { rcb: 0, rco: 0 }
    }, totals: {
        performance: { rcb: 0, rco: 0 },
        accessibility: { rcb: 0, rco: 0 },
        "best-practices": { rcb: 0, rco: 0 },
        seo: { rcb: 0, rco: 0 },
        pwa: { rcb: 0, rco: 0 }
    }
}
let tracking = {};
let filteredJsonData = []

fs.readdirSync(RCB_DATA_FOLDER).forEach(file => {
    let json = JSON.parse(fs.readFileSync(path.join(RCB_DATA_FOLDER, file)));
    if (json.requestedUrl) {
        for (let key in json.categories) {
            averages.scores[key].rcb += (json.categories[key].score * 100);
            averages.totals[key].rcb++;
        }
        for (var key in json.audits) {
            if (json.audits.hasOwnProperty(key)) {
                if (json.audits[key].score != 1
                    && json.audits[key].scoreDisplayMode != "notApplicable"
                    && json.audits[key].scoreDisplayMode != "informative"
                    && json.audits[key].scoreDisplayMode != "error") {
                    if (tracking[key] != null) {
                        tracking[key].count.rcb++;
                    } else {
                        let category = "unknown";
                        for (let cat in json.categories) {
                            for (let audit in json.categories[cat].auditRefs) {
                                if (json.categories[cat].auditRefs[audit].id === key) { category = cat; }
                            }
                        }
                        tracking[key] = {
                            "count": { rcb: 1, rco: 0 },
                            "title": json.audits[key].title,
                            "manual": json.audits[key].scoreDisplayMode == "manual",
                            "description": json.audits[key].description,
                            "category": category
                        }
                    }
                }
            }
        }
        const normalize = (x => (x != null) ? Math.ceil(x.score * 100) : null)
        let filteredJsonEntry = {
            url: RCB_DATA + file,
            source: "RCB.ALL",
            requestedUrl: json.requestedUrl,
            categories: {
                performance: normalize(json.categories.performance),
                accessibility: normalize(json.categories.accessibility),
                'best-practices': normalize(json.categories['best-practices']),
                seo: normalize(json.categories.seo),
                pwa: normalize(json.categories.pwa),
            }
        }
        filteredJsonData.push(filteredJsonEntry);
    }
});

fs.readdirSync(RCO_DATA_FOLDER).forEach(file => {
    let json = JSON.parse(fs.readFileSync(path.join(RCO_DATA_FOLDER, file)));
    if (json.requestedUrl) {
        for (let key in json.categories) {
            averages.scores[key].rco += (json.categories[key].score * 100);
            averages.totals[key].rco++;
        }
        for (var key in json.audits) {
            if (json.audits.hasOwnProperty(key)) {
                if (json.audits[key].score != 1
                    && json.audits[key].scoreDisplayMode != "notApplicable"
                    && json.audits[key].scoreDisplayMode != "informative"
                    && json.audits[key].scoreDisplayMode != "error") {
                    if (tracking[key] != null) {
                        tracking[key].count.rco++;
                    } else {
                        let category = "unknown";
                        for (let cat in json.categories) {
                            for (let audit in json.categories[cat].auditRefs) {
                                if (json.categories[cat].auditRefs[audit].id === key) { category = cat; }
                            }
                        }
                        tracking[key] = {
                            "count": { rcb: 0, rco: 1 },
                            "title": json.audits[key].title,
                            "manual": json.audits[key].scoreDisplayMode == "manual",
                            "description": json.audits[key].description,
                            "category": category
                        }
                    }
                }
            }
        }
        const normalize = (x => (x != null) ? Math.ceil(x.score * 100) : null)
        let filteredJsonEntry = {
            url: RCO_DATA + file,
            source: "RCO.ALL",
            requestedUrl: json.requestedUrl,
            categories: {
                performance: normalize(json.categories.performance),
                accessibility: normalize(json.categories.accessibility),
                'best-practices': normalize(json.categories['best-practices']),
                seo: normalize(json.categories.seo),
                pwa: normalize(json.categories.pwa),
            }
        }
        filteredJsonData.push(filteredJsonEntry);
    }
});

let arr = Object.keys(tracking).map(function (key) {
    return tracking[key];
});
arr.sort(sortByCount);

// arr holds list of issues
fs.writeFile(
    "./public/scan-results/sites.json",
    JSON.stringify(filteredJsonData, undefined, 4),
    'utf8',
    function (err) { if (err) throw err });

fs.writeFile(
    "./public/scan-results/averages.json",
    JSON.stringify(averages, undefined, 4),
    'utf8',
    function (err) { if (err) throw err });

fs.writeFile(
    "./public/scan-results/issues.json",
    JSON.stringify(arr, undefined, 4),
    'utf8',
    function (err) { if (err) throw err });

function sortByCount(a, b) {
    if (a.count.rcb + a.count.rco < b.count.rcb + b.count.rco) return 1;
    if (a.count.rcb + a.count.rco > b.count.rcb + b.count.rco) return -1;
    return 0;
}
