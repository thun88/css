// -------------------------------------
//   Task: Clean Dist
//   Delete any dist/ files
// -------------------------------------

module.exports = (gulp, paths) => {

  const del = require('del');

  gulp.task('clean', () => {

    return del([
      // distributed files
      paths.dest.dist,

      // package files
      `${paths.src.packages}/*/dist/**`,
      `${paths.dest.demo}/*/dist/**`,

      // site files
      `${paths.dest.site}/**`,
      `!${paths.dest.site}`,
      `log`
    ]);
  });
}
