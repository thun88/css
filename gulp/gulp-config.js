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
      ],
      idsWeb: './src/packages/ids-web',
      webPackageJson: './src/packages/ids-web/package.json'
    },
    site: {
      root:      './site',
      templates: './site/templates',
      www:       './site/www'
    },
    tokens: {
      theme: `${process.cwd()}/node_modules/@infor/ids-tokens/platforms/web/theme-default.custom-properties.css`,
      themeJson: `${process.cwd()}/node_modules/@infor/ids-tokens/platforms/web/theme-default.raw.json`
    },
    tasks: './gulp/tasks'
  },
  urls: {
    local: 'http://localhost/api/docs/',
    localDebug: 'http://localhost:9002/api/docs/',
    staging: 'http://staging.design.infor.com/api/docs/',
    prod: 'https://design.infor.com/api/docs/'
  },
  options: {
    marked: {
      gfm: true,
      highlight: function (code, lang, callback) {
        return require('pygmentize-bundled')({ lang: lang, format: 'html' }, code, function (err, result) {
          callback(err, result.toString());
        });
      }
    },
    stylelint: {
      failAfterError: true,
      reporters: [{
        formatter: 'verbose',
        console: true
      }]
    }
  }
};
