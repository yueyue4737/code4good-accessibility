// In the base folder (same level as package.json), run "npm run preprocess".

const fs = require("fs");
const path = require('path');

// TODO(winerip) dynamically find the newest full run. Alternatively, have lighthouse point this path at the most recent run
const DATA_FOLDER = "./public/scan-results/data";
const CHROME_REGEX = /C4G-[0-9]+_CD_[0-9]+.json/g;

// TODO(winerip) do the filtering and aggregating in the loop to prevent storing the full data in memory.
unfilteredJsonData = [];
fs.readdirSync(DATA_FOLDER).forEach(file => {
    if (file.match(CHROME_REGEX)) {
        let json = JSON.parse(fs.readFileSync(path.join(DATA_FOLDER, file)));
        json.url = '/scan-results/data/' + file;
        if (json.requestedUrl) unfilteredJsonData.push(json);
    }
});

let scores = {
    performance: 0,
    accessibility: 0,
    "best-practices": 0,
    seo: 0,
    pwa: 0
}
let totals = {
    performance: 0,
    accessibility: 0,
    "best-practices": 0,
    seo: 0,
    pwa: 0
}
for (let i = 0; i < unfilteredJsonData.length; i++) {
    for (let key in unfilteredJsonData[i].categories) {
        scores[key] += (unfilteredJsonData[i].categories[key].score * 100);
        totals[key]++;
    }
}
let averages = {
    performance: Math.ceil(scores.performance / totals.performance),
    accessibility: Math.ceil(scores.accessibility / totals.accessibility),
    "best-practices": Math.ceil(scores["best-practices"] / totals["best-practices"]),
    seo: Math.ceil(scores.seo / totals.seo),
    pwa: Math.ceil(scores.pwa / totals.pwa)
}

let tracking = {};
for (var i = 0; i < unfilteredJsonData.length; i++) {
    for (var key in unfilteredJsonData[i].audits) {
        if (unfilteredJsonData[i].audits.hasOwnProperty(key)) {
            // Accessibility scores are binary. Performance will want a score target.
            // Null scores are possible and mean a test wasn't scored, and shouldn't 
            // be counted
            if (tracking[key] != null && unfilteredJsonData[i].audits[key].score == 0) {
                tracking[key].count = tracking[key].count + 1;
            }
            else if (unfilteredJsonData[i].audits[key].score == 0) {
                tracking[key] = {
                    "count": 1,
                    "title": unfilteredJsonData[i].audits[key].title,
                    "manual": unfilteredJsonData[i].audits[key].score == null,
                    "description": unfilteredJsonData[i].audits[key].description
                }
            }
        }
    }
}
let arr = Object.keys(tracking).map(function (key) {
    return tracking[key];
});
arr.sort(sortByCount);

const normalize = ((x) => x ? Math.ceil(x.score * 100) : null)

let filteredJsonData = []
unfilteredJsonData.forEach(entry => {
    let filteredJsonEntry = {
        url: entry.url,
        requestedUrl: entry.requestedUrl,
        categories: {
            performance: normalize(entry.categories.performance),
            accessibility: normalize(entry.categories.accessibility),
            'best-practices': normalize(entry.categories['best-practices']),
            seo: normalize(entry.categories.seo),
            pwa: normalize(entry.categories.pwa),
        }
    }
    filteredJsonData.push(filteredJsonEntry);
});
// arr holds list of issues
// averages holds averages
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
    if (a.count < b.count) return 1;
    if (a.count > b.count) return -1;
    return 0;
}
