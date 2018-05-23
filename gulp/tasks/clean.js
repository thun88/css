// -------------------------------------
//   Task: Clean Dist
//   Delete any dist/ files
// -------------------------------------

module.exports = (gulp, gconfig) => {

  const del = require('del');

  gulp.task('clean:publish', () => {
    // documetation/design.infor.com files
    return del([
      gconfig.paths.dist.root,
      `${gconfig.project.zipName}.zip`
    ]);
  });

  gulp.task('clean:src', () => {
    return del([
      // package dist files
      `${gconfig.paths.idsCssPackage}`,
      `${gconfig.paths.src.packages}/*/dist/**`,
      `${gconfig.paths.demo}/*/dist/**`,
    ]);
  });

  gulp.task('clean:site', () => {
    return del([
      // site dist files
      `${gconfig.paths.site.www}/*.html`,
      `${gconfig.paths.site.www}/dist`,
      `log`
    ]);
  });
}
