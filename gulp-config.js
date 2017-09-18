/* gulp-config.js */
module.exports = {
  paths: {
    base: {
      root: 'soho-foundation'
    },
    sources: {
      root:      'src',
      packages:  'src/packages',
      icons:     'src/icons',
      templates: 'site/templates',
      site:      'site',
      siteCss:   'site/css'
    },
    destinations: {
      site:  'site/www',
      demo: 'demo'
    }
  }
};
