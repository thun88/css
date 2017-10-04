// -------------------------------------
//   Task: Clean Site Json
//   Delete json/ files
// -------------------------------------

module.exports = (gulp) => {

  const del = require('del');

  gulp.task('clean:zip', () => {
    return del(['./*.zip']);
  });
}
