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
// del            : Compile CoffeeScript files
// fs             : Lint your CoffeeScript
// glob           : File pattern matching
// handlebars     : Template parser
// gulp-pandoc    : File converter
// gulp-postcss   : Transform styles with JS
// gulp-rename    : Rename files
// gulp-server    : Serve the website for dev
// gulp-stylelint : Lint the styles
// gulp-svgstore  : Combine svg files
// gulp-tap       : Easily tap into a pipeline
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
    cssAnnotationBlock = require('css-annotation-block'),
    del = require('del'),
    fs = require('fs'),
    glob = require('glob'),
    handlebars = require('handlebars'),
    isColor = require('is-color'),
    pandoc = require('gulp-pandoc'),
    postcss = require('gulp-postcss'),
    rename = require('gulp-rename'),
    server = require('gulp-server-livereload'),
    stylelint = require('gulp-stylelint'),
    svgstore = require('gulp-svgstore'),
    tap = require('gulp-tap');

// -------------------------------------
//   PostCSS Plugins
// -------------------------------------
var atImport = require('postcss-import'),
  commas     = require('postcss-commas'),
  cssnext    = require('postcss-cssnext'),
  cssnano    = require('cssnano'),
  lost       = require('lost');


// -------------------------------------
//   File Paths
// -------------------------------------
var paths = {
  src:  {},
  dist: {},
  site: {}
};

// Source
paths.src.root = 'src';
paths.src.css = paths.src.root + '/css';
paths.src.icons = paths.src.root + '/icons';
paths.src.docs = paths.src.root + '/docs';
paths.src.docFiles  = paths.src.docs + '/*.md';

// Dist
paths.dist.root = 'dist';
paths.dist.css = paths.dist.root + '/css';

// Website
paths.site.root = 'site'
paths.site.css = paths.site.root + '/css';
paths.site.templates = paths.site.root + '/templates';
paths.site.www = paths.site.root + '/www';


// -------------------------------------
//   Task: Default
// -------------------------------------
// Does a full build and runs the site
gulp.task('default', ['build', 'webserver']);



// -------------------------------------
//   Task: Build
// -------------------------------------
gulp.task('build', ['compile:css', 'compile:docs', 'compile:site']);


// -------------------------------------
//   Task: Build Colors
// -------------------------------------
gulp.task('compile:colors', function() {
  var colorArr = getColors();
  var svgHTML = fs.readFileSync(paths.src.root + '/icons/icons.svg', 'utf-8');

  // read the template from page.hbs
  gulp.src(paths.site.templates + '/colors.hbs')
    .pipe(tap(function(colorTemplate) {
      var colorTemplate = handlebars.compile(colorTemplate.contents.toString());
      var colorHtml = colorTemplate({
        colors: colorArr
      });
      colorStream = new Buffer(colorHtml, 'utf-8');

      gulp.src(paths.site.templates + '/page.hbs')
        .pipe(tap(function(pageTemplate) {

          var pageTempate = handlebars.compile(pageTemplate.contents.toString());
          var pageHtml = pageTempate({
            contents: colorStream,
            icons: svgHTML
          });
          pageTemplate.contents = new Buffer(pageHtml, 'utf-8');
        }))
        .pipe(rename('colors.html'))
        .pipe(gulp.dest(paths.site.www));
    }));
    console.log('finish');
});

// -------------------------------------
//   Task: Build CSS
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

  return gulp.src(paths.src.css + '/soho-foundation.css')
    .pipe(postcss(plugins, postcssOptions))
    .pipe(gulp.dest(paths.dist.css))
    .pipe(postcss([
      require('cssnano')({ autoprefixer: false })
    ], postcssOptions))
    .pipe(rename('soho-foundation.min.css'))
    .pipe(gulp.dest(paths.dist.css))
    .pipe(gulp.dest(paths.site.www + '/css'));
});

// -------------------------------------
//   Task: Build Docs
// -------------------------------------
gulp.task('compile:docs', ['compile:colors'], function() {
  // Get the svg icon contents
  var svgHTML = fs.readFileSync(paths.src.root + '/icons/icons.svg', 'utf-8');

  // read the template from page.hbs
  return gulp.src(paths.site.templates + '/page.hbs')
    .pipe(tap(function(templateFile) {
      // templateFile is page.hbs so generate template from templateFile
      var template = handlebars.compile(templateFile.contents.toString());

      // now read all the pages from the pages directory
      gulp.src(paths.src.docFiles)
        // convert from markdown
        .pipe(pandoc({
           from: 'markdown-markdown_in_html_blocks', // http://pandoc.org/MANUAL.html#raw-html
           to: 'html5',
           ext: '.html',
           args: ['--smart']
        }))
        .pipe(tap(function(file) {
          // file is the converted HTML from the markdown
          // set the contents to the contents property on data
          // and add the svg icons too
          var data = {
            contents: file.contents.toString(),
            icons: svgHTML
          };
          // we will pass data to the handlebars template to create the actual HTML to use
          var html = template(data);
          // replace the file contents with the new HTML created from the handlebars template
          //  + data object that contains the HTML made from the markdown conversion
          file.contents = new Buffer(html, 'utf-8');
        }))
        .pipe(gulp.dest(paths.site.www));
    }));
});


// -------------------------------------
//   Task: Build Site
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

  return gulp.src(paths.site.css + '/site.css')
    .pipe(postcss(plugins, { map: true }))
    .pipe(rename('site.min.css'))
    .pipe(gulp.dest(paths.site.www + '/css'));
});


// -------------------------------------
//   Task: Clean
// -------------------------------------
gulp.task('clean', function () {
  return del([
    paths.dist.root,
    paths.site.www
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
  return gulp.src(paths.src.css + '/*.css')
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
  return gulp.src(paths.site.css + '/site.css')
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
  var svgs = paths.src.icons + '/svg/*.svg';
  return gulp.src(svgs)
    .pipe(svgmin())
    .pipe(gulp.dest(svgs));
});


// -------------------------------------
//   Task: SVG building
// -------------------------------------
gulp.task('svg:store', function() {
  return gulp.src(paths.src.icons + '/svg/*.svg')
    .pipe(svgstore({ inlineSvg: true }))
    .pipe(rename('icons.svg'))
    .pipe(gulp.dest(paths.src.icons))
    .pipe(gulp.dest(paths.dist.root));
});


// -------------------------------------
//   Task: Watch
// -------------------------------------
gulp.task('watch', function() {
  var styles = [
    paths.src.root + '/css/*.css',
    paths.src.root + '/css/**/*.css',
    paths.site.css + '/*.css'
  ];

  var docs = [
    paths.src.root + '/docs/*.md',
    paths.site.templates + '/*.hbs'
  ];


  gulp.watch(styles, ['compile:css', 'compile:site']); // Compiles css
  gulp.watch(docs, ['compile:docs']);  // Compiles markdown & site template
});


// -------------------------------------
//   Task: Webserver
// -------------------------------------
gulp.task('webserver', function() {
  gulp.src(paths.site.www)
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
  var cssPath = paths.src.css + '/variables/_colors.css';

  var cssContent = fs.readFileSync(cssPath, 'utf-8').trim();
  var results = cssAnnotationBlock(cssContent);
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
