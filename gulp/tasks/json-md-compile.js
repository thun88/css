// -------------------------------------
//   Build MD files into json
// -------------------------------------

module.exports = (gulp, gconfig, publishDocObj) => {

  const helperFns = require('../functions.js');
  const markdown = require('gulp-markdown'); // base engine is marked to match json-md-compile
  const rename  = require('gulp-rename');
  const path = require('path');
  const pkgJson  = require('../../package.json');
  const tap = require('gulp-tap');
  const frontMatter = require('gulp-front-matter');

   // Use the same engine gulp-markdown uses in src:md:compile
   // to keep ouput the same
  const marked = require('marked');

  gulp.task('json:md:compile', () => {

    const designTokens = require(gconfig.paths.tokens.themeJson).props;

    marked.setOptions(gconfig.options.marked);

    return gulp.src(gconfig.paths.src.mdFiles)

      // Rename filename of package/*/readme.md files to folder name
      .pipe(rename(file => {
        if (file.basename.toLowerCase() === 'readme') {
          file.basename = helperFns.createFileNameFromFolder(file.dirname);
        }
      }))

      // Extract/remove yaml from markdown
      .pipe(frontMatter({
        property: 'data.frontMatter'
      }))

      // Parse and highlight
      .pipe(markdown(gconfig.options.marked))

      // Build out the json
      .pipe(tap((file) => {
        let jsonObj = file.data.frontMatter;
        jsonObj.body = file.contents.toString();

        // Get the css values for the specs listed in
        // the front-matter meta property
        if (jsonObj.specs) {
          jsonObj.specs.forEach(spec => {
            Object.assign(spec, designTokens[spec.spec.toUpperCase()].value);
          });
        }

        // Merge converted markdown content data back to global object.
        // Note: will be written to a file later in the flow
        const fileName = path.parse(file.path).name;
        const mergedObj = { ...jsonObj, ...publishDocObj[fileName] };
        publishDocObj[fileName] = mergedObj;
      }))
  });
}
