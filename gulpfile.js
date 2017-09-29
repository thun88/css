// **************************************************************************
//
//   Gulpfile
//
// **************************************************************************
// Available tasks:
//   'gulp default'
//   'gulp build'
//      'gulp build:site'
//        'gulp build:site:css'
//        'gulp build:site:html'
//        'gulp build:site:json'
//      'gulp build:packages'
//        'gulp build:packages:css'
//        'gulp build:packages:js'
//   'gulp clean'
//     'gulp clean:site'
//     'gulp clean:site:json'
//     'gulp clean:dist'
//   'gulp stylelint'
//      'gulp stylelint:packages'
//      'gulp stylelint:site'
//   `gulp pre-commit'
//   'gulp serve:site'
//   'gulp svg:optimize'
//   'gulp svg:store'
//   `gulp test`
//   'gulp watch-md'
//   'gulp watch-site'
//   'gulp watch-packages'
// *************************************

// --------------------------------------------------------------------------
// Load gulp & config
// gulp: The streaming build system
// --------------------------------------------------------------------------
const gulp   = require('gulp'),
  gConfig    = require('./gulp-config.js'),
  basePath   = gConfig.paths.base.root;
  srcPath = gConfig.paths.sources,
  destPath   = gConfig.paths.destinations;

// --------------------------------------------------------------------------
// Load "gulp-" plugins
// --------------------------------------------------------------------------
// gulp-accessibility: Access Standards
// gulp-concat       : Concatenate files
// gulp-documentation: Document JS files with documentationjs
// gulp-gitmodified  : List modified files
// gulp-hb           : Handlebars parser
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
  docjs       = require('gulp-documentation');
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


// --------------------------------------------------------------------------
//   Utility NPM Plugins
// --------------------------------------------------------------------------
// annotateBlock  : Parse css for comment blocks
// browserSync    : Method of serving sites
// del            : Delete files
// fs             : Read/sync file stream
// glob           : File pattern matching
// is-color       : Validate hex colors
// -------------------------------------
const annotateBlock = require('css-annotation-block'),
  browserSync       = require('browser-sync').create('localDocServer'),
  del               = require('del'),
  fs                = require('fs'),
  glob              = require('glob'),
  isColor           = require('is-color'),
  path              = require('path');


// --------------------------------------------------------------------------
//   PostCSS Plugins
// --------------------------------------------------------------------------
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


// --------------------------------------------------------------------------
//   Global Variables
// --------------------------------------------------------------------------
let ICONS_ARR = [];
let SVG_HTML = fs.readFileSync(`${srcPath.icons}/icons.svg`, 'utf-8');


// --------------------------------------------------------------------------
//   Task: Default
//   Does a build and serves the website
// --------------------------------------------------------------------------
gulp.task('default', ['clean', 'build', 'serve']);


// --------------------------------------------------------------------------
//   Task: Build
// --------------------------------------------------------------------------
gulp.task('build', ['svg:store', 'build:site']);


// --------------------------------------------------------------------------
//   Task: Build:Site
// --------------------------------------------------------------------------
gulp.task('build:site', ['build:packages', 'build:site:html', 'build:site:css']);


// -------------------------------------
//   Task: Build Docs
//   Build html files
// -------------------------------------
gulp.task('build:site:html', () => {
  const packageData = require('./package.json')
  let templateData = createCssAnnotations();

  if (ICONS_ARR.length === 0) {
    ICONS_ARR = parseIcons();;
  }
  templateData.svgIcons = ICONS_ARR;
  templateData.packageData = packageData;


  let hbStream = hb()
    .partials(`${srcPath.templates}/partials/*.hbs`)
    .data(templateData);

  return gulp.src(`${srcPath.packages}/*/README.md`)
    // Parse any handlebar templates in the markdown
    .pipe(hbStream)

    // Convert markdown to html and insert into layout template
    .pipe(pandoc({
      from: 'markdown-markdown_in_html_blocks', // http://pandoc.org/MANUAL.html#raw-html
      to: 'html5+yaml_metadata_block',
      ext: '.html',
      args: [
        `--data-dir=${srcPath.site}`, // looks for template dir inside data-dir
        '--template=layout.html',
        '--table-of-contents',
        `--variable=icons:${SVG_HTML}`,
        `--variable=releaseversion:${packageData.version}`,
        '--variable=lang:en'
      ]
    }))
    .pipe(rename((file) => {
      // Rename filename of readme to folder name
      file.basename = file.dirname.replace('iux-', '');
    }))
    .pipe(flatten())
    .pipe(gulp.dest(destPath.site));
});

