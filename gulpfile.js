// Gulp Plugins
var gulp = require('gulp');
var concat = require('gulp-concat');
var server = require('gulp-server-livereload');
var postcss = require('gulp-postcss');


// PostCss Plugins
var atImport = require('postcss-import');
var autoprefixer = require('autoprefixer');
var cssnano = require('cssnano');
var customProperties = require('postcss-custom-properties');
var styleGuide = require('postcss-style-guide');

gulp.task('webserver', function() {
  gulp.src('www')
    .pipe(server({
      livereload: true,
      defaultFile: 'index.html',
      open: true,
      log: 'debug'
    }));
});

gulp.task('css', function () {
  var plugins = [
    atImport,
    customProperties({ preserve: true }),
    autoprefixer,
    styleGuide({
      project: 'Soho Foundation',
      dest: 'www/index.html'
    }),
    cssnano
  ];
  return gulp.src('src/app.css')
    .pipe(postcss(plugins))
    .pipe(concat('app.min.css'))
    .pipe(gulp.dest('dist/css'));
});

gulp.task('watch', function() {
  gulp.watch('src/*', ['css']);
});
