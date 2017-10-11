// -------------------------------------
//   Task: Serve Demo & site files,
//   then watch
// -------------------------------------

module.exports = (gulp, paths) => {

  gulp.task('serve', () => {

    const
      browserSync = require('browser-sync').create('localDocServer'),
      gutil = require('gulp-util'),
      helperFns = require('../functions.js'),
      path = require('path');

    browserSync.init({
      codesync: false,
      index: 'base.html',
      injectChanges: false,
      open: false,
      server: {
        baseDir: [paths.dest.site, paths.dest.demo]
      },
      logLevel: 'info',
      logPrefix: 'IUX',
      ui: false
    });

    const demoFiles = [
      `${paths.dest.demo}/*/*.html`,
      `${paths.dest.demo}/demo.css`
    ];

    const siteFiles = [
      `${paths.src.site}/css/**/*`,
      `${paths.src.site}/templates/**/*`
    ];

    const packageFiles = [
      `!${paths.src.packages}/*/dist`,
      `${paths.src.packages}/*/+(*.css|*.js|*.md)`
    ];

    const changeEvent = (evt) => {
      gutil.log('File', gutil.colors.cyan(evt.path.replace(new RegExp('/.*(?=/' + paths.root + ')/'), '')), 'was', gutil.colors.magenta(evt.type));
    };



    gulp
      .watch(demoFiles, () => {
        browserSync.reload();
      })
      .on('change', (evt) => {
        changeEvent(evt);
      });

    gulp
      .watch(siteFiles, ['build:site'], () => {
        browserSync.reload();
      })
      .on('change', (evt) => {
        changeEvent(evt);
      });

    gulp
      .watch(packageFiles, ['build:packages'], () => {
        browserSync.reload();
      })
      .on('change', (evt) => {
        changeEvent(evt);
      });
  });
}
