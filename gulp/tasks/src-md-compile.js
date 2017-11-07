// -------------------------------------
//   Task: Build Site HTML
//   Build html files from markdown/hbs
// -------------------------------------

module.exports = (gulp, paths, postCssPlugins, arrIcons, svgHtml) => {

  gulp.task('src:md:compile', () => {

  const helperFns = require('../functions.js');
  const flatten = require('gulp-flatten');
  const frontMatter = require('gulp-front-matter');
  const fs = require('fs');
  const handlebars = require('Handlebars');
  const registrar = require('handlebars-registrar');
  const markdown = require('gulp-markdown'); // base engine is marked to match json-md-compile
  const pkgJson  = require('../../package.json');
  const rename  = require('gulp-rename');
  const tap = require('gulp-tap');
  const yaml = require('js-yaml');

  // Load sitemap for sidebar
  const sitemap = yaml.safeLoad(
    fs.readFileSync(`${paths.src.root}/sitemap.yaml`, 'utf8')
  );

  const cssAnnotations = helperFns.createCssAnnotations(paths.src.packages);

  registrar(handlebars, {
    partials: [
      `${paths.site.templates}/partials/*.{hbs,js}`
    ]
  });

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

        // extract/remove yaml from MD
        .pipe(frontMatter({
          property: 'data.frontMatter'
        }))

        // convert from markdown and add syntax highlighting
        .pipe(markdown({
          gfm: true,
          highlight: function (code, lang, callback) {
            return require('pygmentize-bundled')({ lang: lang, format: 'html' }, code, function (err, result) {
              callback(err, result.toString());
            });
          }
        }))

        .pipe(tap(function(file) {
          // file is the converted HTML from the markdown
          // set the contents to the contents property on data
          var data = {
            contents: file.contents.toString(),
            meta: file.data.frontMatter,
            pkgJson: pkgJson,
            sitemap: sitemap,
            annotations: cssAnnotations
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
