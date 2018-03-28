---
title: Infor Design System Web Components
description: Infor Design System components for the web
---

## Infor Design System Web Components

This package contains the master library for Infor Design System Web Components. It simply wraps all of its sibling packages up into one all-inclusive library for convenience.

Note: This is currently an alpha testing package and is unsupported outside of internal Hook & Loop systems, but a sign of things to come :)

## Installation
```
npm install @infor/ids-css
```

## Usage

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

If you use a compiler and want to take advantage of the IDS custom properties, they are included at the beginning of the unminified version. Note that custom properties aren't fully adopted by all browsers (cough IE) so its best to have them replace with their value in your compiling process. We use PostCSS CssNext to do so.
