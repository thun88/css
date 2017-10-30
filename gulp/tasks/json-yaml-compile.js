// -------------------------------------
//   Copies src/*.yml files to pubish
// -------------------------------------

var yaml = require('gulp-yaml');

module.exports = (gulp, paths) => {
  gulp.task('json:yaml:compile', () => {
    return gulp.src(`${paths.src.root}/*.yaml`)
      .pipe(yaml({ schema: 'DEFAULT_SAFE_SCHEMA' }))
      .pipe(gulp.dest(`${paths.dist}`));
  });
}