// -------------------------------------
//   Task: Build docs json
//   Build json documentation files
// -------------------------------------
gulp.task('build:site:json', () => {
  const markdownToJSON = require('gulp-markdown-to-json'),
    marked = require('marked'),
    packageData = require('./package.json');

  let templateData = createCssAnnotations();

  if (ICONS_ARR.length === 0) {
    ICONS_ARR = parseIcons();;
  }
  templateData.svgIcons = ICONS_ARR;
  templateData.packageData = packageData;

  let hbStream = hb()
    .partials(`${srcPath.templates}/partials/*.hbs`)
    .data(templateData);

  marked.setOptions({
    pedantic: true,
    smartypants: true
  });

  gulp.src(`${srcPath.packages}/*/README.md`)
    .pipe(rename((file) => {
      // Rename filename of readme to folder name
      file.basename = file.dirname.replace('iux-', '');
    }))
    .pipe(hbStream)
    .pipe(markdownToJSON(marked))
    .pipe(flatten())
    .pipe(gulp.dest(destPath.json));
});

// -------------------------------------
//   Task: Build Site
//   Compile the website css
// -------------------------------------
gulp.task('build:site:css', () => {

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

  return gulp.src(`${srcPath.site}/css/site.css`)
    .pipe(postcss(plugins, { map: true }))
    .pipe(rename({ extname: '.min.css' }))
    .pipe(gulp.dest(`${destPath.site}/dist`));
});


// --------------------------------------------------------------------------
//   Task: Build Packages
// --------------------------------------------------------------------------
gulp.task('build:packages', ['build:packages:css', 'build:packages:js']);

// -------------------------------------
//   Task: Build Packages CSS
// -------------------------------------
gulp.task('build:packages:css', () => {

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

  const postcssOptions = {
    map: true
  };

  return gulp.src(`${srcPath.packages}/*/[^_]*.css`)
    .pipe(postcss(plugins, postcssOptions))
    .pipe(rename((path) => {
      path.dirname += '/dist';
      path.extname = '.min.css';
    }))
    .pipe(gulp.dest(srcPath.packages))
    .pipe(gulp.dest(destPath.demo));
});

// -------------------------------------
//   Task: Build Packages JS
// -------------------------------------
gulp.task('build:packages:js', () => {
  return gulp.src(`${srcPath.packages}/*/*.js`)
    .pipe(rename((path) => {
      path.dirname += '/dist';
      path.extname = '.min.js';
    }))
    .pipe(gulp.dest(srcPath.packages))
    .pipe(gulp.dest(destPath.demo));
});


// --------------------------------------------------------------------------
//   Task: Clean
//   Delete built files
// --------------------------------------------------------------------------
gulp.task('clean', ['clean:site', 'clean:site:json', 'clean:dist']);

// -------------------------------------
//   Task: Clean
//   Delete built files
// -------------------------------------
gulp.task('clean:site', () => {
  return del([
    `${destPath.site}/**`,
    `!${destPath.site}`,
    `log`
  ]);
});

// -------------------------------------
//   Task: Clean Output JSON
//   Delete dist json files
// -------------------------------------
gulp.task('clean:site:json', () => {
  return del([
    `${destPath.json}`
  ]);
});

