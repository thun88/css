// -------------------------------------
//   Task: Build Site
//   Compile the website css
// -------------------------------------

module.exports = (gulp, paths, postCssPlugins) => {

  //   Task: Build Site Css
  gulp.task('build:site:css', () => {
    const
      pkgJson  = require('../../package.json'),
      flatten  = require('gulp-flatten'),
      postcss  = require('gulp-postcss'),
      hb       = require('gulp-hb'),
      rename   = require('gulp-rename');

    // Note: plugin order matters
    const plugins = [
      postCssPlugins.atImport,
      postCssPlugins.commas,
      postCssPlugins.atVariables,
      postCssPlugins.atFor,
      postCssPlugins.lost,
      postCssPlugins.cssnext,
      postCssPlugins.cssnano({ autoprefixer: false })
    ];

    return gulp.src(`${paths.src.site}/css/site.css`)
      .pipe(postcss(plugins, { map: true }))
      .pipe(rename({ extname: '.min.css' }))
      .pipe(gulp.dest(`${paths.dest.site}/dist`));
  });
}
