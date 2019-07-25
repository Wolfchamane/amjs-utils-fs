const fs    = require('fs');
const path  = require('path');

/**
 * Scans a root path, indexing all files within it.
 * @param   {String}    root    Where to find
 * @param   {Array}     exclude Files to be excluded from scan
 * @param   {RegExp}    filter  Pattern of files to filter
 * @return  {Array}     Complete list of files within root
 */
const scan = (root = '', exclude = [], filter = /.+/) =>
{
    let output = [];

    if (fs.existsSync(root))
    {
        const stats = fs.statSync(root);
        if (stats.isDirectory())
        {
            fs.readdirSync(root).forEach(
                file => output = output.concat(scan(path.join(root, file), exclude, filter)));
        }

        output.push(root);
    }

    return output
        .filter(file => !exclude.includes(file))
        .filter(file => filter.test(file));
};

module.exports = scan;
