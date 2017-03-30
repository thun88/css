// *************************************
//
//   Gulpfile
//
// *************************************
//
// Available tasks:
//   `gulp`
//   `gulp build`
//      `gulp compile:css`
//      `gulp compile:docs`
//      `gulp compile:site`
//   `gulp clean`
//   `gulp dev`
//   `gulp lint`
//      `gulp lint:css`
//      `gulp lint:site`
//   `gulp svg:optimize`
//   `gulp svg:store`
//   `gulp watch`
//   `gulp webserver`
//
// *************************************


// -------------------------------------
//   Modules
// -------------------------------------
//
// gulp           : The streaming build system
// gulp-concat    : Concatenate files
// annotateBlock  : Parse css comments
// del            : Compile CoffeeScript files
// fs             : Lint your CoffeeScript
// glob           : File pattern matching
// hb             : Template parser
// is-color       : Validate hex colors
// gulp-pandoc    : File converter
// gulp-postcss   : Transform styles with JS
// gulp-rename    : Rename files
// gulp-server    : Serve the website for dev
// gulp-stylelint : Lint the styles
// gulp-svgstore  : Combine svg files
// gulp-tap       : Easily tap into a pipeline
// gulp-wrap      : Wrap stream contents to template
//
// postcss-import  : Include css files with "@"
// postcss-commas  : Allow lists of properties per value
// postcss-cssnext : Collection of future proof plugins
// cssnano         : CSS minify
// lost            : Grid system
//
// -------------------------------------

var gulp = require('gulp');
var concat = require('gulp-concat'),
    annotateBlock = require('css-annotation-block'),
    del = require('del'),
    fs = require('fs'),
    glob = require('glob'),
    hb = require('gulp-hb'),
    isColor = require('is-color'),
    pandoc = require('gulp-pandoc'),
    postcss = require('gulp-postcss'),
    rename = require('gulp-rename'),
    server = require('gulp-server-livereload'),
    stylelint = require('gulp-stylelint'),
    svgstore = require('gulp-svgstore'),
    tap = require('gulp-tap'),
    wrap = require('gulp-wrap');

// -------------------------------------
//   PostCSS Plugins
// -------------------------------------
var atImport = require('postcss-import'),
  commas     = require('postcss-commas'),
  cssnext    = require('postcss-cssnext'),
  cssnano    = require('cssnano'),
  lost       = require('lost');


// -------------------------------------
//   Globals
// -------------------------------------
var PATHS = {
  src:  {},
  dist: {},
  site: {}
};

// Source
PATHS.src.root = 'src';
PATHS.src.css = PATHS.src.root + '/css';
PATHS.src.icons = PATHS.src.root + '/icons';
PATHS.src.docs = PATHS.src.root + '/docs';
PATHS.src.docFiles  = PATHS.src.docs + '/*.md';

// Dist
PATHS.dist.root = 'dist';
PATHS.dist.css = PATHS.dist.root + '/css';

// Website
PATHS.site.root = 'site'
PATHS.site.css = PATHS.site.root + '/css';
PATHS.site.templates = PATHS.site.root + '/templates';
PATHS.site.www = PATHS.site.root + '/www';


var COLORS_ARR = getColors();
var ICONS_ARR = getIcons();
var SVG_HTML = fs.readFileSync(PATHS.src.root + '/icons/icons.svg', 'utf-8');


// -------------------------------------
//   Task: Default
// -------------------------------------
// Does a full build and runs the site
gulp.task('default', ['build', 'webserver']);



// -------------------------------------
//   Task: Build
// -------------------------------------
gulp.task('build', ['compile:colors', 'compile:css', 'compile:docs', 'compile:site']);



// -------------------------------------
//   Task: Compile Colors List
// -------------------------------------
gulp.task('compile:colors', function () {
  COLORS_ARR = getColors();
});


// -------------------------------------
//   Task: Compile CSS
// -------------------------------------
gulp.task('compile:css', function () {

  // Note: plugin order matters
  var plugins = [
    atImport,
    commas,
    lost,
    cssnext
  ];

  var postcssOptions = {
    map: true
  };

  return gulp.src(PATHS.src.css + '/soho-foundation.css')
    .pipe(postcss(plugins, postcssOptions))
    .pipe(gulp.dest(PATHS.dist.css))
    .pipe(postcss([
      require('cssnano')({ autoprefixer: false })
    ], postcssOptions))
    .pipe(rename({ extname: '.min.css' }))
    .pipe(gulp.dest(PATHS.dist.css))
    .pipe(gulp.dest(PATHS.site.www + '/css'));
});

// -------------------------------------
//   Task: Compile Docs
// -------------------------------------
gulp.task('compile:docs', function() {
  // var svgHTML = fs.readFileSync(PATHS.src.root + '/icons/icons.svg', 'utf-8');

  // var colorArr = getColors();
  // var iconArr = getIcons();

  var hbStream = hb()
    .partials(PATHS.site.templates + '/*.hbs')
    .data({
      colors: COLORS_ARR,
      icons: ICONS_ARR
    });

  return gulp.src(PATHS.src.docs + '/*.md')
    .pipe(hbStream)
    .pipe(pandoc({
       from: 'markdown-markdown_in_html_blocks', // http://pandoc.org/MANUAL.html#raw-html
       to: 'html5',
       ext: '.html',
       args: ['--smart']
    }))
    .pipe(wrap({
        src: PATHS.site.templates + '/page.hbs'
      }, {
        icons: SVG_HTML
      }, {
        engine: 'handlebars'
      }
    ))
    .pipe(gulp.dest(PATHS.site.www));
});


