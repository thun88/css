---
title: IDS Web Components
description: SoHo unifies the CloudSuite experience by standardizing the universal design elements like colors, text, and buttons. Infor Design System is a simple CSS library to help implement SoHo design principles with easy-to-follow and easy-to-implement rules and code.
---

<img src="https://ids-com.s3.amazonaws.com/images/css-lib.original.png" "IDS CSS Library" />

## Getting Started

The easiest way to get the Infor Design System (IDS) Web components is through `npm`.

```
npm install @infor/ids-css --save-dev
```

This will download the latest version of all of the assets and install in `node_modules`. Include your desired file in the `<head>` of your application. The `*.min.css` version should be used in production due to its smaller file size but the `.css` version might be better in development for any necessary debugging. Also we recommend using the provided `ids-reset.css` for the more consistent styling.

## Recent Changes

Visit the [release notes](./release-notes.html) for this release.

## FAQ

**How Infor Design System Is Different than SoHo Components?**

Infor Design System (IDS) is the basic identity of the SoHo user experience. By having standard colors, text, and basic elements like form fields and buttons, each Infor application can share an identity. IDS is style-only, powered by CSS and using a very generic architecture so that it's easy for any Infor application to use. The SoHo Components add functionality to the basics of SoHo making it easier for you to bring the SoHo user experience to life. With built-in responsive features, complex UX patterns like Data Grid and Step Pattern, and a large library of different components for many use cases, the SoHo components can help you build out the SoHo experience.

IDS is a lightweight implementation of SoHo's basic design principles while the SoHo Components are a more feature-rich toolkit of common patterns which you can "drop in" to your Infor application.
