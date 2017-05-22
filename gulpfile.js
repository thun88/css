// *************************************
//
//   Gulpfile
//
// *************************************
//
// Available tasks:
//   `gulp`
//   `gulp build`
//      `gulp build-watch`
//      `gulp compile:colors`
//      `gulp compile:css`
//      `gulp compile:docs`
//      `gulp compile:site`
//   `gulp clean`
//   `gulp lint`
//      `gulp lint:css`
//      `gulp lint:site`
//   `gulp svg:optimize`
//   `gulp svg:store`
//   `gulp serve`
//
// *************************************


// -------------------------------------
//   Modules
// -------------------------------------
//
// gulp           : The streaming build system
// gulp-concat    : Concatenate files
// annotateBlock  : Parse css for comment blocks
// del            : Delete files
// fs             : Read/sync file stream
// glob           : File pattern matching
// hb             : Handlebars Template parser
// is-color       : Validate hex colors
// gulp-pandoc    : File converter
// gulp-postcss   : Transform styles with JS
// gulp-rename    : Rename files
// gulp-server    : Serve the website for dev
// gulp-stylelint : Lint the styles
// stylelint-order: Stylelint plugin
// gulp-svgmin    : SVGO for gulp
// gulp-svgstore  : Combine svg files
// gulp-tap       : Easily tap into a pipeline (debug)
//
// postcss-for       : Allow at-for loops
// postcss-variables : Allow at-vars in at-for loops
// postcss-import    : Include css files with `@`
// postcss-commas    : Allow lists of properties per value
// postcss-cssnext   : Collection of future proof plugins
// cssnano           : CSS minify
// lost              : Grid system
//
// -------------------------------------

let gulp = require(`gulp`);
let browserSync = require(`browser-sync`).create(),
    concat = require(`gulp-concat`),
    annotateBlock = require(`css-annotation-block`),
    del = require(`del`),
    fs = require(`fs`),
    glob = require(`glob`),
    hb = require(`gulp-hb`),
    isColor = require(`is-color`),
    pandoc = require(`gulp-pandoc`),
    postcss = require(`gulp-postcss`),
    rename = require(`gulp-rename`),
    server = require(`gulp-server-livereload`),
    stylelint = require(`gulp-stylelint`),
    svgmin = require('gulp-svgmin'),
    svgstore = require(`gulp-svgstore`),
    tap = require(`gulp-tap`);


// -------------------------------------
//   PostCSS Plugins
// -------------------------------------
let atFor = require(`postcss-for`),
  atImport = require(`postcss-import`),
  atVariables = require(`postcss-at-rules-variables`),
  commas     = require(`postcss-commas`),
  cssnext    = require(`postcss-cssnext`),
  cssnano    = require(`cssnano`),
  lost       = require(`lost`);


// -------------------------------------
//   Globals
// -------------------------------------
let PATHS = {
  src:  {},
  dist: {},
  site: {}
};

// Source
PATHS.src.root      = `src`;
PATHS.src.docs      = `${PATHS.src.root}/docs`;
PATHS.src.css       = `${PATHS.src.root}/css`;
PATHS.src.icons     = `${PATHS.src.root}/icons`;

// Dist
PATHS.dist.root = `dist`;
PATHS.dist.css  = `${PATHS.dist.root}/css`;

// Website
PATHS.site.root      = `site`
PATHS.site.css       = `${PATHS.site.root}/css`;
PATHS.site.templates = `${PATHS.site.root}/templates`;
PATHS.site.www       = `${PATHS.site.root}/www`;

let ICONS_ARR = parseIcons();
let SVG_HTML = fs.readFileSync(`${PATHS.src.root}/icons/icons.svg`, `utf-8`);


// -------------------------------------
//   Task: Default
// -------------------------------------
// Does a full build and runs the site
gulp.task(`default`, [`build`, `serve`]);


// -------------------------------------
//   Task: Build
// -------------------------------------
gulp.task(`build`, [`svg:store`, `compile:css`, `compile:docs`, `compile:site`]);


// -------------------------------------
//   Task: build-watch
//   A task that ensures reload after
//   everything is built (for serve task)
// -------------------------------------
gulp.task(`build-watch`, [`compile:css`, `compile:docs`, `compile:site`], function (done) {
    browserSync.reload();
    done();
});


// -------------------------------------
//   Task: Compile CSS
// -------------------------------------
gulp.task(`compile:css`, function () {

  // Note: plugin order matters
  let plugins = [
    atImport,
    commas,
    atVariables,
    atFor,
    lost,
    // cssnext({ features: { customProperties: { preserve: true, appendVariables: true }}})
    cssnext
  ];

  let postcssOptions = {
    map: true
  };

  return gulp.src(`${PATHS.src.css}/*.css`)
    .pipe(postcss(plugins, postcssOptions))
    .pipe(gulp.dest(PATHS.dist.css))
    .pipe(postcss([
      require(`cssnano`)({ autoprefixer: false })
    ], postcssOptions))
    .pipe(rename({ extname: `.min.css` }))
    .pipe(gulp.dest(PATHS.dist.css))
    .pipe(gulp.dest(PATHS.site.www + `/css`));
});

// -------------------------------------
//   Task: Compile Docs
// -------------------------------------
gulp.task(`compile:docs`, function() {
  var templateData = parseVarAnnotations();
  templateData.svgIcons = ICONS_ARR;
  var packageData = require('./package.json')

  let hbStream = hb()
    .partials(`${PATHS.site.templates}/partials/*.hbs`)
    .data(templateData);

  return gulp.src(`${PATHS.src.docs}/*.md`)
    // Parse any handlebar templates in the markdown
    .pipe(hbStream)

    // Convert markdown to html and insert into layout template
    .pipe(pandoc({
      from: `markdown-markdown_in_html_blocks`, // http://pandoc.org/MANUAL.html#raw-html
      to: `html5+yaml_metadata_block`,
      ext: `.html`,
      args: [
        `--data-dir=${PATHS.site.root}`, // looks for template dir inside data-dir so don't use path.site.templates
        `--template=layout.html`,
        `--table-of-contents`,
        `--variable=icons:${SVG_HTML}`,
        `--variable=releaseversion:${packageData.version}`
      ]
    }))
    .pipe(gulp.dest(PATHS.site.www));
});


