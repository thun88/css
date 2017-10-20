const path = require('path');
const webpack = require('webpack');

const outPath = path.resolve('./build');

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
  plugins: [
    createBannerPlugin()
  ],
  // devtool: 'source-map',
  output: {
    path: path.resolve(outPath),
    library: 'IUX',
    libraryTarget: 'umd'
  }
}
