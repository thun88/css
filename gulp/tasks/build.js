// -------------------------------------
//   Task: Build & zip JSON files
//   Build json documentation files
// -------------------------------------

module.exports = (gulp, paths, publishDocObj) => {

  const fs = require('fs');
  const helperFns = require('../functions.js');
  const zip = require('gulp-zip');


  gulp.task('build', ['json:md:compile','json:js:compile'], () => {
    // Create folder if needed
    if (!fs.existsSync(paths.dest.dist)){
      fs.mkdirSync(paths.dest.dist);
    }

    // Loop through each "file" property and create the json file
    for (let pkgName of Object.keys(publishDocObj)) {
      const thePath = `${paths.dest.dist}/${pkgName}.json`;
      fs.writeFileSync(thePath, JSON.stringify(publishDocObj[pkgName]));
    }

    // Zip the files
    return gulp.src(`${paths.dest.dist}/*.json`)
      .pipe(zip(`${paths.project}.zip`))
      .pipe(gulp.dest(paths.dest.dist))
  });
}
