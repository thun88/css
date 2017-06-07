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
// gulp-concat    : Concatenate files
// gulp-pandoc    : File converter
// gulp-postcss   : Transform styles with JS
// gulp-rename    : Rename files
// gulp-stylelint : Lint the styles
// gulp-svgmin    : SVGO for gulp
// gulp-svgstore  : Combine svg files
// gulp-tap       : Easily tap into a pipeline (debug)
// gulp-util      : Utility functions
// -------------------------------------
const access = require('gulp-accessibility');
  concat     = require('gulp-concat'),
  hb         = require('gulp-hb'),
  pandoc     = require('gulp-pandoc'),
  postcss    = require('gulp-postcss'),
  rename     = require('gulp-rename'),
  stylelint  = require('gulp-stylelint'),
  svgmin     = require('gulp-svgmin'),
  svgstore   = require('gulp-svgstore'),
  tap        = require('gulp-tap'),
  gutil      = require('gulp-util');


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
gulp.task('compile:docs', function() {
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

  return gulp.src(`${sourcePath.docs}/*.md`)
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
        `--variable=releaseversion:${packageData.version}`
      ]
    }))
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

  return gulp.src(`${sourcePath.css}/*.css`)
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
gulp.task('lint:css', function() {
  return gulp.src(`${sourcePath.css}/**/*.css`)
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
gulp.task('lint:site', function() {
  return gulp.src(`${sourcePath.siteCss}/*.css`)
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
gulp.task('pre-commit', ['lint']);


// -------------------------------------
//   Task: Serve
//   Serve and watch files
// -------------------------------------
gulp.task('serve', function() {
  browserSync.init({
    codesync: false,
    injectChanges: false,
    open: false,
    server: {
      baseDir: destPath.www
    },
    logLevel: 'basic',
    logPrefix: 'Soho-Fnd'
  });


  const srcDocs = [
    `${sourcePath.docs}/*.md`,
    `${sourcePath.templates}/**/*`
  ];

  const siteCss = [
    `${sourcePath.siteCss}/*.css`
  ];

  const srcCss = [
    `${sourcePath.css}/**/*.css`
  ];

  gulp
    .watch(srcDocs, ['watch-docs'])
    .on('change', function(evt) {
      changeEvent(evt);
    });

  gulp
    .watch(siteCss, ['watch-site'])
    .on('change', function(evt) {
      changeEvent(evt);
    });

  gulp
    .watch(srcCss, ['watch-src'])
    .on('change', function(evt) {
      changeEvent(evt);
    });
});


// -------------------------------------
//   Task: SVG Optimization
//   Optimizes the svg icon markup
// -------------------------------------
gulp.task('svg:optimize', function() {
  return gulp.src(`${sourcePath.icons}/svg/*.svg`)
    .pipe(svgmin())
    .pipe(gulp.dest(`${sourcePath.icons}/svg`));
});


// -------------------------------------
//   Task: SVG Store
//   Creates and builds the svg icons
// -------------------------------------
gulp.task('svg:store', function() {
  ICONS_ARR = parseIcons(); // Refresh icons list

  return gulp.src(`${sourcePath.icons}/svg/*.svg`)
    .pipe(svgstore({ inlineSvg: true }))
    .pipe(rename('icons.svg'))
    .pipe(gulp.dest(sourcePath.icons))
    .pipe(gulp.dest(destPath.www));
});


// -------------------------------------
//   Task: Test
//   Test accessibility
// -------------------------------------
gulp.task('test', function() {
  return gulp.src(`${destinations.www}/*.html`)
    .pipe(access({
      force: true
    }))
    .on('error', console.log);
    // .pipe(access.report({reportType: 'txt'}))
    // .pipe(rename({
    //   extname: '.txt'
    // }))
    // .pipe(gulp.dest('reports/txt'));
});


// -------------------------------------
//   Task: watch-docs
//   Guarantees reload is last task
// -------------------------------------
gulp.task('watch-docs', ['compile:docs', 'compile:site'], function(done) {
  browserSync.reload();
  done();
});


// -------------------------------------
//   Task: watch-site
//   Guarantees reload is last task
// -------------------------------------
gulp.task('watch-site', ['compile:site'], function(done) {
  browserSync.reload();
  done();
});


// -------------------------------------
//   Task: watch-src
//   Guarantees reload is last task
// -------------------------------------
gulp.task('watch-src', ['compile:src', 'compile:docs', 'compile:site'], function(done) {
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
  const defaultVarsObj = parseCss(`${sourcePath.css}/components/_variables.css`);

  const themes = [
    { name: 'themeDark',         path: `${sourcePath.css}/themes/_theme-dark.css` },
    { name: 'themeHighContrast', path: `${sourcePath.css}/themes/_theme-high-contrast.css` }
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
// Task: Deploy (Lepore only)
// Copies the WWW folder on Lepore's machine to his dropbox folder for temporary viewing
// -------------------------------------
gulp.task('deploy', ['lint', 'build'], function() {
  const exec = require('child_process').exec;

  const src = '~/HookandLoop/git/github/soho-foundation/site/www/*',
    dest = ' ~/Dropbox/Public/soho-foundation';

  return exec(`cp -R ${src} ${dest}`, function (err, stdout, stderr) {
    gutil.log('Deployed to https://dl.dropboxusercontent.com/u/21521721/soho-foundation/index.html');

    console.log(stdout);
    console.log(stderr);
  });
});
// -------------------------------------
p -R ${src} ${dest}`, function (err, stdout, stderr) {
    gutil.log('Deployed to https://dl.dropboxusercontent.com/u/21521721/soho-foundation/index.html');

    console.log(stdout);
    console.log(stderr);
  });
});
// -------------------------------------
