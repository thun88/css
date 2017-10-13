const path = require('path');
const webpack = require('webpack');

const outPath = path.resolve('./build');

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

module.exports = {
  entry: jsFiles,
  plugins: [
    createBannerPlugin()
  ],
  output: {
    path: path.resolve(outPath),
    libraryTarget: 'umd'
  }
}
