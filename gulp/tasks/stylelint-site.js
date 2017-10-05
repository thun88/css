// -------------------------------------
//   Task: Stylelint Site
//   Lint the site source css
// -------------------------------------

module.exports = (gulp, paths) => {

  const
    stylelint   = require('gulp-stylelint'),
    gitmodified = require('gulp-gitmodified');

  //   Lint the website css
  gulp.task('stylelint:site', () => {
    return gulp.src(`${paths.src.site}/css/*/*.css`)
      .pipe(gitmodified(['modified']))
      .pipe(stylelint({
        failAfterError: true,
        reporters: [{
          formatter: 'verbose',
          console: true
        }]
      }))
  });
}
