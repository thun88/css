// *************************************
//
//   Gulpfile
//
// *************************************
//
// Available tasks:
//   'gulp default'
//   'gulp build'
//      'gulp compile:docs'
//      'gulp compile:site'
//      'gulp compile:src'
//   'gulp clean'
//   'gulp lint'
//      'gulp lint:css'
//      'gulp lint:site'
//   `gulp pre-commit'
//   'gulp serve'
//   'gulp svg:optimize'
//   'gulp svg:store'
//   `gulp test`
//   'gulp watch-docs'
//   'gulp watch-site'
//   'gulp watch-src'
//
// *************************************

// -------------------------------------
// Load gulp & config
// gulp: The streaming build system
// -------------------------------------
const gulp   = require('gulp'),
  gConfig    = require('./gulp-config.js'),
  basePath   = gConfig.paths.base.root;
  sourcePath = gConfig.paths.sources,
  destPath   = gConfig.paths.destinations;

// -------------------------------------
// Load "gulp-" plugins
// -------------------------------------
// gulp-accessibility: Access Standards
// gulp-concat       : Concatenate files
// gulp-gitmodified  : List modified files
// gulp-pandoc       : File converter
// gulp-postcss      : Transform styles with JS
// gulp-rename       : Rename files
// gulp-stylelint    : Lint the styles
// gulp-svgmin       : SVGO for gulp
// gulp-svgstore     : Combine svg files
// gulp-tap          : Easily tap into a pipeline (debug)
// gulp-util         : Utility functions
// -------------------------------------
const access  = require('gulp-accessibility');
  concat      = require('gulp-concat'),
  flatten     = require('gulp-flatten'),
  gitmodified = require('gulp-gitmodified'),
  hb          = require('gulp-hb'),
  pandoc      = require('gulp-pandoc'),
  postcss     = require('gulp-postcss'),
  rename      = require('gulp-rename'),
  stylelint   = require('gulp-stylelint'),
  svgmin      = require('gulp-svgmin'),
  svgstore    = require('gulp-svgstore'),
  tap         = require('gulp-tap'),
  gutil       = require('gulp-util');


// -------------------------------------
//   Utility NPM Plugins
// -------------------------------------
// annotateBlock  : Parse css for comment blocks
// del            : Delete files
// fs             : Read/sync file stream
// glob           : File pattern matching
// hb             : Handlebars Template parser
// is-color       : Validate hex colors
// stylelint-order: Stylelint plugin
// -------------------------------------
const annotateBlock = require('css-annotation-block'),
  browserSync       = require('browser-sync').create(),
  del               = require('del'),
  fs                = require('fs'),
  glob              = require('glob'),
  isColor           = require('is-color');


// -------------------------------------
//   PostCSS Plugins
// -------------------------------------
// postcss-for       : Allow at-for loops
// postcss-variables : Allow at-vars in at-for loops
// postcss-import    : Include css files with '@'
// postcss-commas    : Allow lists of properties per value
// postcss-cssnext   : Collection of future proof plugins
// cssnano           : CSS minify
// lost              : Grid system
// -------------------------------------
const atFor    = require('postcss-for'),
  atImport     = require('postcss-import'),
  atVariables  = require('postcss-at-rules-variables'),
  commas       = require('postcss-commas'),
  cssnext      = require('postcss-cssnext'),
  cssnano      = require('cssnano'),
  lost         = require('lost');


// -------------------------------------
//   Global Variables
// -------------------------------------
let ICONS_ARR = [];
let SVG_HTML = fs.readFileSync(`${sourcePath.root}/icons/icons.svg`, 'utf-8');


// -------------------------------------
//   Task: Default
//   Does a build and serves the website
// -------------------------------------
gulp.task('default', ['build', 'serve']);


// -------------------------------------
//   Task: Build
// -------------------------------------
gulp.task('build', ['svg:store', 'compile:src', 'compile:docs', 'compile:site']);