// -------------------------------------
//   Task: Compile Site
// -------------------------------------
gulp.task(`compile:site`, function () {

  // Note: plugin order matters
  let plugins = [
    atImport,
    commas,
    atVariables,
    atFor,
    lost,
    cssnext,
    cssnano({ autoprefixer: false })
  ];

  return gulp.src(`${PATHS.site.css}/site.css`)
    .pipe(postcss(plugins, { map: true }))
    .pipe(rename({ extname: `.min.css` }))
    .pipe(gulp.dest(`${PATHS.site.www}/css`));
});


// -------------------------------------
//   Task: Clean
// -------------------------------------
gulp.task(`clean`, function () {
  // Delete contents of /www but not /www/examples
  return del([
    PATHS.dist.root,
    `${PATHS.site.www}/**`,
    `!${PATHS.site.www}`,
    `!${PATHS.site.www}/examples/`,
    `!${PATHS.site.www}/examples/**`,
  ]);
});


// -------------------------------------
//   Task: Lint CSS
// -------------------------------------
gulp.task(`lint`, [`lint:css`, `lint:site`]);


// -------------------------------------
//   Task: Lint src css
// -------------------------------------
gulp.task(`lint:css`, function() {
  return gulp.src(`${PATHS.src.css}/**/*.css`)
    .pipe(stylelint({
      failAfterError: true,
      reporters: [{
        formatter: `verbose`,
        console: true
      }]
    }))
});

// -------------------------------------
//   Task: Lint site css
// -------------------------------------
gulp.task(`lint:site`, function() {
  return gulp.src(`${PATHS.site.css}/*.css`)
    .pipe(stylelint({
      failAfterError: true,
      reporters: [{
        formatter: `verbose`,
        console: true
      }]
    }))
});


// -------------------------------------
//   Task: SVG Optimization
// -------------------------------------
gulp.task(`svg:optimize`, function() {
  return gulp.src(`${PATHS.src.icons}/svg/*.svg`)
    .pipe(svgmin())
    .pipe(gulp.dest(`${PATHS.src.icons}/svg`));
});


// -------------------------------------
//   Task: SVG building / listing
// -------------------------------------
gulp.task(`svg:store`, function() {
  ICONS_ARR = parseIcons(); // Refresh icons list

  return gulp.src(`${PATHS.src.icons}/svg/*.svg`)
    .pipe(svgstore({ inlineSvg: true }))
    .pipe(rename(`icons.svg`))
    .pipe(gulp.dest(PATHS.src.icons))
    .pipe(gulp.dest(PATHS.dist.root));
});


// -------------------------------------
//   Task: Serve
// -------------------------------------
gulp.task(`serve`, function() {
  browserSync.init({
    codesync: false,
    injectChanges: false,
    open: false,
    server: {
      baseDir: PATHS.site.www
    },
    logLevel: `basic`,
    logPrefix: `Soho-Fnd`
  });

  let files = [
    `${PATHS.src.css}/**/*.css`,
    `${PATHS.src.docs}/*.md`,
    `${PATHS.site.css}/*.css`,
    `${PATHS.site.templates}/**/*`
  ];

  gulp.watch(files, [`build-watch`]);
});


// -------------------------------------
//   Function: parseIcons()
// -------------------------------------
function parseIcons() {
  let iconFiles = glob.sync(`*.svg`, { cwd: `${PATHS.src.icons}/svg` })
  return iconSet = iconFiles.map(file => {
    return file.substring(0, file.lastIndexOf(`.`));
  });
};


// -------------------------------------
//   Function: parseVarAnnotations()
// -------------------------------------
function parseVarAnnotations() {
  let content, blocks, cssVarAnnotations = {};

  // Parse the defaults first
  let defaultVarsObj = parseCss(`${PATHS.src.css}/components/_variables.css`);

  let themes = [
    { name: `themeDark`,         path: `${PATHS.src.css}/themes/_theme-dark.css` },
    { name: `themeHighContrast`, path: `${PATHS.src.css}/themes/_theme-high-contrast.css` }
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
//   Function: parseCss()
// -------------------------------------
function parseCss(cssPath, themeAnnotationsObj = {}) {
  let content,
      blocks;

  content = fs.readFileSync(cssPath, `utf-8`).trim();
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


function isCssVar(str) {
  return str.substr(0, 3) === 'var';
}

function cloneSimpleObj(obj) {
  return JSON.parse(JSON.stringify(obj));
}

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
// Task: Deploy (Lepore only)
// Copies the WWW folder on Lepore`s machine to his dropbox folder for temporary viewing
// -------------------------------------
gulp.task(`deploy`, [`lint`, `build`], function() {
  let gutil = require(`gulp-util`);
  let exec = require(`child_process`).exec;

  let src = `~/HookandLoop/git/soho/soho-foundation/site/www/*`,
      dest = ` ~/Dropbox/Public/soho-foundation`;

  return exec(`cp -R ${src} ${dest}`, function (err, stdout, stderr) {
    gutil.log(`Deployed to https://dl.dropboxusercontent.com/u/21521721/soho-foundation/index.html`);

    console.log(stdout);
    console.log(stderr);
  });
});
// -------------------------------------
