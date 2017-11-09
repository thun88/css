// -------------------------------------
//   Copies src/*.yml files to pubish
// -------------------------------------

var yaml = require('gulp-yaml');

module.exports = (gulp, gconfig) => {
  gulp.task('json:yaml:compile', () => {
    return gulp.src(`${gconfig.paths.src.root}/*.yaml`)
      .pipe(yaml({ schema: 'DEFAULT_SAFE_SCHEMA' }))
      .pipe(gulp.dest(`${gconfig.paths.dist}`));
  });
}
