// In the base folder (same level as package.json), run "npm run lighthouse".
// Configure readWorkbook for the location of the excel sheet and
// data file name prefix.

const fs = require("fs");
const Excel = require("exceljs");
const lighthouse = require("lighthouse");
const chromeLauncher = require("chrome-launcher");
const flags = require("flags");

flags.defineString('inputFile', null, 'File containing urls to scan.');
flags.defineString('inputFormat', 'xls', 'Format of inputFile. Either xls or text.');
flags.defineString('outputPrefix', '', 'Filename prefix to use when writing reports.');
flags.defineString('ticket', 0, 'If specified, write reports to C4G-$ticket_CD_$i.json.');
flags.defineBoolean('linux', false, 'Run on linux. Disable Chrome sandbox.');
flags.defineBoolean('headless', false, 'Use headless chrome.');
flags.defineBoolean('clobber', false, 'If True, overwrite existing json reports.');
flags.defineInteger('headerStart', 1, 'Row number on which the header including the url label is located');
flags.defineInteger('worksheet', 1, 'which worksheet to read from, if multiple sheets present');

const RESULTS_FOLDER = "./public/scan-results/data";

const readWorkbook = async (filepath, resultsPrefix, headerRowNumber, worksheetNumber) => {
  const startTime = Date.now();

  var urlsToAudit = [];
  var badUrls = [];
  // TODO(rousik): do something with this badUrls list.

  if (flags.get('inputFormat') == 'xls') {
    console.log("Reading xlsx file...");
    const workbook = new Excel.Workbook();
    await workbook.xlsx.readFile(filepath);
    const worksheet = workbook.getWorksheet(worksheetNumber);
    // Find the url column
    var columnHeader = "";
    var columnNumber = 0;
    while (columnHeader != "url" && columnNumber < worksheet.columnCount) {
      columnNumber++;
      columnHeader = worksheet.getRow(headerRowNumber).getCell(columnNumber).value;
    }
    if (columnHeader == null) {
      console.error('Couldn\'t find the url column');
    } else {
      console.log('URL column found at column ' + columnNumber);
    }
    const urlCol = worksheet.getColumn(columnNumber);
    for (let rowNumber = 2; rowNumber < urlCol.values.length; rowNumber++) {
      const url = urlCol.values[rowNumber];
      if (!url) continue;
      if (!url.toString().startsWith('http')) {
        badUrls.push(url);
        continue;
      }
      urlsToAudit.push(url);
    }
  } else if (flags.get('inputFormat') == 'text') {
    urlsToAudit = fs.readFileSync(filepath).toString().split("\n");
    // TODO: throw out things that don't start with http here too?
  } else {
    throw `Unknown input format ${flags.get("inputFormat")}`;
  }

  // Launch headless chrome
  var cflags = [];
  if (flags.get('linux')) {
    cflags.push('--no-sandbox');
  }
  if (flags.get('headless')) {
    cflags.push('--headless');
  }
  const browser = await chromeLauncher.launch({
    chromeFlags: cflags
  });

  for (let i = 0; i < urlsToAudit.length; i++) {
    const url = urlsToAudit[i];
    const resultsFileName = `${RESULTS_FOLDER}/${resultsPrefix}${i}.json`;

    console.log(`Auditing index ${i}: ${url}`);
    try {
      const results = await lighthouse(url, {
        port: browser.port,
        onlyCategories: ["performance", "accessibility"],
        emulatedFormFactor: "desktop",
      });
      fs.writeFile(resultsFileName, results.report, (err) => {
        if (err) {
          console.error(`Failed  to write report for index ${i}: ${err}`);
        } else {
          console.log(`Wrote report for index: ${i}: ${resultsFileName}`);
        }
      });
    } catch (err) {
      console.error(`Failed to audit ${url}`);
      badUrls.push(url);
    }
  }

  const endTime = Date.now();
  const elapsedTime = Math.floor((endTime - startTime) / 1000);
  console.log(`Finished in ${elapsedTime}s`);
  await browser.kill();
  if (badUrls.length > 0) {
    throw `Bad URLs were found during execution: ${badUrls}`;
  }
};


flags.parse();
const reportPrefix = (
  flags.get('outputPrefix') +
  (flags.get('ticket') > 0 ? `C4G-${flags.get('ticket')}_CD_` : ''));

if (reportPrefix.length == 0) {
  throw 'Specify either --ticket $N or --outputPrefix when running this.'
}
readWorkbook(flags.get('inputFile'), reportPrefix, flags.get('headerStart'), flags.get('worksheet'));
