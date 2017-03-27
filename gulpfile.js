// Gulp Plugins
var gulp = require('gulp'),
    concat = require('gulp-concat'),
    del = require('del'),
    fs = require('fs'),
    glob = require('glob'),
    handlebars = require('handlebars'),
    pandoc = require('gulp-pandoc'),
    postcss = require('gulp-postcss'),
    rename = require('gulp-rename'),
    server = require('gulp-server-livereload'),
    svgstore = require('gulp-svgstore'),
    tap = require('gulp-tap');

// PostCSS Plugins
var atImport = require('postcss-import'),
    autoprefixer = require('autoprefixer'),
    commas = require('postcss-commas'),
    cssnano = require('cssnano'),
    customMedia = require('postcss-custom-media'),
    customProperties = require('postcss-custom-properties'),
    lost = require('lost')
    nested = require('postcss-nested');


// Paths
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


// Task: Default
// Does a full build and runs the site
gulp.task('default', ['build', 'webserver']);


// Task: Dev
gulp.task('dev', ['default', 'watch']);


// Task: Build Icons
// Builds icons
gulp.task('build', ['build:css', 'build:docs', 'build:site']);


// Task: Build Docs
gulp.task('build:docs', function() {
  // read the template from page.hbs
  return gulp.src(paths.site.templates + '/page.hbs')
    .pipe(tap(function(templateFile) {
      // templateFile is page.hbs so generate template from templateFile
      var template = handlebars.compile(templateFile.contents.toString());

      // Get the svg icon contents
      var svgHTML = fs.readFileSync(paths.src.root + '/icons/icons.svg', 'utf-8');

      // now read all the pages from the pages directory
      return gulp.src(paths.src.docFiles)
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


// Task: Build CSS
gulp.task('build:css', function () {

  // Note: plugin order matters
  var plugins = [
    atImport,
    commas,
    nested,
    customProperties({ preserve: true }),
    customMedia,
    lost,
    autoprefixer
  ];

  var postcssOptions = {
    map: true
  };

  return gulp.src(paths.src.css + '/soho-foundation.css')
    .pipe(postcss(plugins, postcssOptions))
    .pipe(gulp.dest(paths.dist.css))
    .pipe(postcss([cssnano], postcssOptions))
    .pipe(rename('soho-foundation.min.css'))
    .pipe(gulp.dest(paths.dist.css))
    .pipe(gulp.dest(paths.site.www + '/css'));
});


// Build: Site Static files
gulp.task('build:site', function() {
  var plugins = [
    commas,
    nested,
    customProperties({ preserve: true }),
    autoprefixer,
    cssnano
  ];

  return gulp.src(paths.site.css + '/site.css')
    .pipe(postcss(plugins, { map: true }))
    .pipe(rename('site.min.css'))
    .pipe(gulp.dest(paths.site.www + '/css'));
});


// Task: Clean
gulp.task('clean', function () {
  return del([
    paths.dist.root,
    paths.site.www
  ]);
});


// Task: Optimize SVGs
gulp.task('svg:optimize', function() {
  var svgs = paths.src.icons + '/svg/*.svg';
  gulp.src(svgs)
    .pipe(svgmin())
    .pipe(gulp.dest(svgs));
});


// Task: Create svg file
gulp.task('svg:store', function() {
  return gulp.src(paths.src.icons + '/svg/*.svg')
    .pipe(svgstore({ inlineSvg: true }))
    .pipe(rename('icons.svg'))
    .pipe(gulp.dest(paths.src.icons))
    .pipe(gulp.dest(paths.dist.root));
});


// Task: Watch
gulp.task('watch', function() {
  var styles = [
    paths.src.root + '/css/*.css'
  ];

  var docs = [
    paths.src.root + '/docs/*.md'
  ];

  var site = [
    paths.site.templates + '/*.hbs',
    paths.site.css + '/*.css'
  ];

  gulp.watch(styles, ['build:css']);
  gulp.watch(docs, ['build:docs']);
  gulp.watch(site, ['build:site']);
});


// Task: Webserver
gulp.task('webserver', function() {
  gulp.src(paths.site.www)
    .pipe(server({
      livereload: true,
      defaultFile: 'index.html',
      open: true,
      log: 'debug'
    }));
});
