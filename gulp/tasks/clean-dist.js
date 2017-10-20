// -------------------------------------
//   Task: Clean Dist
//   Delete any dist/ files
// -------------------------------------

module.exports = (gulp, paths) => {

  const del = require('del');

  gulp.task('clean:dist', () => {
    return del([
      paths.dest.dist,
      `${paths.src.packages}/*/dist/**`,
      `${paths.dest.demo}/*/dist/**`
    ]);
  });
}
