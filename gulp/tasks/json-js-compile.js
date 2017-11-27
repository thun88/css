// -------------------------------------
//   Document js packages into json
// -------------------------------------

module.exports = (gulp, gconfig, publishDocObj) => {

  const documentation = require('documentation');
  const helperFns = require('../functions.js');
  const path = require('path');
  const tap = require('gulp-tap');

  gulp.task('json:js:compile', () => {

    return gulp.src(`${gconfig.paths.src.packages}/*/*.js`)
      .pipe(tap((file, t) => {
        return documentation.build(file.path, {})
          .then(documentation.formats.json)
          .then(output => {
            // output is a string of JSON data

            // Merge data back to global object to add converted markdown content
            // Note: will be written to a file later in the flow
            const fileName = helperFns.createFileNameFromFolder(path.dirname(file.path));
            const tmpObj = { api: JSON.parse(output)}
            const mergedObj = { ...tmpObj, ...publishDocObj[fileName] };
            publishDocObj[fileName] = mergedObj;
          });
      }))
  });
}
