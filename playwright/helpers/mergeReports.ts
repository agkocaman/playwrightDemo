import {mergeHTMLReports} from 'playwright-merge-html-reports'
var fs = require('fs')
var path = require('path')

const reportPathsToMerge = fs
    .readdirSync(process.cwd() + "/report", { withFileTypes: true })
    .filter((item:any) => item.isDirectory())
    .map(({ name }) => path.resolve(process.cwd() + "/report", name));

async function runReport(paths: string[]) {
    await mergeHTMLReports(paths, {
        outputFolderName: "merged-report",
    });
}

runReport(reportPathsToMerge);