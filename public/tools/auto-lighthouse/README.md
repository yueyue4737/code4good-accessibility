# Auto-Lighthouse

Use this node script to run the lighthouse audit on each URL in a xlsx file.

## configure your workspace

you will need to install the following packages:

```
npm install lighthouse
npm install exceljs
```

## Run the script

The script expects two arguments - the absolute path to your excel file and the prefix to use for your output files of the form `C4G_##_CD_`

In the base folder (same level as `package.json`), run `npm run lighthouse filepath output_prefix`. For example: `npm run lighthouse "c:/Users/User/Downloads/RCB Home B24.xlsx" C4G_00_CD_`
