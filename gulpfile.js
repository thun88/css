// **************************************************************************
//
//   Gulpfile
//
// **************************************************************************

// -------------------------------------
// Load gulp, config, & plugins
// -------------------------------------
const
  gulp        = require('gulp'),
  paths       = require('./gulp/gulp-config.js'),
  fs          = require('fs'),
  helperFns   = require('./gulp/functions.js'),
  runSequence = require('run-sequence');


// -------------------------------------
//   PostCSS Plugins
// -------------------------------------
// postcss-for       : Allow at-for loops
// postcss-variables : Allow at-vars in at-for loops
// postcss-import    : Include css files with '@'
// postcss-commas    : Allow lists of properties per value
// postcss-cssnext   : Collection of future proof plugins
// cssnano           : CSS minify
// lost              : Grid system
// -------------------------------------
const postCssPlugins = {
  atFor      : require('postcss-for'),
  atImport   : require('postcss-import'),
  atVariables: require('postcss-at-rules-variables'),
  commas     : require('postcss-commas'),
  cssnext    : require('postcss-cssnext'),
  cssnano    : require('cssnano'),
  lost       : require('lost')
};


// -------------------------------------
//   Global Variables
// -------------------------------------
let publishDocObj = {};
let arrOfIcons = [];
let compiledSvgHtml = fs.readFileSync(`${paths.src.icons}/icons.svg`, 'utf-8');


// -------------------------------------
//   Load Tasks
// -------------------------------------
require(`${paths.tasks}/build.js`)(gulp, paths, publishDocObj);
require(`${paths.tasks}/clean.js`)(gulp, paths);
require(`${paths.tasks}/css-lint.js`)(gulp, paths);
require(`${paths.tasks}/json-js-compile.js`)(gulp, paths, publishDocObj);
require(`${paths.tasks}/json-md-compile.js`)(gulp, paths, publishDocObj);
require(`${paths.tasks}/publish.js`)(gulp, paths);
require(`${paths.tasks}/serve.js`)(gulp, paths);
require(`${paths.tasks}/site-css-compile.js`)(gulp, paths, postCssPlugins);
require(`${paths.tasks}/site-html-compile.js`)(gulp, paths, postCssPlugins, arrOfIcons, compiledSvgHtml);
require(`${paths.tasks}/src-css-compile.js`)(gulp, paths, postCssPlugins);
require(`${paths.tasks}/src-js-compile.js`)(gulp, paths);
require(`${paths.tasks}/svg-optimize.js`)(gulp, paths, arrOfIcons);
require(`${paths.tasks}/svg-store.js`)(gulp, paths, arrOfIcons);
require(`${paths.tasks}/test.js`)(gulp, paths);


// -------------------------------------
//   Common Tasks
// -------------------------------------
gulp.task('default', ['clean', 'svg:store'], () => {
  runSequence('src:compile', 'site:compile');
});

gulp.task('dev', ['clean', 'svg:store'], () => {
  runSequence('src:compile', 'site:compile', 'serve');
});

gulp.task('publish', () => {
  runSequence(
    'clean',
    'build',
    'publish'
  );
});


// -------------------------------------
//   Build Task Combos
// -------------------------------------
gulp.task('src:compile', ['src:css:compile', 'src:js:compile']);
gulp.task('site:compile', ['site:css:compile', 'site:html:compile']);
