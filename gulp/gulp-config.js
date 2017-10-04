/* gulp-config.js */
module.exports = {
  root: './',
  tasks: './gulp/tasks',
  src: {
    packages:  'src/packages',
    icons:     'src/icons',
    templates: 'site/templates',
    site:      'site',
  },
  dest: {
    site:  'site/www',
    demo: 'demo',
    dist: 'dist',
    zipFile: 'iux-publish.zip'
  }
};
