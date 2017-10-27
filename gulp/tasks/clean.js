// -------------------------------------
//   Task: Clean Dist
//   Delete any dist/ files
// -------------------------------------

module.exports = (gulp, paths) => {

  const del = require('del');

  gulp.task('clean', () => {

    return del([
      // distributed files
      paths.dist,

      // package files
      `${paths.src.packages}/*/dist/**`,
      `${paths.demo}/*/dist/**`,

      // site files
      `${paths.site.www}/**`,
      `!${paths.site.www}`,
      `log`
    ]);
  });
}
