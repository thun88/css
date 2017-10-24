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
    dist: 'publish',
    zipFile: 'iux.zip'
  },
  urls: {
    staging: 'http://docs-site-staging.us-east-1.elasticbeanstalk.com/api/docs/'
  }
};
