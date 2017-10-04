// -------------------------------------
//   Task: Build Packages JS
// -------------------------------------

module.exports = (gulp, paths) => {

  const rename = require('gulp-rename');

  // Task: Build Packages JS
  gulp.task('build:packages:js', () => {
    return gulp.src(`${paths.src.packages}/*/*.js`)
      .pipe(rename((path) => {
        path.dirname += '/dist';
        path.extname = '.min.js';
      }))
      .pipe(gulp.dest(paths.src.packages))
      .pipe(gulp.dest(paths.dest.demo));
  });
}
