// In the base folder (same level as package.json), run "npm run lighthouse".
// Configure readWorkbook for the location of the excel sheet and
// data file name prefix.

const fs = require("fs");
const Excel = require("exceljs");
const lighthouse = require("lighthouse");
const chromeLauncher = require("chrome-launcher");

const RESULTS_FOLDER = "./public/scan-results/data";

function launchChromeAndRunLighthouse(url, opts, config = null) {
  return chromeLauncher
    .launch({ chromeFlags: opts.chromeFlags })
    .then((chrome) => {
      opts.port = chrome.port;
      return lighthouse(url, opts, config).then((results) => {
        return chrome.kill().then(() => results.report);
      });
    });
}

const readWorkbook = async (filepath, resultsPrefix) => {
  const startTime = Date.now();

  console.log("Reading xlsx file...");
  const workbook = new Excel.Workbook();
  await workbook.xlsx.readFile(filepath);
  const worksheet = workbook.getWorksheet(1);
  const urlCol = worksheet.getColumn("G");

  for (let rowNumber = 2; rowNumber < urlCol.values.length; rowNumber++) {
    const url = urlCol.values[rowNumber];
    if (!url) continue;

    console.log(`Auditing index ${rowNumber - 1}: ${url}`);
    const results = await launchChromeAndRunLighthouse(url, {
      // See lighthouse docs for configuration values. Adjust as needed.
      // https://github.com/GoogleChrome/lighthouse/blob/master/docs/configuration.md
      chromeFlags: [],
      onlyCategories: ["performance", "accessibility"],
      emulatedFormFactor: "desktop",
    });

    // change rowNumber - 1 to just rowNumber
    // so the file.json number matches the ss row nnumber
    const resultsFileName = `${RESULTS_FOLDER}/${resultsPrefix}${rowNumber}.json`;
    fs.writeFile(resultsFileName, results, (err) => {
      console.log(
        `Wrote result file for index ${rowNumber - 1}: ${resultsFileName}`
      );
      err && console.error(err);
    });
  }

  const endTime = Date.now();
  const elapsedTime = Math.floor((endTime - startTime) / 1000);
  console.log(`Finished in ${elapsedTime}s`);
};

// Configure the first argument to be the location of the xlsx file (relative to package.json).
// Configure the second argument to be the prefix of the result json files.
// readWorkbook('/mnt/c/Users/User/Downloads/RCO\ Donations\ B-4.xlsx', 'C4G-19_CD_');
let ssFile =
  "/Users/melocal/MyDox/RedCross/Code4Good/WCAG2.0_Accessibility/18-B-3.xlsx";
let resultFile = "C4G-18_CD_";
readWorkbook(ssFile, resultFile);
