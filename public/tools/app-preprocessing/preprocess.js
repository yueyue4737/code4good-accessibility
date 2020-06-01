// In the base folder (same level as package.json), run "npm run preprocess".

const fs = require("fs");
const path = require('path');

const SCRIPT_PATH_PREFIX = "./public"

// TODO(winerip) dynamically find the newest full run. Alternatively, have
// lighthouse point this path at the most recent run
// TODO(winerip) find a good way to handle top 200 - right now, the json output
// files are doubled up and appear in both folders.

let averages = {}
let tracking = {};
let filteredJsonData = []

readForSite('rcb');
readForSite('rco');

let arr = Object.values(tracking);
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

// TODO add sorting logic to App side for when we filter data.
function sortByCount(a, b) {
    if (a.count.rcb + a.count.rco < b.count.rcb + b.count.rco) return 1;
    if (a.count.rcb + a.count.rco > b.count.rcb + b.count.rco) return -1;
    return 0;
}

function readForSite(site) {
    averages[site] = {
        performance: { scores: 0, totals: 0 },
        accessibility: { scores: 0, totals: 0 },
        "best-practices": { scores: 0, totals: 0 },
        seo: { scores: 0, totals: 0 },
        pwa: { scores: 0, totals: 0 }
    };

    const DATA = `/scan-results/base/${site}.misc/lighthouse/`;
    fs.readdirSync(path.join(SCRIPT_PATH_PREFIX, DATA)).forEach(file => {
        let json = JSON.parse(fs.readFileSync(path.join(SCRIPT_PATH_PREFIX, DATA, file)));
        if (json.requestedUrl) {
            for (let key in json.categories) {
                averages[site][key].scores += (json.categories[key].score * 100);
                averages[site][key].totals++;
            }
            for (var key in json.audits) {
                if (json.audits.hasOwnProperty(key)) {
                    if (json.audits[key].score != 1
                        && json.audits[key].scoreDisplayMode != "notApplicable"
                        && json.audits[key].scoreDisplayMode != "informative"
                        && json.audits[key].scoreDisplayMode != "error") {
                        if (tracking[key] == null) {
                            let category = "unknown";
                            for (let cat in json.categories) {
                                for (let audit in json.categories[cat].auditRefs) {
                                    if (json.categories[cat].auditRefs[audit].id === key) { category = cat; }
                                }
                            }
                            tracking[key] = {
                                "count": { rcb: 0, rco: 0 },
                                "title": json.audits[key].title,
                                "manual": json.audits[key].scoreDisplayMode == "manual",
                                "description": json.audits[key].description,
                                "category": category
                            }
                        }
                        tracking[key].count[site]++;

                    }
                }
            }
            const get_normalized_score = (x => (x != null) ? Math.ceil(x.score * 100) : null)
            let filteredJsonEntry = {
                url: DATA + file,
                site: site,
                requestedUrl: json.requestedUrl,
                categories: {
                    performance: get_normalized_score(json.categories.performance),
                    accessibility: get_normalized_score(json.categories.accessibility),
                    'best-practices': get_normalized_score(json.categories['best-practices']),
                    seo: get_normalized_score(json.categories.seo),
                    pwa: get_normalized_score(json.categories.pwa),
                }
            }
            filteredJsonData.push(filteredJsonEntry);
        }
    });

}