// --------------------------------------------------------------------------
//   Task: SVG Store
//   Creates and builds the svg icons
// --------------------------------------------------------------------------

module.exports = (gulp, paths, arrOfIcons) => {

  const fns = require('../functions.js');
  const svgstore = require('gulp-svgstore');
  const rename = require('gulp-rename');

  //   Creates and builds the svg icons
  gulp.task('svg:store', () => {
    arrOfIcons = fns.parseIcons(`${paths.src.icons}/svg/*.svg`); // Refresh icons list

    return gulp.src(`${paths.src.icons}/svg/*.svg`)
      .pipe(svgstore({ inlineSvg: true }))
      .pipe(rename('icons.svg'))
      .pipe(gulp.dest(paths.src.icons))
      .pipe(gulp.dest(paths.site.www));
  });
}
