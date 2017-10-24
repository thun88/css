// -------------------------------------
//   Task: Build Packages DocumentationJS
// -------------------------------------

module.exports = (gulp, paths) => {

  const docjs = require('documentation');
  const fs = require('fs');
  const path = require('path');
  const pkgJson = require('../../package.json');
  const tap = require('gulp-tap');

  gulp.task('build:packages:docjs', () => {
    return gulp.src(`${paths.src.packages}/*/*.js`)
      .pipe(tap((file, t) => {
        return docjs.build(file.path, {})
          .then(docjs.formats.json)
          .then(output => {
            // output is a string of JSON data

            var dir = './dist';
            if (!fs.existsSync(dir)){
              fs.mkdirSync(dir);
            }

            const thePath = `${dir}/${path.parse(file.path).base}-js.json`;
            fs.writeFileSync(thePath, output);
          });
      }));
  });
}
