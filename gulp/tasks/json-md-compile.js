// -------------------------------------
//   Build MD files into json
// -------------------------------------

module.exports = (gulp, paths, publishDocObj) => {

  const helperFns = require('../functions.js');
  const markdown = require('gulp-markdown'); // base engine is marked to match json-md-compile
  const mdToJson = require('gulp-markdown-to-json');
  const path = require('path');
  const pkgJson  = require('../../package.json');
  const tap = require('gulp-tap');
  const frontMatter = require('gulp-front-matter');


   // Use the same engine gulp-markdown uses in src:md:compile
   // to keep ouput the same
  const marked = require('marked');

  gulp.task('json:md:compile', () => {

    marked.setOptions({
      gfm: true,
      highlight: function (code, lang, callback) {
        require('pygmentize-bundled')({ lang: lang, format: 'html' }, code, (err, result) => {
          // callback(err, result.toString());
        });
      }
    });

    return gulp.src(`${paths.src.packages}/*/README.md`)
    // Extract/remove yaml from markdown
    .pipe(frontMatter({
      property: 'data.frontMatter'
    }))

    // Parse and highlight
    .pipe(markdown({
        gfm: true,
        highlight: function (code, lang, callback) {
          return require('pygmentize-bundled')({ lang: lang, format: 'html' }, code, function (err, result) {
            callback(err, result.toString());
          });
        }
      }))
      // Convert to JSON
      .pipe(mdToJson(marked))
      // Rename file
      .pipe(tap((file) => {
        const propName = helperFns.getFolderName(path.dirname(file.path));
        const tmpObj = JSON.parse(file.contents.toString());
        const mergedObj = { ...tmpObj, ...publishDocObj[propName] };
        publishDocObj[propName] = mergedObj;
      }));
  });

}
