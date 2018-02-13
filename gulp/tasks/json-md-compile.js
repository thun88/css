// -------------------------------------
//   Build MD files into json
// -------------------------------------

module.exports = (gulp, gconfig, publishDocObj) => {

  const frontMatter = require('gulp-front-matter');
  const fs = require('fs');
  const helperFns = require('../functions.js');
  const markdown = require('gulp-markdown'); // base engine is marked to match json-md-compile
  const rename  = require('gulp-rename');
  const path = require('path');
  const pkgJson  = require('../../package.json');
  const tap = require('gulp-tap');

   // Use the same engine gulp-markdown uses in src:md:compile
   // to keep ouput the same
  const marked = require('marked');

  gulp.task('json:md:compile', () => {

    const designTokens = require(gconfig.paths.tokens.themeJson).props;

    marked.setOptions(gconfig.options.marked);

        // Create folders if needed
    if (!fs.existsSync(gconfig.paths.dist.root)){
      fs.mkdirSync(gconfig.paths.dist.root);
    }

    if (!fs.existsSync(gconfig.paths.dist.docs)){
      fs.mkdirSync(gconfig.paths.dist.docs);
    }

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

      // Parse and highlight code snippets
      .pipe(markdown(gconfig.options.marked))

      // Build out the json
      .pipe(tap((file) => {
        let jsonObj = file.data.frontMatter;
        jsonObj.body = file.contents.toString();

        // Look up token values for css specs in
        // the front-matter "meta" property
        if (jsonObj.specs) {
          jsonObj.specs.forEach(spec => {
            if (designTokens[spec.spec.toUpperCase()]) {
              Object.assign(spec, designTokens[spec.spec.toUpperCase()].value);
            } else {
              console.log(`Cannot find token: "${spec.spec.toUpperCase()}", skipping...`);
            }
          });
        }

        // Write the file
        const fileName = path.parse(file.path).name;
        fs.writeFileSync(`${gconfig.paths.dist.docs}/${fileName}.json`, JSON.stringify(jsonObj));
      }))
  });
}