// -------------------------------------
//   Task: Compile Docs
//   Compile foundation markdown files
// -------------------------------------
gulp.task('compile:docs', () => {
  const packageData = require('./package.json')
  let templateData = createCssAnnotations();

  if (ICONS_ARR.length === 0) {
    ICONS_ARR = parseIcons();;
  }
  templateData.svgIcons = ICONS_ARR;
  templateData.packageData = packageData;


  let hbStream = hb()
    .partials(`${sourcePath.templates}/partials/*.hbs`)
    .data(templateData);

  return gulp.src([`${sourcePath.docs}/*.md`, `${sourcePath.packages}/**/*.md`])
    // Parse any handlebar templates in the markdown
    .pipe(hbStream)

    // Convert markdown to html and insert into layout template
    .pipe(pandoc({
      from: 'markdown-markdown_in_html_blocks', // http://pandoc.org/MANUAL.html#raw-html
      to: 'html5+yaml_metadata_block',
      ext: '.html',
      args: [
        `--data-dir=${sourcePath.site}`, // looks for template dir inside data-dir
        '--template=layout.html',
        '--table-of-contents',
        `--variable=icons:${SVG_HTML}`,
        `--variable=releaseversion:${packageData.version}`,
        '--variable=lang:en'
      ]
    }))
    .pipe(flatten())
    .pipe(gulp.dest(destPath.www));
});


// -------------------------------------
//   Task: Compile Site
//   Compile the website css
// -------------------------------------
gulp.task('compile:site', function () {

  // Note: plugin order matters
  const plugins = [
    atImport,
    commas,
    atVariables,
    atFor,
    lost,
    cssnext,
    cssnano({ autoprefixer: false })
  ];

  return gulp.src(`${sourcePath.siteCss}/site.css`)
    .pipe(postcss(plugins, { map: true }))
    .pipe(rename({ extname: '.min.css' }))
    .pipe(gulp.dest(`${destPath.css}`));
});


// -------------------------------------
//   Task: Compile Src
//   Compile Foundation source css
// -------------------------------------
gulp.task('compile:src', function () {
  const packageData = require('./package.json')

  // Note: plugin order matters
  const plugins = [
    atImport,
    commas,
    atVariables,
    atFor,
    lost,
    // Possible in the future to preserve the css vars to others' use
    // cssnext({ features: { customProperties: { preserve: true, appendVariables: true }}})
    cssnext
  ];

  const postcssOptions = {
    map: true
  };

  return gulp.src(`${sourcePath.packages}/fnd-components-webapp/*.css`)
    .pipe(postcss(plugins, postcssOptions))
    .pipe(rename({ extname: `_${packageData.version}.css` }))
    .pipe(gulp.dest(destPath.dist))
    .pipe(postcss([
      require('cssnano')({ autoprefixer: false })
    ], postcssOptions))
    .pipe(rename({ extname: '.min.css' }))
    .pipe(gulp.dest(destPath.dist));
});


// -------------------------------------
//   Task: Clean
//   Delete contents of '/www'
//   but not '/www/examples'
// -------------------------------------
gulp.task('clean', function () {
  return del([
    `${destPath.www}/**`,
    `!${destPath.www}`,
    `!${destPath.www}/examples/**`,
    `!${destPath.www}/img/**`,
    `log`
  ]);
});


// -------------------------------------
//   Task: Lint
// -------------------------------------
gulp.task('lint', ['lint:css', 'lint:site']);


// -------------------------------------
//   Task: Lint:css
//   Lint the foundation source css
// -------------------------------------
gulp.task('lint:css', () => {
  return gulp.src(`${sourcePath.packages}/**/*.css`)
    .pipe(stylelint({
      failAfterError: true,
      reporters: [{
        formatter: 'verbose',
        console: true
      }]
    }))
});

// -------------------------------------
//   Task: Lint:site
//   Lint the website css
// -------------------------------------
gulp.task('lint:site', () => {
  return gulp.src(`${sourcePath.siteCss}/**/*.css`)
    .pipe(stylelint({
      failAfterError: true,
      reporters: [{
        formatter: 'verbose',
        console: true
      }]
    }))
});


