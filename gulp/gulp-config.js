/* gulp-config.js */
module.exports = {
  project: {
    prefix: 'iux',
  },
  paths: {
    root: './',
    demo: './demo',
    dist: './publish',
    src: {
      root:     './src',
      icons:    './src/icons',
      packages: './src/packages',
    },
    site: {
      root:      './site',
      css:       './site/css',
      templates: './site/templates',
      www:       './site/www'
    },
    tasks: './gulp/tasks'
  },
  urls: {
    staging: 'http://docs-site-staging.us-east-1.elasticbeanstalk.com/api/docs/'
  },
  options: {
    marked: {
      gfm: true,
      highlight: function (code, lang, callback) {
        return require('pygmentize-bundled')({ lang: lang, format: 'html' }, code, function (err, result) {
          callback(err, result.toString());
        });
      }
    }
  }
};
