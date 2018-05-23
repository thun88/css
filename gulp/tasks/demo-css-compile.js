// -------------------------------------
//   Task: Build Site
//   Compile the website css
// -------------------------------------

module.exports = (gulp, gconfig) => {
  gulp.task('demo:css:compile', ['src:css:compile'], () => {
   return gulp.src(`${gconfig.paths.idsCssPackage}/dist/*.min.css*`)
    .pipe(gulp.dest(`${gconfig.paths.demo}/dist`));
  });
}