// -------------------------------------
//   Task: Pre-commit
//   Run things before committing
// -------------------------------------
gulp.task('pre-commit', () => {

  // Lint only modified css files
  return gulp.src([`${sourcePath.packages}/**/*.css`, `${sourcePath.siteCss}/**/*.css`])
    .pipe(gitmodified(['modified']))
    .pipe(stylelint({
      failAfterError: true,
      reporters: [{
        formatter: 'verbose',
        console: true
      }]
    }));
})


// -------------------------------------
//   Task: Serve
//   Serve and watch files
// -------------------------------------
gulp.task('serve', () => {
  browserSync.init({
    codesync: false,
    injectChanges: false,
    open: false,
    server: {
      baseDir: destPath.www
    },
    logLevel: 'info',
    logPrefix: 'Soho-Fnd'
  });


  const srcDocs = [
    `${sourcePath.docs}/*.md`,
    `${sourcePath.templates}/**/*`
  ];

  const siteCss = [
    `${sourcePath.siteCss}/**/*.css`
  ];

  const srcCss = [
    `${sourcePath.packages}/**/*.css`
  ];

  gulp
    .watch(srcDocs, ['watch-docs'])
    .on('change', (evt) => {
      changeEvent(evt);
    });

  gulp
    .watch(siteCss, ['watch-site'])
    .on('change', (evt) => {
      changeEvent(evt);
    });

  gulp
    .watch(srcCss, ['watch-src'])
    .on('change', (evt) => {
      changeEvent(evt);
    });
});


// -------------------------------------
//   Task: SVG Optimization
//   Optimizes the svg icon markup
// -------------------------------------
gulp.task('svg:optimize', () => {
  return gulp.src(`${sourcePath.icons}/svg/*.svg`)
    .pipe(svgmin())
    .pipe(gulp.dest(`${sourcePath.icons}/svg`));
});


// -------------------------------------
//   Task: SVG Store
//   Creates and builds the svg icons
// -------------------------------------
gulp.task('svg:store', () => {
  ICONS_ARR = parseIcons(); // Refresh icons list

  return gulp.src(`${sourcePath.icons}/svg/*.svg`)
    .pipe(svgstore({ inlineSvg: true }))
    .pipe(rename('icons.svg'))
    .pipe(gulp.dest(sourcePath.icons))
    .pipe(gulp.dest(destPath.www));
});


// -------------------------------------
//   Task: Test
//   Test accessibility level WCAG2A
// -------------------------------------
gulp.task('test', ['build'], () => {

  del(['log/accessibility']);

  return gulp.src(`${destPath.www}/*.html`)
    .pipe(access({
      accessibilityLevel: 'WCAG2A',
      force: true,
      reportLevels: {
        notice: false,
        warning: false,
        error: true
      }
    }))
    .on('error', console.log)
    .pipe(access.report({ reportType: 'txt' }))
    .pipe(rename({
      extname: '.html'
    }))
    .pipe(gulp.dest('log/accessibility'));
});


// -------------------------------------
//   Task: watch-docs
//   Guarantees reload is last task
// -------------------------------------
gulp.task('watch-docs', ['compile:docs', 'compile:site'], (done) => {
  browserSync.reload();
  done();
});


// -------------------------------------
//   Task: watch-site
//   Guarantees reload is last task
// -------------------------------------
gulp.task('watch-site', ['compile:site'], (done) => {
  browserSync.reload();
  done();
});


// -------------------------------------
//   Task: watch-src
//   Guarantees reload is last task
// -------------------------------------
gulp.task('watch-src', ['compile:src', 'compile:docs', 'compile:site'], (done) => {
  browserSync.reload();
  done();
});


// -------------------------------------
//   Function: changeEvent()
// -------------------------------------
function changeEvent(evt) {
  gutil.log('File', gutil.colors.cyan(evt.path.replace(new RegExp('/.*(?=/' + basePath + ')/'), '')), 'was', gutil.colors.magenta(evt.type));
}


// -------------------------------------
//   Function: cloneSimpleObj()
// -------------------------------------
function cloneSimpleObj(obj) {
  return JSON.parse(JSON.stringify(obj));
}


