# [Soho Foundation](#)

Foundation is a sleek, intuitive, and powerful front-end framework for faster and easier web development.

## Table of contents
- [Dev Quick start](#dev-quick-start)
- [Gulp Tasks](#other-useful-gulp-tasks)
- [SVG Icons](#edit-icons)
- [Lint Styles](#lint-styles)
- [Site Directory](#site-directory)

## Dev Quick start
1. Pull the repo
1. `cd` into the repo
1. `$ npm install`
1. `$ npm start`

## Basic Gulp Tasks

- `$ gulp` - Build the site, run the webserver, start a watch
- `$ gulp serve` - Run the webserver and watch
- `$ gulp build` - Build the files
- `$ gulp clean` - Remove all generated/static files
- `$ gulp test` - Build, then run the accessibility tests on the built html files (reports are in `log/accessibility`)

> The website is served at `http://localhost:3000/`

## SVG Icons

To add an icon start with these steps, then proceed to building (below):
1. Add the .svg file to `src/icons/svg` folder
1. `$ gulp svg:optimize`

For building the icons
1. `$ gulp svg:store`
2. `$ gulp`

## Lint Styles

- `$ gulp lint` Lints the **source** and **site** css raw files

## Site Directory

- `src` The raw files for foundation's css, documentation, and icons.
- `site/www` The generated files for the served website.
- `site/www/dist` The distributed/downloadable versions of the stylesheets.
- `site/css` The CSS for the site only
- `site/templates` The templates for generating the site html
- `site/examples` [Temp] Currently holds a few static, stand-alone examples.
