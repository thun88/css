// -------------------------------------
//   Task: Build & zip files for
//   publishing
// -------------------------------------

module.exports = (gulp, gconfig, publishDocObj) => {


  gulp.task('build', ['json:yaml:compile','json:md:compile', 'copy:demo', 'copy:tokensraw'], (done) => {
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
  //   - Add version to the tokens raw json
  //   and add it to the publish folder
  // -------------------------------------
  gulp.task('copy:tokensraw', () => {
    const fs = require('fs');
    const helperFns = require('../functions.js');
    const pkgJson = require(`${process.cwd()}/package.json`);
    const idsTokensRawJson = require(helperFns.getIdsTokensPath());

    idsTokensRawJson.meta = {
      themeName: gconfig.project.idsTokensThemeName,
      version: pkgJson.devDependencies["ids-identity"],
      publishedAt: new Date()
    }

    if (!fs.existsSync(gconfig.paths.root)) {
      fs.mkdirSync(gconfig.paths.dist.root);
    }

    if (!fs.existsSync(gconfig.paths.dist.idsTokens)) {
      fs.mkdirSync(gconfig.paths.dist.idsTokens);
    }

    fs.writeFileSync(`${gconfig.paths.dist.idsTokens}/${gconfig.project.idsTokensThemeName}.raw.json`, JSON.stringify(idsTokensRawJson, null, 2));
  });
}
