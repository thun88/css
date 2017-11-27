// -------------------------------------
//   Task: Publish Zip (file)
// -------------------------------------

module.exports = (gulp, gconfig) => {

  return gulp.task('deploy', () => {

    const fs = require('fs');
    const formData = require('form-data');
    const gutil = require('gulp-util');
    const packageJson = require('../../package.json');

    let form = new formData();
    form.append('file', fs.createReadStream(`${gconfig.paths.dist}/${packageJson.name}.zip`));
    form.append('root_path', `${packageJson.name}/${packageJson.version}`);

    form.submit(gconfig.urls.staging, (err, res) => {
      if (err) {
        gutil.log(err);
      } else {
        if (res.statusCode == 200) {
          gutil.log(`Status ${res.statusCode}: published to '${gconfig.urls.staging}'`);
        } else {
          gutil.log(`Status ${res.statusCode}`);
        }
        res.resume();
      }
    });
  });
}
