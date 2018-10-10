/**
 * Returns the last folder in the path
 * @param  {String} filePath - The full dir path without the file
 * @return {String} - The last folder in the path
 */
module.exports.createFileNameFromFolder = filePath => {
  const gconfig = require('./gulp-config.js');

  let pathArr = filePath.split('/');
  let str = pathArr[pathArr.length - 1].replace(`${gconfig.project.prefix}-`, '');
  return str;
};


/**
 * Return the full path to a specific token type
 * @param  {String} format - Corresponding extension for ids-identity
 * @return {String} - The full path
 */
module.exports.getIdsTokensPath = (format = 'json') => {
  const gconfig = require('./gulp-config.js');
  return `${gconfig.paths.idsIdentity.tokens}/${gconfig.project.idsTokensThemeName}.${format}`
};


/**
 * Get the properties array from the raw tokens json
 */
module.exports.getIdsTokensProperties = () => {
  const fs = require('fs');
  const path = this.getIdsTokensPath();
  const idsTokensRawJson = JSON.parse(fs.readFileSync(path, 'utf8'));
  return idsTokensRawJson.props;
}
