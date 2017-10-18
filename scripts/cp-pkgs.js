/**
 * @fileoverview Copies built assets from our build directory to each of their respective package's
 * dist/ folder.
 */

const path = require('path');
const fs = require('fs');
const cpFile = require('cp-file');
const {sync: globSync} = require('glob');

const PKG_RE = /(?:infor\-ux)|(?:iux\-[a-zA-Z\-]+(min)?)/;

const isValidCwd = (
  path.basename(process.cwd()) === 'infor-ux' &&
  fs.existsSync('build')
);

if (!isValidCwd) {
  console.error(
    'Invalid CWD. Please ensure you are running this from the root of the repo, ' +
    'and that you have run `npm run dist`'
  );
  process.exit(0);
}

function isMinified(asset) {
  return (asset.indexOf('.min.') > -1)
}

function getAssetEntry(asset) {
  const [entryName] = path.parse(asset).name.match(PKG_RE);
  return [entryName][0];
}

function cpAsset(asset, dest) {
  const assetPkg = path.join(dest, getAssetEntry(asset));
  if (!fs.existsSync(assetPkg)) {
    Promise.reject(new Error(`Non-existent asset package path ${assetPkg} for ${asset}`));
  }
  const destDir = path.join(assetPkg, 'dist', path.basename(asset));
  return cpFile(asset, destDir).then(() => console.log(`cp ${asset} -> ${destDir}`));
}

Promise
  .all(globSync('build/*.{css,js}').map((asset) => {
    console.log(asset);

    if (isMinified(asset)) {
      return cpAsset(asset, 'src/packages');
    }
    return cpAsset(asset, 'src/packages') && cpAsset(asset, 'demo');

  }))
  .catch((err) => {
    console.error(`Error encountered copying assets: ${err}`);
    process.exit(1);
  });
