# Infor Design System CSS

Infor Design System is a set of use-case driven design practices, development tools, and support documentation to create a cohesive user experience across all Infor CloudSuite applications.

Lightweight, modular, extensible, this CSS library allows you to easily maintain the identity of the Infor Design System, while building or using your own functional web components.

For more information about IDS CSS and the Infor Design System, see our [getting started guide for developers](https://design.infor.com/about/getting-started/developers).

## Getting Started

The easiest way to get the Infor Design System CSS library in your project is through `npm`.

```sh
npm install --save-dev ids-css
```

This will download the latest version of all of the assets and install in `node_modules/ids-css`. Include your desired file in the `<head>` of your application or using your build mechanism, like webpack.

## Dev Quick start

1. `git clone` the repo
1. `cd` into the repo
1. Switch to the branch you want to branch from
    - this will typically be `master`
1. `npm install`
1. `npm start` to build and serve on http://localhost:3000

## NPM Tasks
- `npm start` - Calls `gulp dev` but did this for consistency across repos
- `npm run build` - Clean and Build the site and packages
- `npm test` - Lints the **src** and **site** css raw files and markdown files
- `npm run publish{:env}` - Build the markdown docs into json, zip it, then post to the design.infor.com server for the specified environment
- `npm run release` - Run the [release process](https://github.com/webpro/release-it) (it defaults to "patch" release)

> The website is served at `http://localhost:3000/`
>
> Demos are at `http://localhost:3000/ids-{package}/{package}`
> (it follows the folder pattern under `demo/`)

## Testing/Linting

You can run tests by doing `npm test`.

## Site Directory

- `src/` The raw files for components and icons.
  - `packages/` The individual components (while compiled each will have it's own `dist/`)
- `site/`
  - `www/` The generated files for the local docs website
  - `css/` The CSS for the local docs site only
  - `templates/` The templates for generating the site html files
  - `www/dist/` Minified stylesheets used for the site.
- `demo` Demo of each package.
- `gulp` Contains the gulp tasks
- `documentation` The tmp directory the website documentation deploy/publish is done from
- `dist` The tmp directory npm package publishes from
