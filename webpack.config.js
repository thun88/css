'use strict';

const path = require('path');
const glob = require('glob');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const OUT_PATH = path.resolve('./build');

const cssFiles = {
  'adaptive': path.resolve('./src/packages/iux-adaptive/adaptive.css'),
  'base': path.resolve('./src/packages/iux-base/base.css'),
  'button': path.resolve('./src/packages/iux-button/button.css'),
  'form': path.resolve('./src/packages/iux-form/form.css'),
  'grid': path.resolve('./src/packages/iux-grid/grid.css'),
  // 'icon': path.resolve('./src/packages/iux-icon/icon.css'),
  'select': path.resolve('./src/packages/iux-select/select.css'),
  'tab': path.resolve('./src/packages/iux-tab/tab.css'),
  'theme': path.resolve('./src/packages/iux-theme/theme.css'),
  'theme-dark': path.resolve('./src/packages/iux-theme-dark/theme-dark.css'),
  'theme-high-contrast': path.resolve('./src/packages/iux-theme-high-contrast/theme-high-contrast.css'),
  'typography': path.resolve('./src/packages/iux-typography/typography.css')
}

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
  }
]
