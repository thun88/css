/* gulp-config.js */
module.exports = {
  project: {
    prefix: 'iux',
    zipName: 'publish'
  },
  paths: {
    root: './',
    demo: './demo',
    dist: {
      root: './publish',
      docs: './publish/docs',
      demo: './publish/demo'
    },
    src: {
      root:     './src',
      packages: './src/packages',
      icons:    './src/packages/iux-icon'
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
    local: 'http://localhost/api/docs/',
    localDebug: 'http://localhost:9002/api/docs/',
    pool: 'http://usalvlhlpool1.infor.com/docs/api/docs/'
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
