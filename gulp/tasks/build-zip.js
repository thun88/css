// -------------------------------------
//   Task: Build JSON
//   Build json documentation files
// -------------------------------------

module.exports = (gulp, paths) => {

  let docObj = {};
  const helperFns = require('../functions.js');

  const del = require('del');
  const fs = require('fs');
  const hb = require('gulp-hb');
  const marked = require('marked');
  const mdToJson = require('gulp-markdown-to-json');
  const path = require('path');
  const pkgJson  = require('../../package.json');
  const tap = require('gulp-tap');
  const zip = require('gulp-zip');


  gulp.task('build:zip', () => {
    return Promise.all([
      parseMDtoJSON,
      documentPackageJS
    ])
    .then(() => {

      // Create dist/ if needed
      if (!fs.existsSync(paths.dest.dist)){
        fs.mkdirSync(paths.dest.dist);
      }

      // Loop through each "file" property and create the json file
      for (let pkgName of Object.keys(docObj)) {
        const thePath = `${paths.dest.dist}/${pkgName}.json`;
        fs.writeFileSync(thePath, JSON.stringify(docObj[pkgName]));
      }
    })
    .then(() => {
      // Zip dist/
      return gulp.src(`${paths.dest.dist}/*.json`)
        .pipe(zip(paths.dest.zipFile))
        .pipe(gulp.dest(paths.dest.dist));
    });
  });


  /**
   * Promise for converting package README.md files to json
   * @return {Promise}
   */
  const parseMDtoJSON = new Promise((resolve, reject) => {
    marked.setOptions({
      pedantic: true,
      smartypants: true
    });

    let templateData = helperFns.createCssAnnotations(paths.src.packages);
    templateData.pkgJson = pkgJson;

    let hbStream = hb()
      .partials(`${paths.src.templates}/partials/*.hbs`)
      .data(templateData);

    return gulp.src(`${paths.src.packages}/*/README.md`)
      .pipe(hbStream)
      .pipe(mdToJson(marked))
      .pipe(tap((file) => {
        const propName = getFolderName(file.path);
        const tmpObj = JSON.parse(file.contents.toString());
        const mergedObj = { ...tmpObj, ...docObj[propName] };
        docObj[propName] = mergedObj;
      }))
      .on('error', reject)
      .on('end', resolve);
  });

  /**
   * Promise for documenting the package js files
   * @return {Promise}
   */
  const documentPackageJS = new Promise((resolve, reject) => {
    const docjs = require('documentation');
    const fs = require('fs');
    const pkgJson = require('../../package.json');

    return gulp.src(`${paths.src.packages}/*/*.js`)
      .pipe(tap((file, t) => {
        docjs.build(file.path, {})
          .then(docjs.formats.json)
          .then(output => {
            // output is a string of JSON data
            const propName = getFolderName(file.path);
            const tmpObj = { api: JSON.parse(output)}
            const mergedObj = { ...tmpObj, ...docObj[propName] };
            docObj[propName] = mergedObj;
          });
      }))
      .on('error', reject)
      .on('end', resolve);
  });


  /**
   * Returns the last folder in the path
   * @param  {String} filePath - The full file path without the file
   * @return {String}          - The last folder in the path
   */
  function getFolderName(filePath) {
    const pathArr = path.dirname(filePath).split('/');
    return (pathArr[pathArr.length - 1]);
  };
}
