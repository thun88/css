/* gulp-config.js */
module.exports = {
  paths: {
    base: {
      root: 'soho-foundation'
    },
    sources: {
      root:      'src',
      docs:      'src/docs',
      css:       'src/css',
      icons:     'src/icons',
      templates: 'site/templates',
      site:      'site',
      siteCss:   'site/css'
    },
    destinations: {
      root: 'dist',
      css:  'dist/css',
      www:  'site/www'
    }
  }
};
