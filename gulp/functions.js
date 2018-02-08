let helperFns = {

 /**
   * Returns the last folder in the path
   * @param  {String} filePath - The full dir path without the file
   * @return {String}          - The last folder in the path
   */
  createFileNameFromFolder: filePath => {
    const gconfig = require('./gulp-config.js');

    let pathArr = filePath.split('/');
    let str = pathArr[pathArr.length - 1].replace(`${gconfig.project.prefix}-`, '');
    return str;
  }
};

module.exports = helperFns;
