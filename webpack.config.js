'use strict';

const path = require('path');
const glob = require('glob');
const webpack = require('webpack');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin')

const MinifyPlugin = require("babel-minify-webpack-plugin");


const OUT_PATH = path.resolve('./build');


const jsFiles = {
  select: path.resolve('./src/packages/iux-select/index.js'),
  tab: path.resolve('./src/packages/iux-tab/index.js')
}

const banner = [
  '/*!',
  ' Infor UX Components for webapps',
  ` Copyright (c) ${new Date().getFullYear()} Infor Inc.`,
  ' License: Unlicensed',
  '*/',
].join('\n');

const createBannerPlugin = () => new webpack.BannerPlugin({
  banner: banner,
  raw: true,
  entryOnly: true,
});


module.exports = [
  // Javascripts
  {
    entry: jsFiles,
    plugins: [
      createBannerPlugin()
    ],
    output: {
      path: OUT_PATH,
      filename: 'iux-[name].js',
      library: ['iux', '[name]'],
      libraryTarget: 'umd'
    }
  },
  // Javascripts - minify
  {
    entry: jsFiles,
    plugins: [
      new MinifyPlugin(),
      createBannerPlugin()
    ],
    output: {
      path: OUT_PATH,
      filename: 'iux-[name].min.js',
      library: ['iux', '[name].min'],
      libraryTarget: 'umd'
    }
  }
]
