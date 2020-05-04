// In the base folder (same level as package.json), run "npm run lighthouse".
// Configure readWorkbook for the location of the excel sheet and
// data file name prefix.

const fs = require("fs");
const Excel = require("exceljs");
const lighthouse = require("lighthouse");
const chromeLauncher = require("chrome-launcher");
var flags = require('flags');

flags.defineString('inputFile', '', 'Excel file to read');
flags.defineString('outputPrefix', '', 'JSON file prefix');
flags.defineInteger('headerStart', 1, 'Row number on which the header including the url label is located');
flags.defineInteger('urlOffset', 1, 'How many rows after the url label the first url appears (1 for next row)');
flags.defineInteger('worksheet', 1, 'which worksheet to read from, if multiple sheets present');

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

const readWorkbook = async (filepath, resultsPrefix, headerRowNumber, UrlRowOffsetFromHeader, worksheetNumber) => {
  const startTime = Date.now();
  const UrlStartRowNumber = headerRowNumber + UrlRowOffsetFromHeader;
  const IndexOffsetForNaming = UrlStartRowNumber - 1;

  console.log("Header expected on row "+headerRowNumber);
  console.log("URLs expected offset from header by "+ UrlRowOffsetFromHeader);
  console.log("Reading xlsx file from " + filepath);
  const workbook = new Excel.Workbook();
  await workbook.xlsx.readFile(filepath);
  const worksheet = workbook.getWorksheet(worksheetNumber);
  // Find the url column
  var columnHeader = "";
  var columnNumber = 0;
  while (columnHeader != "url" && columnNumber<worksheet.columnCount) {
    columnNumber++;
    columnHeader = worksheet.getRow(headerRowNumber).getCell(columnNumber).value;
  }
  if (columnHeader == null) {
    console.error('Couldn\'t find the url column');
  } else {
    console.log('URL column found at column '+columnNumber);
  }
  const urlCol = worksheet.getColumn(columnNumber);

  for (let rowNumber = UrlStartRowNumber; rowNumber < urlCol.values.length; rowNumber++) {
    const url = urlCol.values[rowNumber];
    if (!url) continue;

    console.log(`Auditing index ${rowNumber - IndexOffsetForNaming}: ${url}`);
    const results = await launchChromeAndRunLighthouse(url, {
      // See lighthouse docs for configuration values. Adjust as needed.
      // https://github.com/GoogleChrome/lighthouse/blob/master/docs/configuration.md
      chromeFlags: [],
      onlyCategories: ["performance", "accessibility"],
      emulatedFormFactor: "desktop",
    });

    const resultsFileName = `${RESULTS_FOLDER}/${resultsPrefix}${rowNumber - IndexOffsetForNaming}.json`;
    fs.writeFile(resultsFileName, results, (err) => {
      console.log(
        `Wrote result file for index ${rowNumber - IndexOffsetForNaming}: ${resultsFileName}`
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
flags.parse();
readWorkbook(flags.get('inputFile'), flags.get('outputPrefix'), flags.get('headerStart'), flags.get('urlOffset'), flags.get('worksheet'));
