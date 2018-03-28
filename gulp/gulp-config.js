/* gulp-config.js */
module.exports = {
  project: {
    prefix: 'ids',
    zipName: 'publish',
    idsTokensThemeName: 'theme-default'
  },
  paths: {
    root: './',
    demo: './demo',
    dist: {
      root: './publish',
      docs: './publish/docs',
      demo: './publish/demo',
      idsTokens: './publish/ids-identity'
    },
    src: {
      root:     './src',
      packages: './src/packages',
      mdFiles: [
        './src/*.md',
        './src/packages/*/README.md'
      ],
      idsWeb: './src/packages/ids-css',
      webPackageJson: './src/packages/ids-css/package.json'
    },
    site: {
      root:      './site',
      templates: './site/templates',
      www:       './site/www'
    },
    idsIdentity: {
      root: `${process.cwd()}/node_modules/@infor/ids-identity/dist`,
      tokens: `${process.cwd()}/node_modules/@infor/ids-identity/dist/tokens/web`,
      icons: `${process.cwd()}/node_modules/@infor/ids-identity/dist/icons`,
      font: `${process.cwd()}/node_modules/@infor/ids-identity/dist/font`
    },
    tasks: './gulp/tasks'
  },
  urls: {
    local: 'http://localhost/api/docs/',
    localDebug: 'http://localhost:9002/api/docs/',
    staging: 'https://staging.design.infor.com/api/docs/',
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
