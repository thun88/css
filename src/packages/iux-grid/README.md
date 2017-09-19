---
title: Responsive Grid
description: A 12-column grid is the base infrastructure of modern, responsive application. On this page, you'll learn how to use the responsive grid to build page layouts and how to adjust your layouts on different browser-width breakpoints.
specs: [
    {{> specMd title="Extra Small" spec=default.breakpointXs }},
    {{> specMd title="Small" spec=default.breakpointSm }},
    {{> specMd title="Medium" spec=default.breakpointMd }},
    {{> specMd title="Large" spec=default.breakpointLg }},
    {{> specMd title="Extra Large" spec=default.breakpointXl }}
]
---


## Basic Grid (Fixed)

By default, the grid is fixed so that each column is 1/`N`th of the parent container where `N` is the `iux-row--col-N` number from 1 to 12. Use `.iux-row` to create a layout row wrapper and then add your rows.

<div class="example example--grid">
    <div class="iux-row">
        <div class="iux-row--col-1">col-1</div>
        <div class="iux-row--col-1">col-1</div>
        <div class="iux-row--col-1">col-1</div>
        <div class="iux-row--col-1">col-1</div>
        <div class="iux-row--col-1">col-1</div>
        <div class="iux-row--col-1">col-1</div>
        <div class="iux-row--col-1">col-1</div>
        <div class="iux-row--col-1">col-1</div>
        <div class="iux-row--col-1">col-1</div>
        <div class="iux-row--col-1">col-1</div>
        <div class="iux-row--col-1">col-1</div>
        <div class="iux-row--col-1">col-1</div>
    </div>
</div>
```html
<div class="iux-row">
    <div class="iux-row--col-1">col-1</div>
    <div class="iux-row--col-1">col-1</div>
    <div class="iux-row--col-1">col-1</div>
    <div class="iux-row--col-1">col-1</div>
    <div class="iux-row--col-1">col-1</div>
    <div class="iux-row--col-1">col-1</div>
    <div class="iux-row--col-1">col-1</div>
    <div class="iux-row--col-1">col-1</div>
    <div class="iux-row--col-1">col-1</div>
    <div class="iux-row--col-1">col-1</div>
    <div class="iux-row--col-1">col-1</div>
    <div class="iux-row--col-1">col-1</div>
</div>
```

## Responsive Grid

The grid is responsive based on the breakpoints applied. When you apply a breakpoint `col` class, such as `.iux-row--col-md-1`, that column will change from the fixed default to become 100% full width of the parent container from the smallest breakpoint, until the browser gets wider and hits the `medium` breakpoint. At that point, it will then become its respective percentage of the width.

Below, if you change your browser width you should see the columns stack when the browser width is smaller than {{default.breakpointSm.value}} and then become 1/6th width when the browser is {{default.breakpointSm.value}} wide or wider.

<div class="example example--grid">
    <div class="iux-row">
        <div class="iux-row--col-sm-2">col-2</div>
        <div class="iux-row--col-sm-2">col-2</div>
        <div class="iux-row--col-sm-2">col-2</div>
        <div class="iux-row--col-sm-2">col-2</div>
        <div class="iux-row--col-sm-2">col-2</div>
        <div class="iux-row--col-sm-2">col-2</div>
    </div>
    <small class="example--info">Note: Resize your browser width to see the layout change at the SM breakpoint.</small>
</div>
```html
<div class="iux-row">
    <div class="iux-row--col-sm-2">col-2</div>
    <div class="iux-row--col-sm-2">col-2</div>
    <div class="iux-row--col-sm-2">col-2</div>
    <div class="iux-row--col-sm-2">col-2</div>
    <div class="iux-row--col-sm-2">col-2</div>
    <div class="iux-row--col-sm-2">col-2</div>
</div>
```

## Changing Layout at Breakpoints

You can also use the breakpoint `col` classes `.iux-row--col-[xs|sm|md|lg|xl]-*` to define different layouts between different breakpoints. For example, below, stacked columns on XS, at SM breakpoint it changes to a two column "4|8" layout and on LG and XL it's a "3|9" layout.


<div class="example example--grid">
    <div class="iux-row">
        <div class="iux-row--col-sm-4 iux-row--col-lg-3">Column 1</div>
        <div class="iux-row--col-sm-8 iux-row--col-lg-9">Column 2</div>
    </div>
    <small class="example--info">Note: Resize your browser to different widths to see the columns flow based on different breakpoints.</small>
</div>
```html
<div class="iux-row">
    <div class="iux-row--col-sm-4 iux-row--col-lg-3">Column 1</div>
    <div class="iux-row--col-sm-8 iux-row--col-lg-9">Column 2</div>
</div>
```

## Grid with Gutters

A grid with gutters helps you layout content and maintain consistent spacing between elements. Use grid class `.iux-row iux-row--gutter` to create a layout row with a gutter. There are two different sizes of gutters (Small and Large) which are automatic based on the breakpoint size classes you're using. Below are standard, recommended SoHo layouts which will provide the best flexibility and content structure for most applications.

<div class="example example--grid">
    <div class="iux-row iux-row--gutter">
        <div class="iux-row--col-sm-3 iux-row--col-md-3">col-3</div>
        <div class="iux-row--col-sm-9 iux-row--col-md-9">col-9</div>
    </div>
</div>
```html
<div class="iux-row iux-row--gutter">
    <div class="iux-row--col-sm-3 iux-row--col-md-3">col-3</div>
    <div class="iux-row--col-sm-9 iux-row--col-md-9">col-9</div>
</div>
```

<div class="example example--grid">
    <div class="iux-row iux-row--gutter">
        <div class="iux-row--col-sm-3 iux-row--col-md-3">col-3</div>
        <div class="iux-row--col-sm-9 iux-row--col-md-9">col-9</div>
    </div>

    <div class="iux-row iux-row--gutter">
        <div class="iux-row--col-sm-6 iux-row--col-md-6">col-6</div>
        <div class="iux-row--col-sm-6 iux-row--col-md-6">col-6</div>
    </div>

    <div class="iux-row iux-row--gutter">
        <div class="iux-row--col-sm-12 iux-row--col-md-12">col-12</div>
    </div>
</div>

## Basic Page Layout

### Full Width Page

```html
<body>
    <div class="iux-container">
        <!--- main body contents here will be inside a page margin -->
    </div>
</body
```

### Responsive List/Detail

```html
<body>
    <div><!--- your header here --></div>
    <div class="iux-row">
        <div class="iux-row--col-sm-4 iux-row--col-lg-3">
            <!--- left column contents here -->
        </div>
        <div class="iux-row--col-sm-8 iux-row--col-lg-9">
            <div class="iux-container">
                <!--- main body contents here will be inside a page margin -->
            </div>
        </div>
    </div>
</body>
```
