// -------------------------------------
//   Task: Build & zip publish files
// -------------------------------------

module.exports = (gulp, gconfig, publishDocObj) => {

  const fs = require('fs');
  const packageJson = require('../../package.json');
  const zip = require('gulp-zip');



  gulp.task('build', ['json:yaml:compile','json:md:compile','json:js:compile'], () => {
    // Create folder if needed
    if (!fs.existsSync(gconfig.paths.dist)){
      fs.mkdirSync(gconfig.paths.dist);
    }

    // Loop through each "file" property and create the json file
    for (let pkgName of Object.keys(publishDocObj)) {
      const thePath = `${gconfig.paths.dist}/${pkgName}.json`;
      fs.writeFileSync(thePath, JSON.stringify(publishDocObj[pkgName]));
    }

    // Zip the files
    return gulp.src(`${gconfig.paths.dist}/*`)
      .pipe(zip(`${packageJson.name}.zip`))
      .pipe(gulp.dest(gconfig.paths.dist))
  });
}
