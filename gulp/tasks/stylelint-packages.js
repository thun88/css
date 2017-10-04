// -------------------------------------
//   Task: StyleLint Packages
//   Lint the package source css
// -------------------------------------

module.exports = (gulp, paths) => {

  const
    stylelint   = require('gulp-stylelint'),
    gitmodified = require('gulp-gitmodified');

  //   Lint the source css
  gulp.task('stylelint:packages', () => {
    return gulp.src(`${paths.src.packages}/*/*.css`)
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
