// -------------------------------------
//   Task: Build Site
//   Compile the website css
// -------------------------------------

module.exports = (gulp, gconfig) => {

  gulp.task('demo:css:compile', () => {
   return gulp.src(`${gconfig.paths.src.idsWeb}/dist/*.min.css*`)
    .pipe(gulp.dest(`${gconfig.paths.demo}/dist`));
  });
}
