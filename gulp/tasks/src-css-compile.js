// -------------------------------------
//   Task: Build Packages CSS
// -------------------------------------

module.exports = (gulp, gconfig, postCssPlugins) => {

  const rename = require('gulp-rename');

  gulp.task('src:css:compile', () => {
    const postcss = require('gulp-postcss');

    // Note: plugin order matters
    const plugins = [
      postCssPlugins.atImport,
      postCssPlugins.commas,
      postCssPlugins.atVariables,
      postCssPlugins.atFor,
      postCssPlugins.lost,
      postCssPlugins.cssnext
    ];

    const postcssOptions = {
      map: true
    };

    return gulp.src(`${gconfig.paths.src.packages}/*/[^_]*.css`)

      // compile
      .pipe(postcss(plugins, postcssOptions))
      .pipe(rename((path) => {
        path.dirname += '/dist';
      }))
      .pipe(gulp.dest(gconfig.paths.demo))
      .pipe(gulp.dest(gconfig.paths.src.packages))

      // minify
      .pipe(postcss([postCssPlugins.cssnano({
        autoprefixer: false
      })], postcssOptions))
      .pipe(rename({ suffix: '.min' }))
      .pipe(gulp.dest(gconfig.paths.src.packages));
  });
}
