# Infor Design System CSS

Infor Design System is a set of use-case driven design practices, development tools, and support documentation to create a cohesive user experience across all Infor CloudSuite applications.

Lightweight, modular, extensible, this CSS library allows you to easily maintain the identity of the Infor Design System, while building or using your own functional web components.

For more information about IDS CSS and the Infor Design System, see our [getting started guide for developers](https://design.infor.com/about/getting-started/developers).

## Getting Started

The easiest way to get the Infor Design System CSS library in your project is through `npm`.

```sh
npm install --save-dev ids-css
```

This will download the latest version of all of the assets and install in `node_modules`. Include your desired file in the `<head>` of your application or using your build mechanism, like webpack.

## Dev Quick start

1. `git clone` the repo
1. `cd` into the repo
1. `npm install -g gulp-cli && npm install`
1. `gulp dev` to build and serve

## Basic Gulp Tasks

- `$ gulp` - Clean and Build the site and packages
- `$ gulp dev` - Clean, build (site & packages), and start the server
- `$ gulp publish` - Build the markdown docs into json, zip it, then post to the server
    - `gulp publish --site=[local|localDebug|staging|prod]` = (Optional) The default is "local". To publish to `staging` or `prod`, you'll need an API key
- `$ gulp lint` Lints the **src** and **site** css raw files
- `$ gulp clean` - Remove all built files

> The website is served at `http://localhost:3000/`
>
> Demos are at `http://localhost:3000/ids-{package}/{package}`
> (it follows the folder pattern under `demo/`)

## Unit Tests

You can run unit tests by doing `npm test` and they served out of the `spec` directory.

## Site Directory

- `src` The raw files for components and icons.
- `src/packages` The individual components (while compiled each will have it's own `dist/`)
- `site/www` The generated files for the local docs website
- `site/css` The CSS for the local docs site only
- `site/templates` The templates for generating the site html files
- `site/www/dist` Minified stylesheets used for the site.
- `demo` Demo of each package.
- `gulp` Contains the gulp tasks
- `spec` The unit config/tests
- `publish` The directory the deploy/publish is done from
