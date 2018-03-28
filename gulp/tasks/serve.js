// -------------------------------------
//   Task: Serve Demo & site files,
//   then watch
// -------------------------------------

module.exports = (gulp, gconfig) => {

  const browserSync = require('browser-sync').create('localDocServer');
  const runSequence = require('run-sequence');

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
      `${gconfig.paths.site.www}/assets/*`,
      `${gconfig.paths.site.templates}/**/*`
    ];

    const packageFiles = [
      gconfig.paths.src.mdFiles,
      `${gconfig.paths.src.root}/sitemap.yaml`,
      `${gconfig.paths.src.packages}/*/*.css`,
      `${gconfig.paths.src.packages}/*/css/*.css`
    ];

    const iconFiles = [
      `${gconfig.paths.src.packages}/ids-icon/readme.hbs`,
    ]

    const changeEvent = (evt) => {
      gutil.log('File', gutil.colors.cyan(evt.path.replace(process.cwd(), '')), 'was', gutil.colors.magenta(evt.type));
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

    gulp
      .watch(iconFiles, ['watch-icons'])
      .on('change', (evt) => {
        changeEvent(evt);
      });
  });

  gulp.task('watch-demo', (done) => {
    runSequence('browser:reload', done);
  });

  gulp.task('watch-site', ['site:compile'], (done) => {
    runSequence('site:compile', 'browser:reload', done);
  });

  gulp.task('watch-packages', (done) => {
    runSequence('src:compile', 'site:compile', 'browser:reload', done);
  });

  gulp.task('watch-icons', (done) => {
    runSequence('svg:store', 'src:compile', 'site:compile', 'browser:reload', done);
  });

  gulp.task('browser:reload', (done) => {
    browserSync.reload();
    done();
  });
}
