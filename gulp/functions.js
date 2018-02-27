let helperFns = {

 /**
   * Returns the last folder in the path
   * @param  {String} filePath - The full dir path without the file
   * @return {String} - The last folder in the path
   */
  createFileNameFromFolder: filePath => {
    const gconfig = require('./gulp-config.js');

    let pathArr = filePath.split('/');
    let str = pathArr[pathArr.length - 1].replace(`${gconfig.project.prefix}-`, '');
    return str;
  },

  /**
   * Return the full path to a specific token type
   * @param  {String} format - Corresponding extension for ids-tokens
   * @return {String} - The full path
   */
  getIdsTokensPath: (format = 'raw.json') => {
    const gconfig = require('./gulp-config.js');
    return `${gconfig.paths.idsTokensWeb.root}/${gconfig.project.idsTokensThemeName}.${format}`
  }
};

module.exports = helperFns;
