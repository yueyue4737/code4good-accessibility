// In the base folder (same level as package.json), run "npm run lighthouse".
// Configure readWorkbook for the location of the excel sheet and
// data file name prefix.

const fs = require("fs");
const lighthouse = require("lighthouse");
const chromeLauncher = require("chrome-launcher");
const flags = require("flags");
const crypto = require("crypto");
const path = require("path");
const humanizeDuration = require("humanize-duration");

flags.defineBoolean('linux', false, 'Run on linux. Disable Chrome sandbox.');
flags.defineBoolean('headless', false, 'Use headless chrome.');
flags.defineBoolean('reuse-chrome', true, 'Whether to reuse chrome instance for multiple audits.');
flags.defineBoolean('clobber', false, 'If True, overwrite existing json reports.');

flags.defineString('scan_id', 'base', 'Specifies top level directory to store audit results in.')
flags.defineString('site', null, 'If specified, audit given site (rco, rcb) using sitemap.xls')
flags.defineString('top-urls', null, 'Text file containing top urls.')
flags.parse();

// TODO: allow for passing custom url list
const RESULTS_FOLDER = "./public/scan-results";
const SITEMAPS = {
  rco: 'https://www.redcross.org/sitemap.xml',
  rcb: 'https://www.redcrossblood.org/sitemap.xml'
}

const topUrls = (() => {
  if (flags.get('top-urls')) {
    return new Set(fs.readFileSync(flags.get('top-urls')).toString().split("\n"));
  } else {
    return new Set();
  }
})();

async function launchChrome() {
  /// Launches chrome browser for the auditing.

  var cflags = [];
  if (flags.get('linux')) {
    cflags.push('--no-sandbox');
  }
  if (flags.get('headless')) {
    cflags.push('--headless');
  }
  return chromeLauncher.launch({chromeFlags: cflags})
}

async function getSitemap(site) {
  /// Returns parsed sitemap object for a given website.

  const url = SITEMAPS[site];
  const https = require('https');
  const xml2js = require('xml2js');
  const fetch = require('node-fetch');

  // Extracts urlset.url[].loc from the sitemap.xml
  return fetch(url)
    .then(res => res.text())
    .then(txt => xml2js.parseStringPromise(txt))
    .then(xml => xml.urlset.url.map(u => u.loc.toString()));
}

function auditFilename(site, url) {
  /// Returns filename where audit report for this url should be written.

  // "all" if no topUrls are given, "top"/"misc" otherwise.
  let kind = topUrls.has(url) ? "top" : (topUrls.size ? "misc" : "all");
  let md = crypto.createHash("md5").update(url).digest("hex");
  return `${RESULTS_FOLDER}/${flags.get("scan_id")}/${site}.${kind}/lighthouse/${md}.json`
}

async function auditWebsite(site) {
  /// Runs audit for a given website
  let urlsToAudit = await getSitemap(site);
  console.log(`Sitemap returned ${urlsToAudit.length} urls`);

  if (topUrls.size) {
    // This is ugly but it seems that Javascript primitive types are truly primitive.
    let priorityUrls = urlsToAudit.filter(x => topUrls.has(x));
    let miscUrls = urlsToAudit.filter(x => !topUrls.has(x));
    console.log(`Got ${priorityUrls.length} priority and ${miscUrls.length} misc urls.`);
    urlsToAudit = priorityUrls.concat(miscUrls);
  }

  let browser = null;
  let badUrls = [];
  if (flags.get('reuse-chrome')) {
    browser = await launchChrome();
  }

  const startTime = Date.now();
  for (let i=0; i < urlsToAudit.length; i++) {
    const url = urlsToAudit[i];

    const elapsed = (Date.now() - startTime);
    if (i > 0) {
      const perItem = (elapsed / i);
      const timeLeft = perItem * (urlsToAudit.length - i);

      const pctDone = Number.parseFloat(i*100/urlsToAudit.length).toFixed(1);
      const elapsedStr = humanizeDuration(elapsed, {round: true, largest: 2});
      const timeLeftStr = humanizeDuration(timeLeft, {round: true, largest: 2});
      const perItemStr = humanizeDuration(perItem, {maxDecimalPoints: 1});

      console.log(`[ ${i}/${urlsToAudit.length} (${pctDone}%) done ]`);
      console.log(`[ ${elapsedStr} elapsed | ${timeLeftStr} left | ${perItemStr} per url ]`);
    }

    const auditFile = auditFilename(site, url);
    if (fs.existsSync(auditFile) && !flags.get('clobber')) {
      console.log(`Audit already exists for ${url}`);
      continue;
    }

    console.log(`Starting audit of url ${url}`);
    if (browser == null) {
      browser = await launchChrome();
    }

    let results = null;
    try {
      results = await lighthouse(url, {
        port: browser.port,
        onlyCategories: ["performance", "accessibility"],
        emulatedFormFactor: "desktop",
      });
    } catch(err) {
      console.error(`Failed to audit ${url}: ${err}`);
      badUrls.push(url);
      continue;
    }

    if (results.report == undefined) {
      console.error(`Failed to obtain report for url: {url}`)
      badUrls.push(url);
      continue;
    }

    const auditDir = path.dirname(auditFile);
    if (!fs.existsSync(auditDir)) {
      fs.mkdirSync(auditDir, {recursive: true});
    }

    fs.writeFile(auditFile, results.report, (err) => {
      if (err) {
        console.error(`Failed  to write report for url: ${url}`);
        badUrls.push(url);
      } else {
        console.log(`Audit for ${url} written to ${auditFile}`);
      }
    });

    if (!flags.get('reuse-chrome')) {
      await browser.kill();
      browser = null;
    }
  }
  if (browser != null) {
    browser.kill();
  }
  // Write bad urls somewhere
} 

auditWebsite(flags.get("site"));
