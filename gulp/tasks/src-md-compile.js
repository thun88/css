// -------------------------------------
//   Task: Build Site HTML
//   Build html files from markdown/hbs
// -------------------------------------

module.exports = (gulp, gconfig, postCssPlugins, svgHtml) => {

  gulp.task('src:md:compile', ['svg:store'], () => {

    const flatten = require('gulp-flatten');
    const frontMatter = require('gulp-front-matter');
    const fs = require('fs');
    const handlebars = require('Handlebars');
    const helperFns = require('../functions.js');
    const markdown = require('gulp-markdown'); // base engine is marked to match json-md-compile
    const pkgJson  = require('../../package.json');
    const registrar = require('handlebars-registrar');
    const rename  = require('gulp-rename');
    const tap = require('gulp-tap');
    const yaml = require('js-yaml');

    // Load sitemap for sidebar
    const sitemap = yaml.safeLoad(
      fs.readFileSync(`${gconfig.paths.src.root}/sitemap.yaml`, 'utf8')
    );

    const cssAnnotations = helperFns.createCssAnnotations(gconfig.paths.src.packages);
    const inlineIcons = fs.readFileSync(`${gconfig.paths.src.icons}/dist/inline-icons.svg`, 'utf-8');

    registrar(handlebars, {
      partials: [
        `${gconfig.paths.site.templates}/partials/*.{hbs,js}`
      ]
    });

    // Copy compiled styles into site/www/dist (async)
    gulp.src([
      `${gconfig.paths.src.packages}/iux-components/dist/*.min.css`,
      `${gconfig.paths.src.packages}/iux-components/dist/*.min.css.map`
    ]).pipe(gulp.dest(`${gconfig.paths.site.www}/dist`));

    // read the template from page.hbs
    return gulp.src(`${gconfig.paths.site.templates}/layout.hbs`)
      .pipe(tap(file => {

        // file is page.hbs so generate template from file
        const template = handlebars.compile(file.contents.toString());

        // read all src markdown files
        return gulp.src(`${gconfig.paths.src.root}/**/*.md`)

          // extract/remove yaml from MD
          .pipe(frontMatter({
            property: 'data.frontMatter'
          }))

          // convert from markdown and add syntax highlighting
          .pipe(markdown(gconfig.options.marked))

          .pipe(tap(file => {
            // file is the converted HTML from the markdown
            // set the contents to the contents property on data
            const data = {
              contents: file.contents.toString(),
              meta: file.data.frontMatter,
              pkgJson: pkgJson,
              sitemap: sitemap,
              annotations: cssAnnotations,
              inlineIcons: inlineIcons
            };

            // we will pass data to the Handlebars template to create the actual HTML to use
            const html = template(data);

            // replace the file contents with the new HTML created from the Handlebars template + data object that contains the HTML made from the markdown conversion
            file.contents = new Buffer(html, "utf-8");
          }))

          // Rename filename of package/*/readme.md files to folder name
          .pipe(rename(file => {
            if (file.basename.toLowerCase() === 'readme') {
              file.basename = file.dirname.replace(`${gconfig.project.prefix}-`, '');
            }
          }))

          // Flatten the directory structure
          .pipe(flatten())
          .pipe(gulp.dest(gconfig.paths.site.www));
        }));
      });
}
