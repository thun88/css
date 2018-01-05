const path = require('path');
const webpack = require('webpack');
const BabelPlugin = require("babel-webpack-plugin");

const outPath = path.resolve('./build');

const banner = [
  '/*!',
  ' Infor Design System Components for webapps',
  ` Copyright (c) ${new Date().getFullYear()} Infor Inc.`,
  ' License: Unlicensed',
  '*/',
].join('\n');

const createBannerPlugin = () => new webpack.BannerPlugin({
  banner: banner,
  raw: true,
  entryOnly: true,
});

module.exports = {
  plugins: [
    createBannerPlugin(),
    new BabelPlugin({
      test: /\.js$/,
      presets: ['es2015'],
      sourceMaps: false,
      compact: false
    })
  ],
  // devtool: 'source-map',
  output: {
    path: path.resolve(outPath),
    library: 'ids',
    libraryTarget: 'umd'
  }
}