// -------------------------------------
//   Task: Clean Dist
//   Delete dist files
// -------------------------------------
gulp.task('clean:dist', () => {
  return del([
    `${srcPath.packages}/*/dist`,
    `${destPath.demo}/*/dist`
  ]);
});


// --------------------------------------------------------------------------
//   Task: docjs
// --------------------------------------------------------------------------
gulp.task('docjs', () => {
  return gulp.src(`${srcPath.packages}/**/*.js`)
    .pipe(docjs('md'))
    .pipe(gulp.dest(destPath.json));
});


// --------------------------------------------------------------------------
//   Task: Lint
// --------------------------------------------------------------------------
gulp.task('stylelint', ['stylelint:packages', 'stylelint:site']);

// -------------------------------------
//   Task: Lint:packages:css
//   Lint the source css
// -------------------------------------
gulp.task('stylelint:packages', () => {
  return gulp.src(`${srcPath.packages}/*/*.css`)
    .pipe(gitmodified(['modified']))
    .pipe(stylelint({
      failAfterError: true,
      reporters: [{
        formatter: 'verbose',
        console: true
      }]
    }))
});

// -------------------------------------
//   Task: Lint:site:css
//   Lint the website css
// -------------------------------------
gulp.task('stylelint:site', () => {
  return gulp.src(`${srcPath.siteCss}/*/*.css`)
    .pipe(stylelint({
      failAfterError: true,
      reporters: [{
        formatter: 'verbose',
        console: true
      }]
    }))
});


// --------------------------------------------------------------------------
//   Task: Pre-commit
//   Run things before committing
// --------------------------------------------------------------------------
gulp.task('pre-commit', ['stylelint:packages']);


