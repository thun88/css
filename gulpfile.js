// Gulp Plugins
var gulp = require('gulp');
var concat = require('gulp-concat');
var server = require('gulp-server-livereload');
var postcss = require('gulp-postcss');

// Global Variables
var cssSrc = 'src/css';
var siteRoot = 'site/www';
var siteTheme = 'site/theme';

// Task: Default
gulp.task('default', ['css', 'webserver']);

// Task: Dev
gulp.task('dev', ['css', 'webserver', 'watch']);

// Task: CSS
gulp.task('css', function () {
  var atImport = require('postcss-import'),
      autoprefixer = require('autoprefixer'),
      commas = require('postcss-commas'),
      cssnano = require('cssnano'),
      customProperties = require('postcss-custom-properties'),
      nested = require('postcss-nested'),
      styleGuide = require('postcss-style-guide');

  var plugins = [
      atImport,
      commas,
      nested,
      customProperties({ preserve: true }),
      autoprefixer,
      styleGuide({
        project: 'Soho Foundation',
        themePath: siteTheme,
        dest: siteRoot + '/index.html'
      })
    ];

  var postcssOptions = {
    map: true
  };

  return gulp.src(cssSrc + '/app.css')
    .pipe(postcss(plugins, postcssOptions))
    .pipe(gulp.dest('dist/css'))
    .pipe(postcss([cssnano], postcssOptions))
    .pipe(concat('app.min.css'))
    .pipe(gulp.dest('dist/css'));
});

// Task: Watch
gulp.task('watch', function() {
  var paths = [
   cssSrc + '/*',
   cssSrc + '/**/*',
   siteTheme + '/*'
  ];
  gulp.watch(paths, ['css']);
});

// Task: Webserver
gulp.task('webserver', function() {
  gulp.src(siteRoot)
    .pipe(server({
      livereload: true,
      defaultFile: 'index.html',
      open: true,
      log: 'debug'
    }));
});
