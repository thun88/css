# Infor Design System CSS

Infor Design System is a set of use-case driven design practices, development tools, and support documentation to create a cohesive user experience across all Infor CloudSuite applications.

Lightweight, modular, extensible, this CSS library allows you to easily maintain the identity of the Infor Design System, while building or using your own functional web components.

For more information about IDS CSS and the Infor Design System, see our [getting started guide for developers](https://design.infor.com/about/getting-started/developers).

## Getting Started

The easiest way to get the Infor Design System CSS library in your project is through `npm`.

```sh
npm install --save-dev ids-css
```

This will download the latest version of all of the assets and install in `node_modules/@infor/ids-css`. Include your desired file in the `<head>` of your application or using your build mechanism, like webpack.

1. Link to or include either the regular or minified files into your project.

```
node_modules/@infor/ids-css/dist/ids-reset.min.css
node_modules/@infor/ids-css/dist/ids-reset.min.css.map
node_modules/@infor/ids-css/dist/ids-css.min.css
node_modules/@infor/ids-css/dist/ids-css.min.css.map
```

2. Insert the `ids-icons.svg` at the top of your `<body>` and wrap them in the included `visually-hidden` class.
```
<div class="visually-hidden">
  <!-- node_modules/@infor/ids-css/dist/ids-icons.svg -->
</div>
```

We recommend you use the included `ids-reset.css` stylesheet, but you do not have to.
