const path = require('path');
const webpack = require('webpack');
const BabelPlugin = require("babel-webpack-plugin");

module.exports = {
  devtool: 'source-map',
  plugins: [
    new BabelPlugin({
      test: /\.js$/,
      presets: ['es2015'],
      sourceMaps: false,
      compact: false
    })
  ]
}