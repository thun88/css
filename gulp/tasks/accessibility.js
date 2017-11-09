// --------------------------------------------------------------------------
//   Task: Test
//   Test accessibility level WCAG2A
// --------------------------------------------------------------------------

module.exports = (gulp, gconfig) => {

  const
    access  = require('gulp-accessibility'),
    del     = require('del'),
    rename  = require('gulp-rename');

  gulp.task('accessibility', ['src:compile', 'site:compile'], () => {

    del(['log/accessibility']);

    return gulp.src(`${gconfig.paths.site.www}/*.html`)
      .pipe(access({
        accessibilityLevel: 'WCAG2A',
        force: true,
        reportLevels: {
          notice: false,
          warning: false,
          error: true
        }
      }))
      .on('error', console.log)
      .pipe(access.report({ reportType: 'txt' }))
      .pipe(rename({
        extname: '.html'
      }))
      .pipe(gulp.dest('log/accessibility'));
  });
}
