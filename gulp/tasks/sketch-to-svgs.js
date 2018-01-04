// -------------------------------------
//   Task: Clean Dist
//   Delete any dist/ files
// -------------------------------------

module.exports = (gulp, gconfig) => {

  const sketch = require('gulp-sketch');
  const svgmin = require('gulp-svgmin');
  const tap = require('gulp-tap');
  const helperFns = require('../functions.js');

  gulp.task('sketch:to:svgs', () => {
    return gulp.src(`${gconfig.paths.packages}/${gconfig.project.prefix}-icon/sketch/*.sketch`)
      .pipe(sketch({
        export: 'artboards',
        formats: 'svg',
        clean: 'yes'
      }))
      .pipe(svgmin())
      .pipe(gulp.dest(`${gconfig.paths.packages}/${gconfig.project.prefix}-icon/dist/svgs`));
  });
}

