// -------------------------------------
//   Task: Publish Zip (file)
// -------------------------------------

module.exports = (gulp, paths) => {

  const
    fs          = require('fs'),
    formData    = require('form-data'),
    gutil       = require('gulp-util'),
    packageJson = require('../../package.json');

  return gulp.task('deploy', () => {

    let form = new formData();
    form.append('file', fs.createReadStream(`${paths.dest.dist}/${paths.project}.zip`));
    form.append('root_path', packageJson.version);

    form.submit(paths.urls.staging, (err, res) => {
      if (err) {
        gutil.log(err);
      } else {
        if (res.statusCode == 200) {
          gutil.log(`Status ${res.statusCode}: published to '${paths.urls.staging}'`);
        } else {
          gutil.log(`Status ${res.statusCode}`);
        }
        res.resume();
      }
    });
  });
}
