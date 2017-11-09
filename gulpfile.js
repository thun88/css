// **************************************************************************
//
//   Gulpfile
//
// **************************************************************************

// -------------------------------------
// Load gulp, config, & plugins
// -------------------------------------
const gulp = require('gulp');
const gconfig = require('./gulp/gulp-config.js');
const fs = require('fs');
const runSequence = require('run-sequence');


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
let compiledSvgHtml = fs.readFileSync(`${gconfig.paths.src.icons}/icons.svg`, 'utf-8');


// -------------------------------------
//   Load Tasks
// -------------------------------------
require(`${gconfig.paths.tasks}/accessibility.js`)(gulp, gconfig);
require(`${gconfig.paths.tasks}/build.js`)(gulp, gconfig, publishDocObj);
require(`${gconfig.paths.tasks}/clean.js`)(gulp, gconfig);
require(`${gconfig.paths.tasks}/css-lint.js`)(gulp, gconfig);
require(`${gconfig.paths.tasks}/json-js-compile.js`)(gulp, gconfig, publishDocObj);
require(`${gconfig.paths.tasks}/json-md-compile.js`)(gulp, gconfig, publishDocObj);
require(`${gconfig.paths.tasks}/json-yaml-compile.js`)(gulp, gconfig);
require(`${gconfig.paths.tasks}/deploy.js`)(gulp, gconfig);
require(`${gconfig.paths.tasks}/serve.js`)(gulp, gconfig);
require(`${gconfig.paths.tasks}/site-css-compile.js`)(gulp, gconfig, postCssPlugins);
require(`${gconfig.paths.tasks}/src-md-compile.js`)(gulp, gconfig, postCssPlugins, arrOfIcons, compiledSvgHtml);
require(`${gconfig.paths.tasks}/src-css-compile.js`)(gulp, gconfig, postCssPlugins);
require(`${gconfig.paths.tasks}/src-js-compile.js`)(gulp, gconfig);
require(`${gconfig.paths.tasks}/svg-optimize.js`)(gulp, gconfig, arrOfIcons);
require(`${gconfig.paths.tasks}/svg-store.js`)(gulp, gconfig, arrOfIcons);


// -------------------------------------
//   Common Tasks
// -------------------------------------
// gulp default
// gulp dev
// gulp publish
// gulp css:lint
//
// npm run test (package json)
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
    'deploy'
  );
});


// -------------------------------------
//   Build Task Combos
// -------------------------------------
gulp.task('src:compile', ['src:css:compile', 'src:js:compile']);
gulp.task('site:compile', ['site:css:compile', 'src:md:compile']);
