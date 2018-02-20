// -------------------------------------
//   Task: StyleLint Packages
//   Lint the package source css
// -------------------------------------

module.exports = (gulp, gconfig) => {

  gulp.task('site:css:lint', () => {

    const stylelint = require('gulp-stylelint');

    return gulp.src([
        `${gconfig.paths.site.www}/assets/*.css`
      ])
      .pipe(stylelint(gconfig.options.stylelint));
  });
}
