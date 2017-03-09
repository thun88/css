// Gulp Plugins
var gulp = require('gulp');
var concat = require('gulp-concat');
var del = require('del');
var glob = require('glob');
var handlebars = require('handlebars');
var markdown = require('gulp-markdown');
var postcss = require('gulp-postcss');
var rename = require('gulp-rename');
var server = require('gulp-server-livereload');
var tap = require('gulp-tap');

// PostCSS Plugins
var atImport = require('postcss-import'),
    autoprefixer = require('autoprefixer'),
    commas = require('postcss-commas'),
    cssnano = require('cssnano'),
    customProperties = require('postcss-custom-properties'),
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
paths.src.docs = paths.src.root + '/docs';
paths.src.docFiles  = paths.src.docs + '/*.md';

// Dist
paths.dist.root = "dist";
paths.dist.css = paths.dist.root + "/css";

// Website
paths.site.root = 'site'
paths.site.css = paths.site.root + "/css";
paths.site.templates = paths.site.root + "/templates";
paths.site.www = paths.site.root + "/www";


// Task: Default
gulp.task('default', ['build', 'webserver']);

// Task: Dev
gulp.task('dev', ['build', 'webserver', 'watch']);

// Task:
gulp.task('build', ['build:css', 'build:docs', 'build:site']);


// Task: Build Docs
gulp.task('build:docs', function() {
  // read the template from page.hbs
  return gulp.src(paths.site.templates + '/page.hbs')
    .pipe(tap(function(file) {
      // file is page.hbs so generate template from file
      var template = handlebars.compile(file.contents.toString());

      // now read all the pages from the pages directory
      return gulp.src(paths.src.docFiles)
        // convert from markdown
        .pipe(markdown())
        .pipe(tap(function(file) {
          // file is the converted HTML from the markdown
          // set the contents to the contents property on data
          var data = {
            contents: file.contents.toString()
          };
          // we will pass data to the handlebars template to create the actual HTML to use
          var html = template(data);
          // replace the file contents with the new HTML created from the handlebars template
          //  + data object that contains the HTML made from the markdown conversion
          file.contents = new Buffer(html, "utf-8");
        }))
        .pipe(gulp.dest(paths.site.www));
    }));
});


// Task: Build CSS
gulp.task('build:css', function () {
  var plugins = [
    atImport,
    commas,
    nested,
    customProperties({ preserve: true }),
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


// Task: Watch
gulp.task('watch', function() {
  var urls = [
    paths.src.root + '/**/*',
    paths.site.templates + '/*.hbs',
    paths.site.www + '/css/*.css'

  ];
  gulp.watch(urls, ['build']);
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
