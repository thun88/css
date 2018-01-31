/* gulp-config.js */
module.exports = {
  project: {
    prefix: 'ids',
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
      mdFiles: [
        './src/*.md',
        './src/packages/*/README.md'
      ]
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
    staging: 'http://staging.design.infor.com/docs/api/docs/'
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
