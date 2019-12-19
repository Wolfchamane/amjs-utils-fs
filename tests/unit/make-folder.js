const { equal } = require('assert');
const fs = require('fs');
const path = require('path');
const makeFolder = require('../../src/make-folder');

(function ()
{
    makeFolder();
    equal(!fs.existsSync(''), true, '@amjs/utils-fs > make-folder > by default, does nothing');
})();

(function ()
{
    const toCreate = path.join(__dirname, 'test-folder');
    makeFolder(toCreate);
    equal(fs.existsSync(toCreate), true, '@amjs/utils-fs > make-folder > creates a path');
    equal((fs.statSync(toCreate)).isDirectory(), true, '@amjs/utils-fs > make-folder > created path is a folder');
    fs.rmdirSync(toCreate);
})();
