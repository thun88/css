---
title: CSS for Infor Design System
---

!["IDS CSS Library Logo"](https://ids-com.s3.amazonaws.com/images/css-lib.original.png#logo-float-right)

This CSS library is a lightweight, modular, extensible, way to easily maintain the identity of the Infor Design System, while building or using your own functional components.

Check out the [CSS library on Github](https://github.com/infor-design/css).

## Getting Started

The easiest way to get the Infor Design System CSS library is through `npm`.

```sh
npm install --save-dev ids-css
```

This will download the latest version of all of the assets and install in `node_modules`. Include your desired file in the `<head>` of your application or using your build mechanism, like webpack. The `*.min.css` version should be used in production due to its smaller file size but the `.css` version might be better in development for any necessary debugging. Also we recommend using the provided `ids-reset.css` for the more consistent styling.

## Recent Changes

Visit the [release notes](./release-notes.html) for this release.

## FAQ

**How is the IDS CSS library different than SoHo components?**

Infor Design System (IDS) is a continuation of the SoHo user experience. By having standard colors, text, and basic elements like form fields and buttons, each Infor application can share an identity. This CSS library is styles-only, powered by CSS and using a very generic architecture so that it's easy for any Infor application to use.

The IDS enterprise components (formerly known as SoHo) add functionality to the basics styles of SoHo giving you a lot of functionality out-of-the box. IDS is a lightweight implementation of the design system's basic design principles while the enterprise omponents are a more feature-rich toolkit of common patterns which you can "drop in" to your Infor application.
