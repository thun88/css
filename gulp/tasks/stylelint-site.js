// -------------------------------------
//   Task: Stylelint Site
//   Lint the site source css
// -------------------------------------

module.exports = (gulp, paths) => {

  const stylelint   = require('gulp-stylelint');

  //   Lint the website css
  gulp.task('stylelint:site', () => {
    return gulp.src(`${paths.src.site}/css/*/*.css`)
      .pipe(stylelint({
        failAfterError: true,
        reporters: [{
          formatter: 'verbose',
          console: true
        }]
      }))
  });
}
