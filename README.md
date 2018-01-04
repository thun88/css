# [Infor UX](#)

Infor UX is a sleek, intuitive, and powerful front-end framework for faster and easier web development.

## Table of contents
- [Dev Quick start](#dev-quick-start)
- [Gulp Tasks](#other-useful-gulp-tasks)
- [Unit Tests](#unit-tests)
- [SVG Icons](#edit-icons)
- [Site Directory](#site-directory)

## Dev Quick start
1. Pull the repo
1. `cd` into the repo
1. `npm install -g pandoc-bin gulp-cli && npm install`
1. `gulp dev` to build and serve

## Basic Gulp Tasks

- `$ gulp` - Clean and Build the site and packages
- `$ gulp dev` - Clean, build (site & packages), and start the server
- `$ gulp publish` - Build the markdown docs into json, zip it, then post to the server
    - `gulp publish --site=[local|localDebug|pool]` = (Optional) The default is "local"
- `$ gulp lint` Lints the **src** and **site** css raw files
- `$ gulp clean` - Remove all built files

> The website is served at `http://localhost:3000/`
>
> Demos are at `http://localhost:3000/ids-{package}/{package}`
> (it follows the folder pattern under `demo/`)

## Unit Tests
You can run unit tests by doing `npm test` and they served out of the `spec` directory.

## SVG Icons

To add an icon start with these steps, then proceed to building (below):
1. Add the .svg file to `src/icons/svg` folder
1. `$ gulp svg:optimize`

For building the icons
1. `$ gulp svg:store`
2. `$ gulp`

## Site Directory

- `src` The raw files for components and icons.
- `src/packages` The individual components (while compiled each will have it's own `dist/`)
- `site/www` The generated files for the served website.
- `site/css` The CSS for the site only
- `site/templates` The templates for generating the site html files
- `site/www/dist` Minified stylesheets used for the site.
- `demo` Demo of each package.
- `gulp` Contains the gulp tasks
- `spec` The unit config/tests
- `publish` The directory the deploy/publish is done from
