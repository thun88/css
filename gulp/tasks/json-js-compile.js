// -------------------------------------
//   Promise for documenting the package js files
//   @return {Promise}
// -------------------------------------

module.exports = (gulp, paths, publishDocObj) => {

  const documentation = require('documentation');
  const helperFns = require('../functions.js');
  const path = require('path');
  const tap = require('gulp-tap');

  gulp.task('json:js:compile', () => {

    return gulp.src(`${paths.src.packages}/*/*.js`)
      .pipe(tap((file, t) => {
        documentation.build(file.path, {})
          .then(documentation.formats.json)
          .then(output => {
            // output is a string of JSON data
            const propName = helperFns.getFolderName(path.dirname(file.path));
            const tmpObj = { api: JSON.parse(output)}
            const mergedObj = { ...tmpObj, ...publishDocObj[propName] };
            publishDocObj[propName] = mergedObj;
          });
      }))
  });

}
