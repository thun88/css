// -------------------------------------
//   Task: Build Site HTML
//   Build html files from markdown/hbs
// -------------------------------------

module.exports = (gulp, gconfig) => {

  gulp.task('src:md:compile', () => {

    const flatten = require('gulp-flatten');
    const frontMatter = require('gulp-front-matter');
    const fs = require('fs');
    const handlebars = require('handlebars');
    const helperFns = require('../functions.js');
    const idsWebPackageJson = require(`../../package.json`);
    const markdown = require('gulp-markdown'); // base engine is marked to match json-md-compile
    const registrar = require('handlebars-registrar');
    const rename  = require('gulp-rename');
    const tap = require('gulp-tap');
    const yaml = require('js-yaml');

    // Load sitemap for sidebar
    const sitemap = yaml.safeLoad(
      fs.readFileSync(`${gconfig.paths.src.root}/sitemap.yaml`, 'utf8')
    );

    const idsTokensByCategory = groupTokensByCategory(helperFns.getIdsTokensProperties());

    const inlineIcons = fs.readFileSync(`${gconfig.paths.idsCssPackage}/${gconfig.project.prefix}-icons.svg`, 'utf-8');
    registrar(handlebars, {
      bustCache: true,
      helpers: `${gconfig.paths.site.templates}/helpers/*.js`
    });

    // Copy compiled styles into site/www/dist (async)
    gulp.src([
      `${gconfig.paths.src.packages}/${gconfig.project.prefix}-css/dist/*.min.css`,
      `${gconfig.paths.src.packages}/${gconfig.project.prefix}-css/dist/*.min.css.map`
    ]).pipe(gulp.dest(`${gconfig.paths.site.www}/dist`));

    // read the template from page.hbs
    return gulp.src(`${gconfig.paths.site.templates}/layout.hbs`)
      .pipe(tap(file => {

        // file is page.hbs so generate template from file
        const template = handlebars.compile(file.contents.toString());

        // read all src markdown files
        return gulp.src(gconfig.paths.src.mdFiles)

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
              pkgJson: idsWebPackageJson,
              sitemap: sitemap,
              designTokens: idsTokensByCategory,
              inlineIcons: inlineIcons,
              currentTheme: gconfig.project.idsTokensThemeName
            };

            // we will pass data to the handlebars template to create the actual HTML to use
            const html = template(data);

            // replace the file contents with the new HTML created from the handlebars
            // template + data object that contains the HTML made from the markdown conversion
            file.contents = new Buffer.from(html, "utf-8");
          }))

          // Rename filename of package/*/readme.md files to folder name
          .pipe(rename(file => {
            if (file.basename.toLowerCase() === 'readme') {
              file.basename = file.dirname.replace(`${gconfig.project.prefix}-`, '');
            }
            file.extname = ".html";
          }))

          // Flatten the directory structure
          .pipe(flatten())
          .pipe(gulp.dest(gconfig.paths.site.www));
        }));
      }
    );

  function groupTokensByCategory(tokens) {
    let grouped = {};

    for (let key in tokens) {
      let category = tokens[key].category;
      tokens[key].description = toTitleCase(dashesToSpaces(tokens[key].name));

      if (!grouped.hasOwnProperty(category)) {
        grouped[category] = [];
      }
      grouped[category].push(tokens[key]);
    }
    return grouped;
  }

  function dashesToSpaces(str) {
    return str.replace(/-/g, ' ')
  }

  function toTitleCase(str) {
    return str.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
  }
}
