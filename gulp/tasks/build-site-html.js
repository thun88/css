// -------------------------------------
//   Task: Build Site HTML
//   Build html files from markdown/hbs
// -------------------------------------

module.exports = (gulp, paths, postCssPlugins, arrIcons, svgHtml) => {

  gulp.task('build:site:html', () => {

    const helperFns = require('../functions.js');
    const pkgJson  = require('../../package.json');

    const
      flatten  = require('gulp-flatten'),
      hb       = require('gulp-hb'),
      pandoc   = require('gulp-pandoc'),
      rename   = require('gulp-rename');


    let templateData = helperFns.createCssAnnotations(paths.src.packages);

    if (arrIcons.length === 0) {
      arrIcons = helperFns.parseIcons(`${paths.src.icons}/svg/*.svg`);
    }
    templateData.svgIcons = arrIcons;
    templateData.pkgJson = pkgJson;


    let hbStream = hb()
      .partials(`${paths.src.templates}/partials/*.hbs`)
      .data(templateData);

    // Copy compiled styles into site/www/dist
    gulp.src(`${paths.src.packages}/iux-components-webapp/dist/*.css`)
      .pipe(gulp.dest(`${paths.dest.site}/dist`));

    // Build the site html files
    return gulp.src(`${paths.src.packages}/*/README.md`)
      // Parse any handlebar templates in the markdown
      .pipe(hbStream)

      // Convert markdown to html and insert into layout template
      .pipe(pandoc({
        from: 'markdown-markdown_in_html_blocks', // http://pandoc.org/MANUAL.html#raw-html
        to: 'html5+yaml_metadata_block',
        ext: '.html',
        args: [
          `--data-dir=${paths.src.site}`, // looks for template dir inside data-dir
          '--template=layout.html',
          '--table-of-contents',
          `--variable=icons:${svgHtml}`,
          `--variable=releaseversion:${pkgJson.version}`,
          '--variable=lang:en'
        ]
      }))
      .pipe(rename((file) => {
        // Rename filename of readme to folder name
        file.basename = file.dirname.replace('iux-', '');
      }))
      .pipe(flatten())
      .pipe(gulp.dest(paths.dest.site));
  });
}