// -------------------------------------
//   Function: cssVarToCamelCaseStr()
// -------------------------------------
function cssVarToCamelCaseStr(str) {
  // parse "var(--var-name)" into "--var-name"
  str = str.replace('var(', '').replace(')', '')
  str = str.substr(str.indexOf('--') + 2);

  // parse "var-name" into "varName"
  return str.replace(/-([a-z])/g, function (g) {
    return g[1].toUpperCase();
  });
}

// -------------------------------------
//   Function: createCssAnnotations()
// -------------------------------------
function createCssAnnotations() {
  let content, blocks, cssVarAnnotations = {};

  // Parse the defaults first
  const defaultVarsObj = parseCss(`${sourcePath.packages}/fnd-base/variables.css`);

  const themes = [
    { name: 'themeDark',         path: `${sourcePath.packages}/fnd-theme/theme-dark.css` },
    { name: 'themeHighContrast', path: `${sourcePath.packages}/fnd-theme/theme-high-contrast.css` }
  ];

  cssVarAnnotations = {
    default: cloneSimpleObj(defaultVarsObj)
  };

  // Build the theme objects
  themes.forEach(theme => {
    cssVarAnnotations[theme.name] = cloneSimpleObj(cssVarAnnotations['default']);
    parseCss(theme.path, cssVarAnnotations[theme.name]);
  });

  return cssVarAnnotations;
};


// -------------------------------------
//   Function: isCssVar()
// -------------------------------------
function isCssVar(str) {
  return str.substr(0, 3) === 'var';
}


// -------------------------------------
//   Function: parseCss()
// -------------------------------------
function parseCss(cssPath, themeAnnotationsObj = {}) {
  let content,
      blocks;

  content = fs.readFileSync(cssPath, 'utf-8').trim();
  blocks = annotateBlock(content);

  blocks.forEach(block => {
    block.nodes.forEach(node => {
      node.walkDecls(decl => {

        let propStr = cssVarToCamelCaseStr(decl.prop);

        themeAnnotationsObj[propStr] = {
          originalDeclaration: decl.prop,
          originalValue: decl.value,
          value: decl.value
        };

        if (block.name === 'colorPalette') {
          themeAnnotationsObj[propStr].isColor = true;
        }
      });
    });
  });

  // Replace all values that are variables with actual values
  let val,
    varNameToLookUp = '';

  for (let cssProp in themeAnnotationsObj) {
    val = themeAnnotationsObj[cssProp].value;
    if (isCssVar(val)) {

      varNameToLookUp = cssVarToCamelCaseStr(val);

      // Set the current prop value of the variable
      themeAnnotationsObj[cssProp].value = themeAnnotationsObj[varNameToLookUp].value;
    }
  }
  return themeAnnotationsObj;
};


// -------------------------------------
//   Function: parseIcons()
// -------------------------------------
function parseIcons() {
  const iconFiles = glob.sync('*.svg', { cwd: `${sourcePath.icons}/svg` })
  return iconSet = iconFiles.map(file => {
    return file.substring(0, file.lastIndexOf('.'));
  });
};


// -------------------------------------
// Task: Push
// rsync www to soho site in branchName dir
// -------------------------------------
gulp.task('push', ['build'], () => {
  let path = require('path');

  let getGitBranchName = require('git-branch-name');
  let dirPath = path.resolve(__dirname, '.');

  return getGitBranchName(dirPath, (err, branchName) => {
    let exec = require('child_process').exec;

    let src = `${dirPath}/site/www/`,
      dest = `~/Projects/mediawiki/data/static/foundation`;

//    if (branchName.substr(branchName.length - 2) === '.x') {
//      dest += `/${packageData.version}`;
//    } else {
//      dest += `/${branchName}`;
//    }

    return exec(`rsync -avz ${src} ${dest}`, function (err, stdout, stderr) {
      gutil.log(`Deployed to ${branchName}/index.html`);

      console.log(stdout);
      console.log(stderr);
    });
  });

});
