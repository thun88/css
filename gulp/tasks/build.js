// -------------------------------------
//   Task: Build & zip files for
//   publishing
// -------------------------------------

module.exports = (gulp, gconfig, publishDocObj) => {


  gulp.task('build', ['json:yaml:compile','json:md:compile', 'copy:demo', 'copy:tokens'], (done) => {
    const zip = require('gulp-zip');

    return gulp.src(`${gconfig.paths.dist.root}/**/*`)
      .pipe(zip(`${gconfig.paths.dist.root}.zip`))
      .pipe(gulp.dest(gconfig.paths.root));
  });

  // -------------------------------------
  //   Local task:
  //   - Copy "./demo"" to dist folder to be zipped
  // -------------------------------------
  gulp.task('copy:demo', ['src:compile'], () => {
    return gulp.src(`${gconfig.paths.demo}/**/*`, {
        base: gconfig.paths.root
      })
      .pipe(gulp.dest(gconfig.paths.dist.root))
  });

  // -------------------------------------
  //   Local task:
  //   - Copy all token json data
  // -------------------------------------
  gulp.task('copy:tokens', () => {
    const fs = require('fs');
    const pkgJson = require(`${process.cwd()}/package.json`);
    const idsIdentityPkgJson = require(`${gconfig.paths.idsIdentity.root}/package.json`);
    const tap = require('gulp-tap');
    const fns = require('../functions');
    const path = require('path');

    return gulp.src(`${gconfig.paths.idsIdentity.tokens}/theme-*.json`, {
        base: gconfig.paths.root
      })
      .pipe(tap(file => {
        const fileName = path.parse(file.path).name;
        const obj = JSON.parse(file.contents);

        obj.meta = {
          "name": gconfig.project.idsTokensThemeName,
          "version": idsIdentityPkgJson.version,
          "publishDate": new Date(),
          "library": {
            "name": pkgJson.name,
            "version": pkgJson.version
          }
        };

        fns.checkDirs([
          gconfig.paths.root,
          gconfig.paths.dist.root,
          gconfig.paths.dist.idsTokens
        ]);

        fs.writeFileSync(`${gconfig.paths.dist.idsTokens}/${fileName}.json`, JSON.stringify(obj, null, 4));
      }));
  });
}
