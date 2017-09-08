/* gulp-config.js */
module.exports = {
  paths: {
    base: {
      root: 'soho-foundation'
    },
    sources: {
      root:      'src',
      docs:      'src/docs',
      packages:  'src/packages',
      icons:     'src/icons',
      templates: 'site/templates',
      site:      'site',
      siteCss:   'site/css'
    },
    destinations: {
      www:  'site/www',
      css:  'site/www/css',
      dist: 'site/www/dist'
    }
  }
};
