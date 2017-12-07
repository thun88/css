let helperFns = {

  /**
   * Clone an object
   * @param  {object} obj The original objet
   * @return {object}     A new object
   */
  cloneSimpleObj: (obj) => {
    return JSON.parse(JSON.stringify(obj));
  },

  /**
   * [cssVarToCamelCaseStr description]
   * @param  {[type]} str [description]
   * @return {[type]}     [description]
   */
  cssVarToCamelCaseStr: (str) => {
    // parse "var(--var-name)" into "--var-name"
    str = str.replace('var(', '').replace(')', '')
    str = str.substr(str.indexOf('--') + 2);

    // parse "var-name" into "varName"
    return str.replace(/-([a-z])/g, function (g) {
      return g[1].toUpperCase();
    });
  },

  /**
   * Create objects of CSS values documentation
   * @param  {String} packageDir - The path to the packages dir
   * @return {Object}            - Key/value pair of css props/specs
   */
  createCssAnnotations: (packageDir) => {
    let content,
      blocks,
      cssVarAnnotations = {};

    // Parse the defaults first
    const defaultVarsObj = helperFns.parseCss(`${packageDir}/iux-base/_variables.css`);

    const themes = [
      { name: 'themeDark',         path: `${packageDir}/iux-theme-dark/theme-dark.css` },
      { name: 'themeHighContrast', path: `${packageDir}/iux-theme-high-contrast/theme-high-contrast.css` }
    ];

    cssVarAnnotations = {
      default: helperFns.cloneSimpleObj(defaultVarsObj),
    };

    // Build the theme objects
    themes.forEach(theme => {
      cssVarAnnotations[theme.name] = helperFns.cloneSimpleObj(cssVarAnnotations['default']);
      helperFns.parseCss(theme.path, cssVarAnnotations[theme.name]);
    });

    return cssVarAnnotations;
  },


  /**
   * Check to see if the string is a css variable
   * @param  {String}  str - The string to check
   * @return {Boolean}
   */
  isCssVar: (str) => {
    return str.substr(0, 3) === 'var';
  },

  /**
   * Returns the last folder in the path
   * @param  {String} filePath - The full dir path without the file
   * @return {String}          - The last folder in the path
   */
  createFileNameFromFolder: (filePath) => {
    let pathArr = filePath.split('/');
    let str = pathArr[pathArr.length - 1].replace('iux-', '');
    return str;
  },

  /**
   * Parse our the variables and values from CSS
   * @param  {String} cssPath             - The path to the css files
   * @param  {Object} themeAnnotationsObj - Object of themes
   * @return {Object}
   */
  parseCss: (cssPath, themeAnnotationsObj = {}) => {
    const
      annotateBlock = require('css-annotation-block'),
      isColor = require('is-color'),
      fs = require('fs');

    let content, blocks;

    content = fs.readFileSync(cssPath, 'utf-8').trim();
    blocks = annotateBlock(content);

    blocks.forEach(block => {
      block.nodes.forEach(node => {
        node.walkDecls(decl => {

          let propStr = helperFns.cssVarToCamelCaseStr(decl.prop);

          themeAnnotationsObj[propStr] = {
            originalDeclaration: decl.prop,
            originalValue: decl.value,
            value: decl.value
          };

          if (block.name === 'colorPalette') {
            themeAnnotationsObj[propStr].isColor = true;
          }
        });
      });
    });

    // Replace all values that are variables with actual values
    let val,
      varNameToLookUp = '';

    for (let cssProp in themeAnnotationsObj) {
      val = themeAnnotationsObj[cssProp].value;
      if (helperFns.isCssVar(val)) {

        varNameToLookUp = helperFns.cssVarToCamelCaseStr(val);

        // Set the current prop value of the variable
        themeAnnotationsObj[cssProp].value = themeAnnotationsObj[varNameToLookUp].value;
      }
    }
    return themeAnnotationsObj;
  },

  /**
   * Parse the names of the icons
   * @return {object}
   */
  parseIcons: (dir) => {
    const glob = require('glob');

    const iconFiles = glob.sync('*.svg', { cwd: dir });

    return iconSet = iconFiles.map(file => {
      return file.substring(0, file.lastIndexOf('.'));
    });
  }
};

module.exports = helperFns;
