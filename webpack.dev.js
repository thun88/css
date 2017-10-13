const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  output: {
    filename: 'iux-[name].js',
    library: ['iux', '[name]'],
  }
});
