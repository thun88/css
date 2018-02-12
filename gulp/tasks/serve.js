// -------------------------------------
//   Task: Serve Demo & site files,
//   then watch
// -------------------------------------

module.exports = (gulp, gconfig) => {

  const browserSync = require('browser-sync').create('localDocServer');

  gulp.task('serve', () => {

    const
      gutil = require('gulp-util'),
      path = require('path');

    browserSync.init({
      codesync: false, // keep this false and use watches
      index: 'index.html',
      injectChanges: false,
      open: false,
      server: {
        baseDir: [gconfig.paths.site.www, gconfig.paths.demo]
      },
      logLevel: 'info',
      ui: false
    });

    const demoFiles = [
      `${gconfig.paths.demo}/demo.css`,
      `${gconfig.paths.demo}/*/*.html`
    ];

    const siteFiles = [
      `${gconfig.paths.site.css}/**/*`,
      `${gconfig.paths.site.templates}/**/*`
    ];

    const packageFiles = [
      gconfig.paths.src.mdFiles,
      `${gconfig.paths.src.root}/sitemap.yaml`,
      `${gconfig.paths.src.packages}/*/*.css`,
      `${gconfig.paths.src.packages}/*/css/*.css`
    ];

    const changeEvent = (evt) => {
      gutil.log('File', gutil.colors.cyan(evt.path.replace(new RegExp('/.*(?=/' + gconfig.paths.root + ')/'), '')), 'was', gutil.colors.magenta(evt.type));
    };

    gulp
      .watch(demoFiles, ['watch-demo'])
      .on('change', (evt) => {
        changeEvent(evt);
      });

    gulp
      .watch(siteFiles, ['watch-site'])
      .on('change', (evt) => {
        changeEvent(evt);
      });

    gulp
      .watch(packageFiles, ['watch-packages'])
      .on('change', (evt) => {
        changeEvent(evt);
      });
  });

  gulp.task('watch-demo', (done) => {
    browserSync.reload();
    done();
  });

  gulp.task('watch-site', ['site:compile'], (done) => {
    browserSync.reload();
    done();
  });

  gulp.task('watch-packages', ['src:compile', 'site:compile'], (done) => {
    browserSync.reload();
    done();
  });
}
