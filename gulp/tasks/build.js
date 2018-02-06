// -------------------------------------
//   Task: Build & zip files for
//   publishing
// -------------------------------------

module.exports = (gulp, gconfig, publishDocObj) => {

  gulp.task('build', ['json:yaml:compile','json:md:compile', 'copy:demo'], (done) => {
    const zip = require('gulp-zip');
    return gulp.src(`${gconfig.paths.dist.root}/**/*`)
      .pipe(zip(`${gconfig.paths.dist.root}.zip`))
      .pipe(gulp.dest(gconfig.paths.root));
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
}
