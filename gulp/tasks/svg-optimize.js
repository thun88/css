// --------------------------------------------------------------------------
//   Task: SVG Optimization
//   Optimizes the svg icon markup
// --------------------------------------------------------------------------

module.exports = (gulp, paths, arrOfIcons) => {

  const svgmin   = require('gulp-svgmin');

  gulp.task('svg:optimize', () => {
    return gulp.src(`${paths.src.icons}/svg/*.svg`)
      .pipe(svgmin())
      .pipe(gulp.dest(`${paths.src.icons}/svg`));
  });
}
