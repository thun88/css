// --------------------------------------------------------------------------
//   Task: SVG Store
//   Bundles the svgs into 1 file
// --------------------------------------------------------------------------

module.exports = (gulp, gconfig) => {

  const svgstore = require('gulp-svgstore');
  const rename = require('gulp-rename');

  gulp.task('svg:store', () => {

    const iconPkg = `${gconfig.paths.src.packages}/${gconfig.project.prefix}-icon`;
    const webPkg = `${gconfig.paths.src.packages}/${gconfig.project.prefix}-web`;

    return gulp.src(`${iconPkg}/svgs/*.svg`)
      .pipe(svgstore({ inlineSvg: true }))
      .pipe(rename(`${gconfig.project.prefix}-icons.svg`))
      .pipe(gulp.dest(`${iconPkg}/dist`))
      .pipe(gulp.dest(`${webPkg}/dist`));
  });
}
