// Gulp Plugins
var gulp = require('gulp');
var concat = require('gulp-concat');
var server = require('gulp-server-livereload');
var postcss = require('gulp-postcss');
var glob = require('glob');
var markdown = require('gulp-markdown');

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
gulp.task('build:docs', function () {
  return glob(paths.src.docFiles, function (err, files) {
    files.forEach(function (demoName, i) {
      return gulp.src(demoName)
      .pipe(markdown())
      .pipe(gulp.dest(paths.site.root));
    });
  });
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
