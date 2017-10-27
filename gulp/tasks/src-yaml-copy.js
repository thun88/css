// -------------------------------------
//   Copies src/*.yml files to pubish
// -------------------------------------

module.exports = (gulp, paths) => {
  gulp.task('src:yaml:copy', () => {
    return gulp.src(`${paths.src.root}/*.yml`)
      .pipe(gulp.dest(`${paths.dist}`));
  });
}