// --------------------------------------------------------------------------
//   Task: Serve Demo & site
// --------------------------------------------------------------------------
gulp.task('serve', () => {
  browserSync.init({
    codesync: false,
    index: 'base.html',
    injectChanges: false,
    open: false,
    server: {
      baseDir: [destPath.site, destPath.demo]
    },
    logLevel: 'info',
    logPrefix: 'IUX',
    ui: false
  });


  const demoFiles = [
    `${destPath.demo}/*/*.html`
  ];

  const siteFiles = [
    `${srcPath.site}/css/**/*`,
    `${srcPath.site}/templates/**/*`
  ];

  const packageFiles = [
    `${srcPath.packages}/*/+(*.css|*.js|*.md)`
  ];

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


// --------------------------------------------------------------------------
//   Task: SVG Optimization
//   Optimizes the svg icon markup
// --------------------------------------------------------------------------
gulp.task('svg:optimize', () => {
  return gulp.src(`${srcPath.icons}/svg/*.svg`)
    .pipe(svgmin())
    .pipe(gulp.dest(`${srcPath.icons}/svg`));
});


// --------------------------------------------------------------------------
//   Task: SVG Store
//   Creates and builds the svg icons
// --------------------------------------------------------------------------
gulp.task('svg:store', () => {
  ICONS_ARR = parseIcons(); // Refresh icons list

  return gulp.src(`${srcPath.icons}/svg/*.svg`)
    .pipe(svgstore({ inlineSvg: true }))
    .pipe(rename('icons.svg'))
    .pipe(gulp.dest(srcPath.icons))
    .pipe(gulp.dest(destPath.site));
});


// --------------------------------------------------------------------------
//   Task: Test
//   Test accessibility level WCAG2A
// --------------------------------------------------------------------------
gulp.task('test', ['build'], () => {

  del(['log/accessibility']);

  return gulp.src(`${destPath.site}/*.html`)
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


// --------------------------------------------------------------------------
//   Task: watch
//   Guarantees reload is last task
// --------------------------------------------------------------------------
gulp.task('watch', ['watch-demo', 'watch-site', 'watch-packages']);

// -------------------------------------
//   Task: watch-demo
//   Guarantees reload is last task
// -------------------------------------
gulp.task('watch-demo', (done) => {
  browserSync.reload();
  done();
});

// -------------------------------------
//   Task: watch-site
//   Guarantees reload is last task
// -------------------------------------
gulp.task('watch-site', ['build:site'], (done) => {
  browserSync.reload();
  done();
});

// -------------------------------------
//   Task: watch-packages
//   Guarantees reload is last task
// -------------------------------------
gulp.task('watch-packages', ['build'], (done) => {
  browserSync.reload();
  done();
});


// --------------------------------------------------------------------------
// Task: Push
// rsync www to soho site in branchName dir
// --------------------------------------------------------------------------
gulp.task('deploy', ['build:site:json', 'docjs'], () => {
  const zipFolder = require('zip-folder');

  return zipFolder(destPath.json, 'iux-json.zip', (err) => {
    if (err) {
      gutil.log(`An error occured zipping the JSON files: ${err}`);
    } else {
      return postJson();
    }
  });
});


// --------------------------------------------------------------------------
//   Functions
// --------------------------------------------------------------------------

/**
 * Log which files were changed/edited
 * @param  {event} evt
 */
function changeEvent(evt) {
  gutil.log('File', gutil.colors.cyan(evt.path.replace(new RegExp('/.*(?=/' + basePath + ')/'), '')), 'was', gutil.colors.magenta(evt.type));
}

/**
 * Clone an object
 * @param  {object} obj The original objet
 * @return {object}     A new object
 */
function cloneSimpleObj(obj) {
  return JSON.parse(JSON.stringify(obj));
}

/**
 * [cssVarToCamelCaseStr description]
 * @param  {[type]} str [description]
 * @return {[type]}     [description]
 */
function cssVarToCamelCaseStr(str) {
  // parse "var(--var-name)" into "--var-name"
  str = str.replace('var(', '').replace(')', '')
  str = str.substr(str.indexOf('--') + 2);

  // parse "var-name" into "varName"
  return str.replace(/-([a-z])/g, function (g) {
    return g[1].toUpperCase();
  });
}

/**
 * [createCssAnnotations description]
 * @return {[type]} [description]
 */
function createCssAnnotations() {
  let content, blocks, cssVarAnnotations = {};

  // Parse the defaults first
  const defaultVarsObj = parseCss(`${srcPath.packages}/iux-base/_variables.css`);

  const themes = [
    { name: 'themeDark',         path: `${srcPath.packages}/iux-theme-dark/theme-dark.css` },
    { name: 'themeHighContrast', path: `${srcPath.packages}/iux-theme-high-contrast/theme-high-contrast.css` }
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


/**
 * Check to see if the string is a css variable
 * @param  {String}  str The string to check
 * @return {Boolean}
 */
function isCssVar(str) {
  return str.substr(0, 3) === 'var';
}


/**
 * Parse our the variables and values from CSS
 * @param  {String} cssPath             The path to the css files
 * @param  {Object} themeAnnotationsObj Object of themes
 * @return {Object}
 */
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

/**
 * Parse the names of the icons
 * @return {object}
 */
function parseIcons() {
  const iconFiles = glob.sync('*.svg', { cwd: `${srcPath.icons}/svg` })
  return iconSet = iconFiles.map(file => {
    return file.substring(0, file.lastIndexOf('.'));
  });
};

/**
 * Post zip file to server
 */
function postJson() {
  const formData = require('form-data');
  const url = 'http://docs-site-staging.us-east-1.elasticbeanstalk.com/api/docs/';
  const packageData = require('./package.json');

  let form = new formData();
  form.append('file', fs.createReadStream('iux-json.zip'));
  form.append('root_path', packageData.version);


  form.submit(url, (err, res) => {
    if (err) {
      gutil.log(`Deploy failed: ${err}`);
    } else {
      gutil.log('Deploy succeeded!');
      gutil.log(res.statusCode);
    }
    res.resume();
  });
}
