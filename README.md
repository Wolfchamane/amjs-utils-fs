# @amjs/utils-fs 0.1.0

![Statements](https://img.shields.io/badge/Statements-100%25-brightgreen.svg) ![Branches](https://img.shields.io/badge/Branches-100%25-brightgreen.svg) ![Functions](https://img.shields.io/badge/Functions-100%25-brightgreen.svg) ![Lines](https://img.shields.io/badge/Lines-100%25-brightgreen.svg)

> Provides set of top-level utilities for filesystem management

## Installation

```bash
$ npm i @amjs/utils-fs
```
## Usage

Given the following tre:

```
/
    folder/
        file.txt
        index.html
```

#### make-folder

Creates a folder following a complete path address.

```javascript
const { makeFolder } = require('@amjs/utils-fs');
const path = require('path');

const root = path.join('/', 'folder', 'new-folder'); // '/folder/new-folder'
makeFolder(root);
```

Will output following tree:

```
/
    folder/
        new-folder/
        file.txt
        index.html
```

#### scan-dir

Scans a folder returning an array with all contained file paths.

```javascript
const { scanDir } = require('@amjs/utils-fs');
const path = require('path');

const root = path.join('/', 'folder');
let files = scanDir(root);
console.log(files); // [ '/folder/file.txt', '/folder/index.html' ]

// Use second argument to exclude files from output
files = scanDir(root, [ path.join(root, 'file.txt') ];
console.log(files); // [ '/folder/index.html' ]

// Use third argument to filter output by a regular expression
files = scanDir(root, [], /.+\.m?js$/);
console.log(files); // []
```
