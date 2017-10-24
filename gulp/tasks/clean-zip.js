// -------------------------------------
//   Task: Clean Site Json
//   Delete json/ files
// -------------------------------------

module.exports = (gulp) => {

  const del = require('del');

  return gulp.task('clean:zip', () => {
    return del(['./*.zip']);
  });
}
