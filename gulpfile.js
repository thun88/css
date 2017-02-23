// Gulp Plugins
var gulp = require('gulp');
var concat = require('gulp-concat');
var server = require('gulp-server-livereload');
var postcss = require('gulp-postcss');


// PostCss Plugins
var atImport = require('postcss-import');
var autoprefixer = require('autoprefixer');
var cssnano = require('cssnano');
var commas = require('postcss-commas');
var customProperties = require('postcss-custom-properties');
var mixins = require('postcss-mixins');
var styleGuide = require('postcss-style-guide');

//Global Settings
var siteRoot = "site/www"

// Webserver
gulp.task('webserver', function() {
  gulp.src(siteRoot)
    .pipe(server({
      livereload: true,
      defaultFile: 'index.html',
      open: true,
      log: 'debug'
    }));
});


// CSS
gulp.task('css', function () {
  var postcssOptions = {
    map: true
  }
  var plugins = [
    atImport,
    mixins,
    commas,
    customProperties({ preserve: true }),
    autoprefixer,
    styleGuide({
      project: 'Soho Foundation',
      themePath: 'site/theme',
      dest: siteRoot + '/index.html'
    })
  ];
  return gulp.src('src/app.css')
    .pipe(postcss(plugins, postcssOptions))
    .pipe(gulp.dest('dist/css'))
    .pipe(postcss([cssnano], postcssOptions))
    .pipe(concat('app.min.css'))
    .pipe(gulp.dest('dist/css'));
});


// Watch
gulp.task('watch', function() {
  gulp.watch(['src/*', 'src/**/*', 'site/theme/*'], ['css']);
});

// Dev
gulp.task('dev', ['css', 'webserver', 'watch']);

// Default
gulp.task('default', ['css', 'webserver']);
