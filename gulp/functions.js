let helperFns = {

  /**
   * Create objects of CSS values documentation
   * @param  {String} packageDir - The path to the packages dir
   * @return {Object}            - Key/value pair of css props/specs
   */
  createCssAnnotations: packageDir => {
    const objDefault = require(`${process.cwd()}/node_modules/@infor/ids-tokens/platforms/web/theme-default.raw.json`);
    const objDark = require(`${process.cwd()}/node_modules/@infor/ids-tokens/platforms/web/theme-dark.raw.json`);
    const objHighContrast = require(`${process.cwd()}/node_modules/@infor/ids-tokens/platforms/web/theme-high-contrast.raw.json`);

    return {
      themeDefault: objDefault.props,
      themeDark: objDark.props,
      themeHighContrast: objHighContrast.props
    };
  },

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
