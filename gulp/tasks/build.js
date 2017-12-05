// -------------------------------------
//   Task: Build & zip files for
//   publishing
// -------------------------------------

module.exports = (gulp, gconfig, publishDocObj) => {

  const fs = require('fs');
  const packageJson = require('../../package.json');
  const zip = require('gulp-zip');
  const runSequence = require('run-sequence');

  gulp.task('build', ['json:yaml:compile','json:md:compile','json:js:compile'], () => {

    // Create folders if needed
    if (!fs.existsSync(gconfig.paths.dist.root)){
      fs.mkdirSync(gconfig.paths.dist.root);
    }

    if (!fs.existsSync(gconfig.paths.dist.docs)){
      fs.mkdirSync(gconfig.paths.dist.docs);
    }

    // Loop through each "file" property and create the json file
    for (let pkgName of Object.keys(publishDocObj)) {
      const thePath = `${gconfig.paths.dist.docs}/${pkgName}.json`;
      fs.writeFileSync(thePath, JSON.stringify(publishDocObj[pkgName]));
    }

    runSequence('copy:demo', 'zip');
  });

  // -------------------------------------
  //   Local task:
  //   - Copy "./demo"" to dist folder to be zipped
  // -------------------------------------
  gulp.task('copy:demo', ['src:compile'], () => {
    return gulp.src(`${gconfig.paths.demo}/**/*`, {
      base: gconfig.paths.root
    })
    .pipe(gulp.dest(gconfig.paths.dist.root))
  });

  // -------------------------------------
  //   Local task:
  //   - Zip the built files
  // -------------------------------------
  gulp.task('zip', () => {
    return gulp.src(`${gconfig.paths.dist.root}/**/*`)
      .pipe(zip(`${gconfig.paths.dist.root}.zip`))
      .pipe(gulp.dest(gconfig.paths.root));
  })
}
