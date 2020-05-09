# Auto-Lighthouse

Use this node script to run the lighthouse audit on each URL in a xlsx file.

## configure your workspace

you will need to install the following packages:

```
npm install lighthouse
npm install exceljs
npm install flags
```

## Run the script

The script requires two flags - the absolute path to your excel file and the prefix to use for your output files of the form `C4G_##_CD_`

In the base folder (same level as `package.json`), run `npm run lighthouse -- --inputFile="filepath" --outputPrefix=output_prefix`. For example: `npm run lighthouse -- --inputFile="c:/Users/User/Downloads/RCB Home B24.xlsx" --outputPrefix=C4G_00_CD_`

Additionally, if your excel file has issues, you can provide flags for which line column headers are on (headerStart), or which worksheet number the URLs are on (worksheet).

For example, if your excel file has an extra worksheet, and you need to run on worksheet 2, you would run `npm run lighthouse -- --inputFile="c:/Users/User/Downloads/RCB Home B24.xlsx" --outputPrefix=C4G_00_CD_ --worksheet=2`
