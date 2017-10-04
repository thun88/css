// -------------------------------------
//   Task: Build Packages DocumentationJS
// -------------------------------------

module.exports = (gulp, paths) => {

  const docjs = require('gulp-documentation');
  const pkgJson = require('../../package.json');

  gulp.task('build:packages:docjs', () => {
    return gulp.src(`${paths.src.packages}/**/*.js`)
      .pipe(docjs('md', {}, {
        version: pkgJson.version
      }))
      .pipe(gulp.dest(paths.dest.dist));
  });
}
