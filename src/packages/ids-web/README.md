---
title: Infor Design System Web Components
description: Infor Design System components for the web
---

## This is a package for all of the indidvidual IDS components together

Note: This is currently an alpha testing package and is unsupported outside of internal Hook & Loop systems, but a sign of things to come :)


To Install do `npm install @infor/ids-web`.

We recommend you use the `ids-reset.css` stylesheet, but you do not have to. Other than that, link or include either the regular or minified file into your project.

If you use a compiler and want to take advantage of the IDS custom properties, they are included at the beginning of the unminified version. Note that custom properties aren't fully adopted by all browsers (cough IE) so its best to have them replace with their value in your compiling process. We use PostCSS CssNext to do so.
