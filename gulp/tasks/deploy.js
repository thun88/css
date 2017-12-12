// -------------------------------------
//   Task: Publish Zip (file)
// -------------------------------------

module.exports = (gulp, gconfig) => {

  return gulp.task('deploy', () => {

    const fs = require('fs');
    const formData = require('form-data');
    const gutil = require('gulp-util');
    const packageJson = require('../../package.json');
    const argv = require('yargs').argv

    let url = gconfig.urls.local;
    if (argv.site) {
      url = gconfig.urls[argv.site];
    }

    let form = new formData();
    form.append('file', fs.createReadStream(`${gconfig.paths.dist.root}.zip`));
    form.append('root_path', `${packageJson.name}/${packageJson.version}`);

    gutil.log(`Attempting to publish to '${url}'`);

    form.submit(url, (err, res) => {
      if (err) {
        gutil.log(err);
      } else {
        if (res.statusCode == 200) {
          gutil.log(`Success! Status ${res.statusCode}: published to '${url}'`);
        } else {
          gutil.log(`Failed! Status ${res.statusCode}`);
        }
        res.resume();
      }
    });
  });
}
