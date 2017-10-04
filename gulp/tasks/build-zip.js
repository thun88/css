// -------------------------------------
//   Task: Build JSON
//   Build json documentation files
// -------------------------------------

module.exports = (gulp, paths) => {

  const
    pkgJson  = require('../../package.json'),
    flatten  = require('gulp-flatten'),
    hb       = require('gulp-hb'),
    marked   = require('marked'),
    mdToJson = require('gulp-markdown-to-json')
    rename   = require('gulp-rename'),
    zip = require('gulp-zip');

  const helperFns = require('../functions.js');

  gulp.task('build:zip', () => {
    marked.setOptions({
      pedantic: true,
      smartypants: true
    });

    let templateData = helperFns.createCssAnnotations(paths.src.packages);
    templateData.pkgJson = pkgJson;

    let hbStream = hb()
      .partials(`${paths.src.templates}/partials/*.hbs`)
      .data(templateData);

    return gulp.src(`${paths.src.packages}/*/README.md`)
      .pipe(rename((file) => {
        // Rename filename of readme to folder name
        file.basename = file.dirname.replace('iux-', '');
      }))
      .pipe(hbStream)
      .pipe(mdToJson(marked))
      .pipe(flatten())
      .pipe(zip(paths.dest.zipFile))
      .pipe(gulp.dest(paths.dest.dist));
  });
}
