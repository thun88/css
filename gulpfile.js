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
let arrOfIcons = [];
let compiledSvgHtml = fs.readFileSync(`${paths.src.icons}/icons.svg`, 'utf-8');


// -------------------------------------
//   Load Tasks
// -------------------------------------
require(`${paths.tasks}/build-packages-css.js`)(gulp, paths, postCssPlugins);
require(`${paths.tasks}/build-packages-docjs.js`)(gulp, paths);

require(`${paths.tasks}/build-site-css.js`)(gulp, paths, postCssPlugins);
require(`${paths.tasks}/build-site-html.js`)(gulp, paths, postCssPlugins, arrOfIcons, compiledSvgHtml);

require(`${paths.tasks}/build-zip.js`)(gulp, paths);

require(`${paths.tasks}/clean-dist.js`)(gulp, paths);
require(`${paths.tasks}/clean-site.js`)(gulp, paths);
require(`${paths.tasks}/clean-zip.js`)(gulp);

require(`${paths.tasks}/publish-zip.js`)(gulp, paths);

require(`${paths.tasks}/server.js`)(gulp, paths);

require(`${paths.tasks}/stylelint-packages.js`)(gulp, paths);
require(`${paths.tasks}/stylelint-site.js`)(gulp, paths);

require(`${paths.tasks}/svg-optimize.js`)(gulp, paths, arrOfIcons);
require(`${paths.tasks}/svg-store.js`)(gulp, paths, arrOfIcons);

require(`${paths.tasks}/test.js`)(gulp, paths);


// -------------------------------------
//   Common Tasks
// -------------------------------------
gulp.task('default', () => {
  runSequence('clean', 'svg:store', 'build:packages', 'build:site');
});

gulp.task('dev', () => {
  runSequence('clean', 'svg:store', 'build:packages', 'build:site', 'serve');
});

gulp.task('deploy', () => {
  runSequence('clean:zip', 'build:zip', 'publish:zip');
});


// -------------------------------------
//   Build Task Combos
// -------------------------------------
gulp.task('build:site', ['build:site:css', 'build:site:html']);

gulp.task('build:packages', ['build:packages:css']);


// -------------------------------------
//   Clean All
// -------------------------------------
gulp.task('clean', ['clean:site', 'clean:dist', 'clean:zip']);


// -------------------------------------
//   Stylelint All
// -------------------------------------
gulp.task('stylelint', ['stylelint:packages', 'stylelint:site']);