// -------------------------------------
//   Task: Compile Site
// -------------------------------------
gulp.task('compile:site', function () {

  // Note: plugin order matters
  var plugins = [
    atImport,
    commas,
    lost,
    cssnext,
    cssnano({ autoprefixer: false })
  ];

  return gulp.src(PATHS.site.css + '/site.css')
    .pipe(postcss(plugins, { map: true }))
    .pipe(rename({ extname: '.min.css' }))
    .pipe(gulp.dest(PATHS.site.www + '/css'));
});


// -------------------------------------
//   Task: Clean
// -------------------------------------
gulp.task('clean', function () {
  return del([
    PATHS.dist.root,
    PATHS.site.www
  ]);
});


// -------------------------------------
//   Task: Dev
// -------------------------------------
gulp.task('dev', ['default', 'watch']);


// -------------------------------------
//   Task: Lint CSS
// -------------------------------------
gulp.task('lint', ['lint:css', 'lint:site']);


// -------------------------------------
//   Task: Lint src css
// -------------------------------------
gulp.task('lint:css', function() {
  return gulp.src(PATHS.src.css + '/*.css')
    .pipe(stylelint({
      failAfterError: true,
      reporters: [
        { formatter: 'verbose', console: true },
      ]
    }))
});

// -------------------------------------
//   Task: Lint site css
// -------------------------------------
gulp.task('lint:site', function() {
  return gulp.src(PATHS.site.css + '/site.css')
    .pipe(stylelint({
      failAfterError: true,
      reporters: [
        { formatter: 'verbose', console: true },
      ]
    }))
});


// -------------------------------------
//   Task: SVG Optimization
// -------------------------------------
gulp.task('svg:optimize', function() {
  var svgs = PATHS.src.icons + '/svg/*.svg';
  return gulp.src(svgs)
    .pipe(svgmin())
    .pipe(gulp.dest(svgs));
});


// -------------------------------------
//   Task: SVG building / listing
// -------------------------------------
gulp.task('svg:store', function() {
  ICONS_ARR = getIcons(); // Refresh icons list

  return gulp.src(PATHS.src.icons + '/svg/*.svg')
    .pipe(svgstore({ inlineSvg: true }))
    .pipe(rename('icons.svg'))
    .pipe(gulp.dest(PATHS.src.icons))
    .pipe(gulp.dest(PATHS.dist.root));
});


// -------------------------------------
//   Task: Watch
// -------------------------------------
gulp.task('watch', function() {
  var colors = [
    PATHS.src.css + '/**/_colors.css'
  ]

  var styles = [
    PATHS.src.css + '/**/*.css',
    '!' + PATHS.src.css + '/**/_colors.css',
    PATHS.site.css + '/*.css'
  ];

  var docs = [
    PATHS.src.root + '/docs/*.md',
    PATHS.site.templates + '/*.hbs'
  ];

  // Refresh color list and compile css
  gulp.watch(colors, ['compile:colors', 'compile:css', 'compile:site']);

  // Compiles all css
  gulp.watch(styles, ['compile:css', 'compile:site']);

  // Compiles markdown & site template
  gulp.watch(docs, ['compile:docs']);
});


// -------------------------------------
//   Task: Webserver
// -------------------------------------
gulp.task('webserver', function() {
  gulp.src(PATHS.site.www)
    .pipe(server({
      livereload: true,
      defaultFile: 'index.html',
      open: true,
      log: 'debug'
    }));
});


// -------------------------------------
//   Function: getColors()
// -------------------------------------
function getColors() {
  var cssPath = PATHS.src.css + '/variables/_colors.css';

  var cssContent = fs.readFileSync(cssPath, 'utf-8').trim();
  var results = annotateBlock(cssContent);
  var colorRoot = [];

  results.forEach(function (result) {
    if (result.name === 'color') {
      result.nodes.forEach(function (node) {
        colorRoot.push(node);
      });
    }
  });

  var colorPalette = [];
  colorRoot.forEach(function (color) {
    color.walkDecls(function (decl) {
    if (isColor(decl.value)) {
        colorPalette.push({
          name: decl.prop.replace(/^--/, ''),
          color: decl.value
        });
      }
    });
  });
  return colorPalette;
};


// -------------------------------------
//   Function: getIcons()
// -------------------------------------
function getIcons() {
  var iconPath = PATHS.src.icons + "/svg/"
  var iconFiles = fs.readdirSync(iconPath);
  var iconSet = [];
  iconFiles.forEach(file => {
    // Remove the file extension to use in HTML
    iconSet.push({ name: file.substring(0, file.lastIndexOf(".")) });
  });
  return iconSet;
};



// -------------------------------------
// Task: Deploy (Lepore only)
// Copies the WWW folder on Lepore's machine to his dropbox folder for temporary viewing
// -------------------------------------
gulp.task('deploy', ['lint'], function() {
  var exec = require('child_process').exec;

  var src = '~/HookandLoop/git/soho/soho-foundation/site/www/*',
      dest = ' ~/Dropbox/Public/soho-foundation';

  return exec('cp -R ' + src + ' ' + dest, function (err, stdout, stderr) {
    console.log(stdout);
    console.log(stderr);
  });
});
// -------------------------------------
