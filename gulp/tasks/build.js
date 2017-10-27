// -------------------------------------
//   Task: Build & zip publish files
// -------------------------------------

module.exports = (gulp, paths, publishDocObj) => {

  const fs = require('fs');
  const helperFns = require('../functions.js');
  const zip = require('gulp-zip');


  gulp.task('build', ['src:yaml:copy','json:md:compile','json:js:compile'], () => {
    // Create folder if needed
    if (!fs.existsSync(paths.dist)){
      fs.mkdirSync(paths.dist);
    }

    // Loop through each "file" property and create the json file
    for (let pkgName of Object.keys(publishDocObj)) {
      const thePath = `${paths.dist}/${pkgName}.json`;
      fs.writeFileSync(thePath, JSON.stringify(publishDocObj[pkgName]));
    }

    // Zip the files
    return gulp.src(`${paths.dist}/*`)
      .pipe(zip(`${paths.project.name}.zip`))
      .pipe(gulp.dest(paths.dist))
  });
}
