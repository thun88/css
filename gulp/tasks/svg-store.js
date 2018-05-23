// --------------------------------------------------------------------------
//   Task: SVG Store
//   Bundles the svgs into 1 file
// --------------------------------------------------------------------------

module.exports = (gulp, gconfig) => {

  const svgstore = require('gulp-svgstore');
  const rename = require('gulp-rename');
  const tap = require('gulp-tap');
  const path = require('path');
  const fs = require('fs');
  const handlebars = require('handlebars');

  gulp.task('svg:store', () => {
    // Get the icons from identity in node_modules
    const svgIcons = gconfig.paths.idsIdentity.icons;

    const template = handlebars.compile('');
    let iconsNameArr = [];

    // Stream the icons readme.hbs template
    gulp.src(`${gconfig.paths.src.packages}/ids-icon/readme.hbs`)

      // Loop through icons to "store" the icons as an svg for html use
      // and create an array of their names
      .pipe(tap(file => {
        return gulp.src(`${svgIcons}/*.svg`)
          .pipe(tap(file => {
            iconsNameArr.push(path.parse(file.path).name);
          }))
          .pipe(svgstore({ inlineSvg: true }))
          .pipe(rename(`${gconfig.project.prefix}-icons.svg`))
          .pipe(gulp.dest(`${gconfig.paths.idsCssPackage}`));
        }))

      // Run the array of icon names though the template
      .pipe(tap(file => {
        const template = handlebars.compile(file.contents.toString());
        const html = template({ icons: iconsNameArr });
        file.contents = new Buffer(html, 'utf-8');
      }))
      // Rename it as the README.md file
      .pipe(rename(file => {
        file.basename = file.basename.toUpperCase();
        file.extname = '.md';
      }))
      // Save the file in the icons package folder
      .pipe(gulp.dest(`${gconfig.paths.src.packages}/${gconfig.project.prefix}-icon`));
  });
}
