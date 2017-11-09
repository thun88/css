// --------------------------------------------------------------------------
//   Task: SVG Optimization
//   Optimizes the svg icon markup
// --------------------------------------------------------------------------

module.exports = (gulp, gconfig, arrOfIcons) => {

  const svgmin   = require('gulp-svgmin');

  gulp.task('svg:optimize', () => {
    return gulp.src(`${gconfig.paths.src.icons}/svg/*.svg`)
      .pipe(svgmin())
      .pipe(gulp.dest(`${gconfig.paths.src.icons}/svg`));
  });
}
