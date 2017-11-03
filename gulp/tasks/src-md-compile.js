// -------------------------------------
//   Task: Build Site HTML
//   Build html files from markdown/hbs
// -------------------------------------

module.exports = (gulp, paths, postCssPlugins, arrIcons, svgHtml) => {

  // gulp.task('src:md:compile', () => {

  //   const helperFns = require('../functions.js');
  //   const pkgJson  = require('../../package.json');
  //   const flatten  = require('gulp-flatten');
  //   const hb       = require('gulp-hb');
  //   const rename   = require('gulp-rename');
  //   const highlightjs = require('highlight.js');
  //   var markdownIt = require('gulp-markdown-it');
  //   var frontMatter = require('gulp-front-matter');
  //   const tap = require('gulp-tap');

  //   var Handlebars = require('Handlebars');



  //   let templateData = helperFns.createCssAnnotations(paths.src.packages);
  //   if (arrIcons.length === 0) {
  //     arrIcons = helperFns.parseIcons(`${paths.src.icons}/svg/*.svg`);
  //   }
  //   templateData.svgIcons = arrIcons;
  //   templateData.version = pkgJson.version;


  //   let hbStream = hb()
  //     .partials(`${paths.site.templates}/partials/*.hbs`)
  //     .data(templateData);

  //   // Copy compiled styles into site/www/dist
  //   gulp.src(`${paths.src.packages}/iux-components-webapp/dist/*.min.css`)
  //     .pipe(gulp.dest(`${paths.site.www}/dist`));

  //   // Build the site html files
  //   return gulp.src(`${paths.src.packages}/*/README.md`)
  //     .pipe(frontMatter({
  //       property: 'data.frontMatter'
  //     }))

  //     .pipe(markdownIt())

  //     .pipe(tap((file) => {
  //       const contents = file.contents.toString();
  //     }));

  //     // Parse any handlebar templates in the markdown
  //     .pipe(hbStream)

  //     // Parse front matter from post file.


  //     // Rename filename of readme to folder name
  //     .pipe(rename((file) => {
  //       file.basename = file.dirname.replace(paths.project.prefix, '');
  //     }))
  //     .pipe(flatten())
  //     .pipe(gulp.dest(paths.site.www));
  // });


  gulp.task('src:md:compile', () => {

  const flatten = require('gulp-flatten');
  const frontMatter = require('gulp-front-matter');
  const handlebars = require('Handlebars');
  const markdown = require('gulp-markdown');
  const rename  = require('gulp-rename');
  const tap = require('gulp-tap');

  // Copy compiled styles into site/www/dist (async)
  gulp.src(`${paths.src.packages}/iux-components-webapp/dist/*.min.css`)
    .pipe(gulp.dest(`${paths.site.www}/dist`));


  // read the template from page.hbs
  return gulp.src(`${paths.site.templates}/layout.hbs`)
    .pipe(tap(function(file) {

      // file is page.hbs so generate template from file
      var template = handlebars.compile(file.contents.toString());

      // now read all the pages from the pages directory
      return gulp.src(`${paths.src.packages}/*/README.md`)

        // get meta data
        .pipe(frontMatter({
          property: 'data.frontMatter'
        }))

        // convert from markdown
        .pipe(markdown())

        .pipe(tap(function(file) {
          // file is the converted HTML from the markdown
          // set the contents to the contents property on data
          var data = {
            contents: file.contents.toString(),
            meta: file.data.frontMatter
          };

          // we will pass data to the Handlebars template to create the actual HTML to use
          var html = template(data);

          // replace the file contents with the new HTML created from the Handlebars template + data object that contains the HTML made from the markdown conversion
          file.contents = new Buffer(html, "utf-8");
        }))

        // Rename filename of readme to folder name
        .pipe(rename((file) => {
          file.basename = file.dirname.replace(paths.project.prefix, '');
        }))
        .pipe(flatten())
        .pipe(gulp.dest(paths.site.www));
      }));
    });
}
