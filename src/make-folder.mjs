const fs    = require('fs');
const path  = require('path');

/**
 * Creates a folder if not exists
 * @param   {String}    dir Folder path to create
 * @private
 */
/* istanbul ignore next */
const _mkdir = (dir = '') =>
{
    if (!fs.existsSync(dir))
    {
        fs.mkdirSync(dir);
    }
};

/**
 * Creates a folder recursively from top to bottom of route path
 * @param   {*}    route   Folder's path to be created
 */
module.exports = (route = '') =>
{
    route = route
        .split(path.sep)
        .map(item => !item ? path.sep : item);

    let node = route.shift();
    _mkdir(node);

    route.forEach(
        folder =>
        {
            node = path.join(node, folder);
            _mkdir(node);
        }
    );
};
