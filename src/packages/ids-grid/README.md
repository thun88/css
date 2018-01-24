---
title: Responsive Grid
description: A 12-column grid is the base infrastructure of modern, responsive application. On this page, you'll learn how to use the responsive grid to build page layouts and how to adjust your layouts on different browser-width breakpoints.
demo:
  path: /ids-grid/index.html
system:
  category: page-structure
  name: grid
specs:
- title: Extra Small
  spec: breakpointXs
  valueType: true
- title: Small
  spec: breakpointSm
  valueType: true
- title: Medium
  spec: breakpointMd
  valueType: true
- title: Large
  spec: breakpointLg
  valueType: true
- title: Extra Large
  spec: breakpointXl
  valueType: true
---


## Basic Grid (Fixed)

By default, the grid is fixed so that each column is 1/`N`th of the parent container where `N` is the `ids-row--col-N` number from 1 to 12. Use `.ids-row` to create a layout row wrapper and then add your rows.

```html
<div class="ids-row">
    <div class="ids-row--col-1">col-1</div>
    <div class="ids-row--col-1">col-1</div>
    <div class="ids-row--col-1">col-1</div>
    <div class="ids-row--col-1">col-1</div>
    <div class="ids-row--col-1">col-1</div>
    <div class="ids-row--col-1">col-1</div>
    <div class="ids-row--col-1">col-1</div>
    <div class="ids-row--col-1">col-1</div>
    <div class="ids-row--col-1">col-1</div>
    <div class="ids-row--col-1">col-1</div>
    <div class="ids-row--col-1">col-1</div>
    <div class="ids-row--col-1">col-1</div>
</div>
```

## Responsive Grid

The grid is responsive based on the breakpoints applied. When you apply a breakpoint `col` class, such as `.ids-row--col-md-1`, that column will change from the fixed default to become 100% full width of the parent container from the smallest breakpoint, until the browser gets wider and hits the `medium` breakpoint. At that point, it will then become its respective percentage of the width.

Below, if you change your browser width you should see the columns stack when the browser width is smaller than `breakpoint-sm` and then become 1/6th width when the browser is as wide or wider than the SM breakpoint.

```html
<div class="ids-row">
    <div class="ids-row--col-sm-2">col-2</div>
    <div class="ids-row--col-sm-2">col-2</div>
    <div class="ids-row--col-sm-2">col-2</div>
    <div class="ids-row--col-sm-2">col-2</div>
    <div class="ids-row--col-sm-2">col-2</div>
    <div class="ids-row--col-sm-2">col-2</div>
</div>
```

## Changing Layout at Breakpoints

You can also use the breakpoint `col` classes `.ids-row--col-[xs|sm|md|lg|xl]-*` to define different layouts between different breakpoints. For example, below, stacked columns on XS, at SM breakpoint it changes to a two column "4|8" layout and on LG and XL it's a "3|9" layout.
```html
<div class="ids-row">
    <div class="ids-row--col-sm-4 ids-row--col-lg-3">Column 1</div>
    <div class="ids-row--col-sm-8 ids-row--col-lg-9">Column 2</div>
</div>
```

## Grid with Gutters

A grid with gutters helps you layout content and maintain consistent spacing between elements. Use grid class `.ids-row ids-row--gutter` to create a layout row with a gutter. There are two different sizes of gutters (Small and Large) which are automatic based on the breakpoint size classes you're using. Below are standard, recommended IDS layouts which will provide the best flexibility and content structure for most applications.

```html
<div class="ids-row ids-row--gutter">
    <div class="ids-row--col-sm-3 ids-row--col-md-3">col-3</div>
    <div class="ids-row--col-sm-9 ids-row--col-md-9">col-9</div>
</div>
```

## Basic Page Layout

### Add padding to a section

You can add padding (size dictated responsively) to a container element by using the class `.ids-container`.

```html
<div class="ids-container">
    <!--- contents here will be surrounded by padding -->
</div>
```

You can use this inside of a grid cell to pad the cell contents. When using the grid as a page layout, this is preferred.

```html
<body>
    <div class="ids-row">
        <div class="ids-row--col-sm-4 ids-row--col-lg-3">
            <!--- left column contents here -->
        </div>
        <div class="ids-row--col-sm-8 ids-row--col-lg-9">
            <div class="ids-container">
                <!--- main body contents here will be surrounded by padding -->
            </div>
        </div>
    </div>
</body>
```

Or you can wrap the entire grid with `.ids-container` to pad the grid itself. This is best applied when the grid is a part of the content.

 ```html
<body>
    <div class="ids-container">
        <div class="ids-row">
            <div class="ids-row--col-sm-4 ids-row--col-lg-3">
                <!--- left column contents here -->
            </div>
            <div class="ids-row--col-sm-8 ids-row--col-lg-9">
                    <!--- main body contents here will be surrounded by padding -->
            </div>
        </div>
    </div>
</body>
```
