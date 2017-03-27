# [Soho Foundation](https://github.com/hookandloop/soho-foundation)

Foundation is a sleek, intuitive, and powerful front-end framework for faster and easier web development.

## Table of contents
- [Dev Quick start](#dev-quick-start)
- [Gulp Tasks](#other-useful-gulp-tasks)
- [SVG Icons](#edit-icons)
- [Lint Styles](#lint-styles)

## Dev Quick start
1. Pull the repo
1. "cd" into the repo
1. `$ npm install`
1. `$ gulp`

## Other Useful Gulp Tasks

- `$ gulp` - Build the site and run the webserver
- `$ gulp build` - Build the files without starting the webserver
- `$ gulp dev` - Build the site, run the webserver, and start a watch for development
- `$ gulp clean` - Remove all generated/static files (`dist` & `site/www`)

## SVG Icons

To add an icon start with these steps, then proceed to building (below):
1. Add the .svg file to `src/icons/svg` folder
1. `$ gulp svg:optimize`

For building the icons
1. `$ gulp svg:store`
2. `$ gulp`

## Lint Styles

- `$ gulp lint` Lints the source and site css raw files
