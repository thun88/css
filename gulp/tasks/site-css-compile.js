// -------------------------------------
//   Task: Build Site
//   Compile the website css
// -------------------------------------

module.exports = (gulp, gconfig) => {

  gulp.task('site:css:compile', () => {
   return gulp.src(`${gconfig.paths.src.packages}/ids-css/dist/*.min.css*`)
    .pipe(gulp.dest(`${gconfig.paths.site.www}/dist`));
  });
}
