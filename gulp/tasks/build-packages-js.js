// -------------------------------------
//   Task: Build Packages JS
// -------------------------------------

module.exports = (gulp, paths) => {

  const rename = require('gulp-rename');

  // Task: Build Packages JS
  gulp.task('build:packages:js', () => {

    return gulp.src(`${paths.src.packages}/*/*.js`)

      // Rename filename of index to folder name
      .pipe(rename((path) => {
        path.basename = path.dirname.replace('iux-', '');
      }))

      // compile (fake)
      .pipe(rename((path) => {
        path.dirname += '/dist';
      }))
      .pipe(gulp.dest(paths.dest.demo))
      .pipe(gulp.dest(paths.src.packages))

      // minify (fake)
      .pipe(rename((path) => {
        path.extname = '.min.js';
      }))
      .pipe(gulp.dest(paths.src.packages));
  });
}
