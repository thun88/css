# Release CSS

## Dev Release

To do a dev release, publish a dated semever to npm.

1. Make sure you are on `master` and its clean
1. Change the `package.json` version to append the date, i.e. `X.Y.Z-dev.YYYYMMDD`
1. Save the `package.json` file (**DO NOT** commit it)
1. `npm publish --tag=dev`
1. Undo the version change/reset your branch

## Production Release (tagged)

### Documentation

Verify the [changelog](docs/changelog) is up-to-date or the contents for the github release description

### Make sure you have [credential] setup in .gitconfig  (Windows Users Only)

Details on [infor-design/enterprise/docs/PUBLISH.md](https://github.com/infor-design/enterprise/blob/master/docs/PUBLISH.md#make-sure-you-have-credential-setup-in-gitconfig--windows-users-only)

### Make sure you have a GITHUB_ACCESS_TOKEN configured

Details on [infor-design/enterprise/docs/PUBLISH.md](https://github.com/infor-design/enterprise/blob/master/docs/PUBLISH.md#make-sure-you-have-a-github_access_token-configured)

### Release

1. Make sure you have release-it installed (`npm install release-it -g`)
1. Checkout the release branch (`X.Y.Z`) and `git pull --tags`
1. Run a release cmd:
    - `npm run release:beta` - beta
    - `npm run release:rc` - release candidate normally the final testing branch before the release
    - `npm run release:final` - the release itself
    - **Always** verify the release version when the script asks

For a final release, finish with:

1. Publish/upload the documentation to design.infor.com:
    - `export DOCS_API_KEY={API KEY}`
    - `npm run publish-docs:prod`
1. Merge the release branch back into `master` (but do not delete the release branch)
1. PR the master version to the proper "dev" version
    - i.e. if we just released `4.7.0`, master will now be `4.8.0-dev`
1. "Protect" the release branch with github settings
