// In the base folder (same level as package.json), run "npm run preprocess".

const fs = require("fs");
const path = require('path');

const SCRIPT_PATH_PREFIX = "../"

// TODO(winerip) dynamically find the newest full run. Alternatively, have
// lighthouse point this path at the most recent run
// TODO(winerip) find a good way to handle top 200 - right now, the json output
// files are doubled up and appear in both folders.

let averages = { rcb: { misc: {}, top: {} }, rco: { misc: {}, top: {} } };
let tracking = {};
let nodes = {};
let filteredJsonData = [];

readForSite('rcb', 'misc');
readForSite('rco', 'misc');
readForSite('rcb', 'top');
readForSite('rco', 'top');

let arr = Object.values(tracking);
arr.sort(sortByCount);

let flattenNodes = [];
Object.keys(nodes).map(key => {
    Object.keys(nodes[key]).map(key2 => {
        let flatNode = nodes[key][key2];
        flatNode.snippet = key;
        flatNode.selector = key2;
        flattenNodes.push(flatNode);
    })
});

// If nodes are unique to a single page, they should be handled based on page audits.
flattenNodes = flattenNodes.filter(node => sumCounts(node) > 1);
flattenNodes.sort(sortByCount);

// arr holds list of issues
fs.writeFile(
    "./public/scan-results/sites.json",
    JSON.stringify(filteredJsonData, undefined, 4),
    'utf8',
    function (err) { if (err) throw err });

fs.writeFile(
    "./public/scan-results/nodes.json",
    JSON.stringify(flattenNodes, undefined, 4),
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
    return sumCounts(a) < sumCounts(b) ? 1 : sumCounts(a) > sumCounts(b) ? -1 : 0;
}

function sumCounts(json) {
    return json.count.rcb.misc + json.count.rcb.top + json.count.rco.misc + json.count.rco.top;
}

function readForSite(site, dataSet) {
    averages[site][dataSet] = {
        performance: { scores: 0, totals: 0 },
        accessibility: { scores: 0, totals: 0 },
        "best-practices": { scores: 0, totals: 0 },
        seo: { scores: 0, totals: 0 },
        pwa: { scores: 0, totals: 0 }
    };

    const DATA = `/public/scan-results/base/${site}.${dataSet}/lighthouse/`;
    fs.readdirSync(path.join(SCRIPT_PATH_PREFIX, DATA)).forEach(file => {
        let json = JSON.parse(fs.readFileSync(path.join(SCRIPT_PATH_PREFIX, DATA, file)));
        if (json.requestedUrl) {
            for (let key in json.categories) {
                averages[site][dataSet][key].scores += (json.categories[key].score * 100);
                averages[site][dataSet][key].totals++;
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
                                "count": { rcb: { misc: 0, top: 0 }, rco: { misc: 0, top: 0 } },
                                "title": json.audits[key].title,
                                "manual": json.audits[key].scoreDisplayMode == "manual",
                                "description": json.audits[key].description,
                                "category": category
                            }
                        }
                        if (tracking[key].category == "accessibility"
                            && json.audits[key].scoreDisplayMode == "binary") {
                            for (let itemIndex in json.audits[key].details.items) {
                                let item = json.audits[key].details.items[itemIndex];
                                if (nodes[item.node.snippet] == null) {
                                    nodes[item.node.snippet] = {};
                                }
                                if (nodes[item.node.snippet][item.node.selector] == null) {
                                    nodes[item.node.snippet][item.node.selector] = {
                                        auditTriggered: json.audits[key].title,
                                        label: item.node.nodeLabel,
                                        "count": { rcb: { misc: 0, top: 0 }, rco: { misc: 0, top: 0 } },
                                        exampleUrl: json.requestedUrl,
                                        domPath: item.node.path
                                    }
                                }
                                nodes[item.node.snippet][item.node.selector].count[site][dataSet]++;
                            }

                        }
                        tracking[key].count[site][dataSet]++;

                    }
                }
            }
            const get_normalized_score = (x => (x != null) ? Math.ceil(x.score * 100) : null)
            let filteredJsonEntry = {
                url: DATA + file,
                site: site,
                dataSet: dataSet,
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
