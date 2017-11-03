// -------------------------------------
//   Build MD files into json
// -------------------------------------

module.exports = (gulp, paths, publishDocObj) => {

  const hb = require('gulp-hb');
  const helperFns = require('../functions.js');
  const highlightjs = require('highlight.js');
  const path = require('path');
  const pkgJson  = require('../../package.json');
  const tap = require('gulp-tap');

   // Use the same engine gulp-markdown uses in src:md:compile
   // to keep results the same
  const marked = require('marked');
  const mdToJson = require('gulp-markdown-to-json');
  // -------------------------------------
  //   Promise for converting package README.md files to json
  //   @return {Promise}
  // -------------------------------------
  gulp.task('json:md:compile', () => {

    marked.setOptions({
      pedantic: true,
      smartypants: true,
      // Synchronous highlighting with highlight.js
      highlight: function (code) {
        return highlightjs.highlightAuto(code).value;
      }
    });

    let templateData = helperFns.createCssAnnotations(paths.src.packages);
    templateData.pkgJson = pkgJson;

    let hbStream = hb()
      .partials(`${paths.site.templates}/partials/*.hbs`)
      .data(templateData);

    return gulp.src(`${paths.src.packages}/*/README.md`)
      .pipe(hbStream)
      .pipe(mdToJson(marked))
      .pipe(tap((file) => {
        const propName = helperFns.getFolderName(path.dirname(file.path));
        const tmpObj = JSON.parse(file.contents.toString());
        const mergedObj = { ...tmpObj, ...publishDocObj[propName] };
        publishDocObj[propName] = mergedObj;
      }));
  });

}
