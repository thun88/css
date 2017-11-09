// -------------------------------------
//   Task: Clean Dist
//   Delete any dist/ files
// -------------------------------------

module.exports = (gulp, gconfig) => {

  const del = require('del');

  gulp.task('clean', () => {

    return del([
      // distributed files
      gconfig.paths.dist,

      // package files
      `${gconfig.paths.src.packages}/*/dist/**`,
      `${gconfig.paths.demo}/*/dist/**`,

      // site files
      `${gconfig.paths.site.www}/**`,
      `!${gconfig.paths.site.www}`,
      `log`
    ]);
  });
}
