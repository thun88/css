// -------------------------------------
//   Task: Build Packages CSS
// -------------------------------------

module.exports = (gulp, gconfig, postCssPlugins) => {

  const filter = require('gulp-filter');
  const rename = require('gulp-rename');
  const sourcemaps = require('gulp-sourcemaps');

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

    return gulp.src(`${gconfig.paths.src.packages}/*/[^_]*.css`)

      // compile
      .pipe(sourcemaps.init())
        .pipe(postcss(plugins))
      .pipe(sourcemaps.write('.'))
      .pipe(rename((path) => {
        path.dirname += '/dist';
      }))
      .pipe(gulp.dest(gconfig.paths.demo))
      .pipe(gulp.dest(gconfig.paths.src.packages))

      // minify css (only .css, not .maps)
      .pipe(filter('**/*.css'))
      .pipe(rename({ suffix: '.min' }))
      .pipe(sourcemaps.init())
        .pipe(postcss([postCssPlugins.cssnano({ autoprefixer: false })]))
      .pipe(sourcemaps.write('.'))
      .pipe(gulp.dest(gconfig.paths.src.packages));
  });
}
