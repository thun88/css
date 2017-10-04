// -------------------------------------
//   Task: Clean Site
//   Delete built site files
// -------------------------------------

module.exports = (gulp, paths) => {

  const del = require('del');

  gulp.task('clean:site', () => {
    return del([
      `${paths.dest.site}/**`,
      `!${paths.dest.site}`,
      `log`
    ]);
  });
}
