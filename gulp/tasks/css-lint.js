// -------------------------------------
//   Task: StyleLint Packages
//   Lint the package source css
// -------------------------------------

module.exports = (gulp, gconfig) => {

  gulp.task('css:lint', () => {

    const stylelint = require('gulp-stylelint');

    return gulp.src([
      `${gconfig.paths.src.packages}/*/*.css`,
      `${gconfig.paths.site.css}/*/*.css`
      ])
      .pipe(stylelint({
        failAfterError: true,
        reporters: [{
          formatter: 'verbose',
          console: true
        }]
      }))
  });
}
