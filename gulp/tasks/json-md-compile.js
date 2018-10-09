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
  const tap = require('gulp-tap');

  // Setup the renderer
  const highlightjs = require('highlight.js');
  const renderer = new markdown.marked.Renderer();
  markdown.marked.setOptions({
    gfm: true,
    renderer: gconfig.options.markdownRenderer(renderer, highlightjs),
  });

  gulp.task('json:md:compile', () => {
    // Create folders if needed
    if (!fs.existsSync(gconfig.paths.dist.root)) {
      fs.mkdirSync(gconfig.paths.dist.root);
    }

    if (!fs.existsSync(gconfig.paths.dist.docs)) {
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
      .pipe(markdown())

      // Build out the json
      .pipe(tap((file) => {
        let jsonObj = file.data.frontMatter;
        jsonObj.body = file.contents.toString();

        // Write the file
        const fileName = path.parse(file.path).name;
        fs.writeFileSync(`${gconfig.paths.dist.docs}/${fileName}.json`, JSON.stringify(jsonObj));
      }))
  });
}
