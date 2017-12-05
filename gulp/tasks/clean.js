// -------------------------------------
//   Task: Clean Dist
//   Delete any dist/ files
// -------------------------------------

module.exports = (gulp, gconfig) => {

  const del = require('del');

  gulp.task('clean', () => {

    return del([
      // distributed files
      gconfig.paths.dist.root,

      // package files
      `${gconfig.paths.src.packages}/*/dist/**`,
      `${gconfig.paths.demo}/*/dist/**`,

      // site files
      `${gconfig.paths.site.www}/*.html`,
      `${gconfig.paths.site.www}/dist`,
      `log`
    ]);
  });
}
