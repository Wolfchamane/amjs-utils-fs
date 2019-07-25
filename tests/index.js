const path = require('path');
const scanDir = require('../src/scan-dir.mjs');

scanDir(__dirname, [ path.join(__dirname, 'index.js') ], /[^_].+\.m?js$/)
    .forEach(file => require(file));
