// -------------------------------------
//   Task: Build Packages JS
// -------------------------------------

module.exports = (gulp, gconfig) => {

  const rename = require('gulp-rename');
  const path = require('path');
  const webpack = require('webpack');
  const named = require('vinyl-named'); // Use to keep individual files instead one bundle
  const webpackStream = require('webpack-stream');

  gulp.task('src:js:compile', () => {
    const devConfig = require(path.resolve(`${gconfig.paths.root}/webpack.dev.js`));

    return gulp.src([`${gconfig.paths.src.packages}/*/*.js`])
      .pipe(named())
      .pipe(webpackStream(devConfig), webpack)
      .pipe(rename((path) => {
        path.dirname += `/${gconfig.project.prefix}-${path.basename}/dist`;
      }))
      .pipe(gulp.dest(gconfig.paths.demo))
      .pipe(gulp.dest(gconfig.paths.src.packages));
  });

  // gulp.task('src-jsprod', () => {
  //   const prodConfig = require(path.resolve(`${gconfig.paths.root}/webpack.prod.js`));

  //   return gulp.src([`${gconfig.paths.src.packages}/**/tab.js`,`${gconfig.paths.src.packages}/**/select.js`])
  //     .pipe(named())
  //     .pipe(webpackStream(prodConfig), webpack)
  //     .pipe(rename((path) => {
  //       path.dirname += `/${gconfig.project.prefix}-${path.basename}/dist`;
  //     }))
  //     .pipe(gulp.dest(gconfig.paths.src.packages));
  // });
}
