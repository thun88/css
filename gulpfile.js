// Gulp Plugins
var gulp = require('gulp');
var concat = require('gulp-concat');
var server = require('gulp-server-livereload');
var postcss = require('gulp-postcss');
var glob = require('glob');
var markdown = require('gulp-markdown');
var tap = require('gulp-tap');
var Handlebars = require('Handlebars');
var rename = require('gulp-rename');

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
paths.site.theme = paths.site.root + '/theme';



// Task: Default
gulp.task('default', ['build', 'webserver']);

// Task: Dev
gulp.task('dev', ['build', 'webserver', 'watch']);

// Task:
gulp.task('build', ['build:css', 'build:docs']);


// Task: Build Docs
gulp.task('build:docs', function() {
  // read the template from page.hbs
  return gulp.src(paths.src.docs + '/templates/page.hbs')
    .pipe(tap(function(file) {
      // file is page.hbs so generate template from file
      var template = Handlebars.compile(file.contents.toString());

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
          // we will pass data to the Handlebars template to create the actual HTML to use
          var html = template(data);
          // replace the file contents with the new HTML created from the Handlebars template + data object that contains the HTML made from the markdown conversion
          file.contents = new Buffer(html, "utf-8");
        }))
        .pipe(gulp.dest(paths.site.root));
    }));
});

// Task: Build CSS
gulp.task('build:css', function () {
  var atImport = require('postcss-import'),
      autoprefixer = require('autoprefixer'),
      commas = require('postcss-commas'),
      cssnano = require('cssnano'),
      customProperties = require('postcss-custom-properties'),
      nested = require('postcss-nested');

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

  return gulp.src(paths.site.css + '/app.css')
    .pipe(postcss(plugins, postcssOptions))
    .pipe(gulp.dest(paths.dist.css))
    .pipe(postcss([cssnano], postcssOptions))
    .pipe(concat('app.min.css'))
    .pipe(gulp.dest(paths.dist.css));
});

// Task: Watch
gulp.task('watch', function() {
  var urls = [
    paths.src.root + '/**/*'
  ];
  gulp.watch(urls, ['build']);
});

// Task: Webserver
gulp.task('webserver', function() {
  gulp.src(paths.site.root)
    .pipe(server({
      livereload: true,
      defaultFile: 'index.html',
      open: true,
      log: 'debug'
    }));
});






