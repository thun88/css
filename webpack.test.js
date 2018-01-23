const path = require('path');
const webpack = require('webpack');
const BabelPlugin = require("babel-webpack-plugin");

module.exports = {
  devtool: 'inline-source-map', // in-line source maps instead of the default
  plugins: [
    new BabelPlugin({
      test: /\.js$/,
      presets: [
        ["env", { "modules": false }]
      ],
      sourceMaps: true,
      compact: false
    })
  ]
}
