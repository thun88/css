// -------------------------------------
//   Task: Publish Zip (file)
// -------------------------------------

module.exports = (gulp, paths) => {

  const
    fs          = require('fs'),
    formData    = require('form-data'),
    gutil       = require('gulp-util'),
    packageJson = require('../../package.json'),
    url = 'http://docs-site-staging.us-east-1.elasticbeanstalk.com/api/docs/';

  gulp.task('publish:zip', ['build:zip'], () => {

    let form = new formData();
    form.append('file', fs.createReadStream(`${paths.dest.dist}/${paths.dest.zipFile}`));
    form.append('root_path', packageJson.version);

    form.submit(url, (err, res) => {
      if (err) {
        gutil.log(err);
      } else {
        if (res.statusCode == 200) {
          gutil.log(`Status ${res.statusCode}: published to '${url}'`);
        } else {
          gutil.log(`Status ${res.statusCode}`);
        }
        res.resume();
      }
    });
  });
}
