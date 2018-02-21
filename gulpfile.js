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
const runSequence = require('run-sequence');


// -------------------------------------
//   PostCSS Plugins
// -------------------------------------
// postcss-for       : Allow at-for loops
// postcss-variables : Allow at-vars in at-for loops
// postcss-import    : Include css files with '@'
// postcss-commas    : Allow lists of properties per value
// postcss-cssnext   : Collection of future proof plugins
// postcss-mixins    : Use mixins
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
  mixins     : require('postcss-mixins'),
  lost       : require('lost')
};


// -------------------------------------
//   Global Variables
// -------------------------------------
let arrOfIcons = [];


// -------------------------------------
//   Load Tasks
// -------------------------------------
require(`${gconfig.paths.tasks}/accessibility.js`)(gulp, gconfig);
require(`${gconfig.paths.tasks}/build.js`)(gulp, gconfig);
require(`${gconfig.paths.tasks}/clean.js`)(gulp, gconfig);
require(`${gconfig.paths.tasks}/demo-css-compile.js`)(gulp, gconfig);
require(`${gconfig.paths.tasks}/deploy.js`)(gulp, gconfig);
require(`${gconfig.paths.tasks}/json-md-compile.js`)(gulp, gconfig);
require(`${gconfig.paths.tasks}/json-yaml-compile.js`)(gulp, gconfig);
require(`${gconfig.paths.tasks}/serve.js`)(gulp, gconfig);
require(`${gconfig.paths.tasks}/site-css-compile.js`)(gulp, gconfig);
require(`${gconfig.paths.tasks}/site-css-lint.js`)(gulp, gconfig);
require(`${gconfig.paths.tasks}/src-css-compile.js`)(gulp, gconfig, postCssPlugins);
require(`${gconfig.paths.tasks}/src-css-lint.js`)(gulp, gconfig);
require(`${gconfig.paths.tasks}/src-md-compile.js`)(gulp, gconfig);

require(`${gconfig.paths.tasks}/sketch-to-svgs.js`)(gulp, gconfig);
require(`${gconfig.paths.tasks}/svg-store.js`)(gulp, gconfig);


// -------------------------------------
//   Common Tasks
// -------------------------------------
// gulp default
// gulp dev
// gulp publish
//
// npm test (package json)
// -------------------------------------

gulp.task('default', ['clean', 'css:lint'], (done) => {
  runSequence(
    'svg:store',
    'src:compile',
    ['site:compile', 'demo:css:compile'],
    done);
});

gulp.task('dev', ['clean'], (done) => {
  runSequence('svg:store', 'src:compile', 'site:compile', 'serve', done);
});

gulp.task('publish', (done) => {
  runSequence('clean', 'src:css:lint', 'build', 'deploy', done);
});


// -------------------------------------
//   Build Task Combos
// -------------------------------------
gulp.task('css:lint', ['src:css:lint', 'site:css:lint']);
gulp.task('src:compile', ['src:css:compile']);
gulp.task('site:compile', ['site:css:compile', 'src:md:compile']);
