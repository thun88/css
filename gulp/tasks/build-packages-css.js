// -------------------------------------
//   Task: Build Packages CSS
// -------------------------------------

module.exports = (gulp, paths, postCssPlugins) => {

  const rename = require('gulp-rename');

  gulp.task('build:packages:css', () => {
    const postcss = require('gulp-postcss');

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

    const postcssOptions = {
      map: true
    };

    return gulp.src(`${paths.src.packages}/*/[^_]*.css`)
      .pipe(postcss(plugins, postcssOptions))
      .pipe(rename((path) => {
        path.dirname += '/dist';
        path.extname = '.min.css';
      }))
      .pipe(gulp.dest(paths.src.packages))
      .pipe(gulp.dest(paths.dest.demo));
  });
}
