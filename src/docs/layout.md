---
title: Responsive Layout
description: Soho Foundation Styleguide
---

A 12-column layout is the base infrastructure of modern, responsive application. On this page, you'll learn how to use the responsive layout to build pages and how to adjust your layouts on different browser-width breakpoints.

## Breakpoint Specs

{{> specValue title="Extra Small" spec=default.breakpointXs }}
{{> specValue title="Small" spec=default.breakpointSm }}
{{> specValue title="Medium" spec=default.breakpointMd }}
{{> specValue title="Large" spec=default.breakpointLg }}
{{> specValue title="Extra Large" spec=default.breakpointXl }}


## Basic Layout (Fixed)

By default, the layout is fixed so that each column is 1/`N`th of the parent container where `N` is the `fnd-row--col-N` number from 1 to 12. Use `.fnd-row` to create a layout row wrapper and then add your rows.

<div class="example">
    <div class="fnd-row example-row">
        <div class="fnd-row--col-1">col-1</div>
        <div class="fnd-row--col-1">col-1</div>
        <div class="fnd-row--col-1">col-1</div>
        <div class="fnd-row--col-1">col-1</div>
        <div class="fnd-row--col-1">col-1</div>
        <div class="fnd-row--col-1">col-1</div>
        <div class="fnd-row--col-1">col-1</div>
        <div class="fnd-row--col-1">col-1</div>
        <div class="fnd-row--col-1">col-1</div>
        <div class="fnd-row--col-1">col-1</div>
        <div class="fnd-row--col-1">col-1</div>
        <div class="fnd-row--col-1">col-1</div>
    </div>
</div>
```html
<div class="fnd-row">
    <div class="fnd-row--col-1">col-1</div>
    <div class="fnd-row--col-1">col-1</div>
    <div class="fnd-row--col-1">col-1</div>
    <div class="fnd-row--col-1">col-1</div>
    <div class="fnd-row--col-1">col-1</div>
    <div class="fnd-row--col-1">col-1</div>
    <div class="fnd-row--col-1">col-1</div>
    <div class="fnd-row--col-1">col-1</div>
    <div class="fnd-row--col-1">col-1</div>
    <div class="fnd-row--col-1">col-1</div>
    <div class="fnd-row--col-1">col-1</div>
    <div class="fnd-row--col-1">col-1</div>
</div>
```

## Responsive Layout

The layout is responsive based on the breakpoints applied. When you apply a breakpoint `col` class, such as `.fnd-row--col-md-1`, that column will change from the fixed default to become 100% full width of the parent container from the smallest breakpoint, until the browser gets wider and hits the `medium` breakpoint. At that point,it will then become its respective percentage of the width.

<div class="example">
    <div class="fnd-row example-row">
        <div class="fnd-row--col-sm-2">col-2</div>
        <div class="fnd-row--col-sm-2">col-2</div>
        <div class="fnd-row--col-sm-2">col-2</div>
        <div class="fnd-row--col-sm-2">col-2</div>
        <div class="fnd-row--col-sm-2">col-2</div>
        <div class="fnd-row--col-sm-2">col-2</div>
    </div>
    <small>Note: Resize your browser width to see the layout change at the SM breakpoint.</small>
</div>
```html
<div class="fnd-row">
    <div class="fnd-row--col-sm-2">col-2</div>
    <div class="fnd-row--col-sm-2">col-2</div>
    <div class="fnd-row--col-sm-2">col-2</div>
    <div class="fnd-row--col-sm-2">col-2</div>
    <div class="fnd-row--col-sm-2">col-2</div>
    <div class="fnd-row--col-sm-2">col-2</div>
</div>
```

## Changing Layouts per Breakpoint

You can also use the breakpoint `col` classes `.fnd-row--col-[xs|sm|md|lg|xl]-*` to define different layouts between different breakpoints. For example, stacked columns on XS and SM breakpoints, two column layout on MD breakpoint, and three column layout on LG and XL.


<div class="example">
    <div class="fnd-row example-row">
        <div class="fnd-row--col-md-6 fnd-row--col-lg-4">Column 1</div>
        <div class="fnd-row--col-md-6 fnd-row--col-lg-4">Column 2</div>
        <div class="fnd-row--col-md-6 fnd-row--col-lg-4">Column 3</div>
    </div>
    <small>Note: Resize your browser to different widths to see the columns flow based on different breakpoints.</small>
</div>
```html
<div class="fnd-row">
    <div class="fnd-row--col-md-6 fnd-row--col-lg-4">Column 1</div>
    <div class="fnd-row--col-md-6 fnd-row--col-lg-4">Column 2</div>
    <div class="fnd-row--col-md-6 fnd-row--col-lg-4">Column 3</div>
</div>
```

## Layout with Gutters

A layout with gutters helps you layout content and maintain consistent spacing between elements. Use layout class `.fnd-row--gutter` to create a layout row with a gutter. There are two different sizes of gutters (Small and Large) which are automatic based on the breakpoint size classes you're using. Below are standard, recommended SoHo layouts which will provide the best flexibility and content structure for most applications.

<div class="example">
    <div class="fnd-row--gutter example-row">
        <div class="fnd-row--col-sm-3 fnd-row--col-md-3">col-3</div>
        <div class="fnd-row--col-sm-9 fnd-row--col-md-9">col-9</div>
    </div>
</div>
```html
<div class="fnd-row--gutter">
    <div class="fnd-row--col-sm-3 fnd-row--col-md-3">col-3</div>
    <div class="fnd-row--col-sm-9 fnd-row--col-md-9">col-9</div>
</div>
```
<div class="fnd-row--gutter example-row">
    <div class="fnd-row--col-sm-3 fnd-row--col-md-3">col-3</div>
    <div class="fnd-row--col-sm-9 fnd-row--col-md-9">col-9</div>
</div>

<div class="fnd-row--gutter example-row">
    <div class="fnd-row--col-sm-4 fnd-row--col-md-4">col-4</div>
    <div class="fnd-row--col-sm-8 fnd-row--col-md-8">col-8</div>
</div>

<div class="fnd-row--gutter example-row">
    <div class="fnd-row--col-sm-4 fnd-row--col-md-4">col-4</div>
    <div class="fnd-row--col-sm-4 fnd-row--col-md-4">col-4</div>
    <div class="fnd-row--col-sm-4 fnd-row--col-md-4">col-4</div>
</div>

<div class="fnd-row--gutter example-row">
    <div class="fnd-row--col-sm-3 fnd-row--col-md-3">col-3</div>
    <div class="fnd-row--col-sm-6 fnd-row--col-md-6">col-6</div>
    <div class="fnd-row--col-sm-3 fnd-row--col-md-3">col-3</div>
</div>

<div class="fnd-row--gutter example-row">
    <div class="fnd-row--col-sm-6 fnd-row--col-md-6">col-6</div>
    <div class="fnd-row--col-sm-6 fnd-row--col-md-6">col-6</div>
</div>

<div class="fnd-row--gutter example-row">
    <div class="fnd-row--col-sm-12 fnd-row--col-md-12">col-12</div>
</div>
