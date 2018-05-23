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
      postCssPlugins.mixins,
      postCssPlugins.atVariables,
      postCssPlugins.atFor,
      postCssPlugins.cssnext({
        features: {
          customProperties: { preserve: "computed" } // preserve custom properties & var() usage in output
        }
      }),
      postCssPlugins.lost
    ];

    return gulp.src([
      `${gconfig.paths.src.root}/ids-reset.css`,
      `${gconfig.paths.src.root}/ids-css.css`
    ])
      // compile
      .pipe(sourcemaps.init())
        .pipe(postcss(plugins))
      .pipe(sourcemaps.write('.'))
      .pipe(gulp.dest(gconfig.paths.idsCssPackage))

      // minify css (only .css, not .maps)
      .pipe(filter('**/*.css'))
      .pipe(rename({ suffix: '.min' }))
      .pipe(sourcemaps.init())
        .pipe(postcss([postCssPlugins.cssnano({ autoprefixer: false })]))
      .pipe(sourcemaps.write('.'))
      .pipe(gulp.dest(gconfig.paths.idsCssPackage));
  });
}
