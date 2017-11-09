// -------------------------------------
//   Build MD files into json
// -------------------------------------

module.exports = (gulp, gconfig, publishDocObj) => {

  const helperFns = require('../functions.js');
  const markdown = require('gulp-markdown'); // base engine is marked to match json-md-compile
  const mdToJson = require('gulp-markdown-to-json');
  const rename  = require('gulp-rename');
  const path = require('path');
  const pkgJson  = require('../../package.json');
  const tap = require('gulp-tap');
  const frontMatter = require('gulp-front-matter');

   // Use the same engine gulp-markdown uses in src:md:compile
   // to keep ouput the same
  const marked = require('marked');

  gulp.task('json:md:compile', () => {

    marked.setOptions(gconfig.options.marked);

    return gulp.src(`${gconfig.paths.src.root}/**/*.md`)

      // Extract/remove yaml from markdown
      .pipe(frontMatter({
        property: 'data.frontMatter'
      }))

      // Parse and highlight
      .pipe(markdown(gconfig.options.marked))

      // Convert to JSON
      .pipe(mdToJson(marked))

      // Rename filename of package/*/readme.md files to folder name
      .pipe(rename(file => {
        if (file.basename.toLowerCase() === 'readme') {
          file.basename = helperFns.createFileNameFromFolder(file.dirname);
        }
      }))

      // Merge data back to global object to add converted markdown content
      // Note: will be written to a file later in the flow
      .pipe(tap((file) => {
        const fileName = path.parse(file.path).name;
        const tmpObj = JSON.parse(file.contents.toString());
        const mergedObj = { ...file.data.frontMatter, ...tmpObj, ...publishDocObj[fileName] };
        publishDocObj[fileName] = mergedObj;
      }));
  });

}
