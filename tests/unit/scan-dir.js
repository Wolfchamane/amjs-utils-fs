const { equal } = require('assert');
const scanDir = require('../../src/scan-dir');
const path = require('path');

(function ()
{
    const files = scanDir();
    equal(Array.isArray(files), true, '@amjs/utils-fs > scanDir > returns an Array');
    equal(files.length, 0, '@amjs/utils-fs > scanDir > by default returns 0 files');
})();

(function ()
{
    let files = scanDir(path.resolve(__dirname, '..', '..', 'src'), [], /\.m?js$/);
    equal(files.length, 2, '@amjs/utils-fs > scanDir > filters by pattern');

    files = scanDir(
        path.resolve(__dirname, '..', '..', 'src'),
        [
            path.resolve(__dirname, '..', '..', 'src', 'make-folder.js')
        ],
        /\.m?js$/
    );
    equal(files.length, 1, '@amjs/utils-fs > scanDir > filter excluded files');
})();
