---
title: Grid
description: Soho Foundation Styleguide
---

The grids used run off of the [lost grid](http://lostgrid.org/docs.html) postcss plugin.

## Specs

{{> specValue title="Extra Small" spec=default.breakpointXs }}
{{> specValue title="Small" spec=default.breakpointSm }}
{{> specValue title="Medium" spec=default.breakpointMd }}
{{> specValue title="Large" spec=default.breakpointLg }}
{{> specValue title="Extra Large" spec=default.breakpointXl }}


## Grid

The grid is responsive based on the breakpoints applied. The default is that each column is 100%. When you apply a breakpoint `col` class, such as `.fnd-row--col-md-1`, that column will stay 100% width, until you hit the `medium` breakpoint when it will then become 1/12 of the width.

<div class="fnd-row example-row">
    <div class="fnd-row--col-sm-1">col-1</div>
    <div class="fnd-row--col-sm-1">col-1</div>
    <div class="fnd-row--col-sm-1">col-1</div>
    <div class="fnd-row--col-sm-1">col-1</div>
    <div class="fnd-row--col-sm-1">col-1</div>
    <div class="fnd-row--col-sm-1">col-1</div>
    <div class="fnd-row--col-sm-1">col-1</div>
    <div class="fnd-row--col-sm-1">col-1</div>
    <div class="fnd-row--col-sm-1">col-1</div>
    <div class="fnd-row--col-sm-1">col-1</div>
    <div class="fnd-row--col-sm-1">col-1</div>
    <div class="fnd-row--col-sm-1">col-1</div>
</div>

<div class="fnd-row example-row">
    <div class="fnd-row--col-sm-2">col-2</div>
    <div class="fnd-row--col-sm-2">col-2</div>
    <div class="fnd-row--col-sm-2">col-2</div>
    <div class="fnd-row--col-sm-2">col-2</div>
    <div class="fnd-row--col-sm-2">col-2</div>
    <div class="fnd-row--col-sm-2">col-2</div>
</div>

<div class="fnd-row example-row">
    <div class="fnd-row--col-sm-3">col-3</div>
    <div class="fnd-row--col-sm-3">col-3</div>
    <div class="fnd-row--col-sm-3">col-3</div>
    <div class="fnd-row--col-sm-3">col-3</div>
</div>

<div class="fnd-row example-row">
    <div class="fnd-row--col-sm-4">col-4</div>
    <div class="fnd-row--col-sm-4">col-4</div>
    <div class="fnd-row--col-sm-4">col-4</div>
</div>

<div class="fnd-row example-row">
    <div class="fnd-row--col-sm-5">col-5</div>
    <div class="fnd-row--col-sm-7">col-7</div>
</div>

<div class="fnd-row example-row">
    <div class="fnd-row--col-sm-6">col-6</div>
    <div class="fnd-row--col-sm-6">col-6</div>
</div>

<div class="fnd-row example-row">
    <div class="fnd-row--col-sm-7">col-7</div>
    <div class="fnd-row--col-sm-5">col-5</div>
</div>

<div class="fnd-row example-row">
    <div class="fnd-row--col-sm-8">col-8</div>
    <div class="fnd-row--col-sm-4">col-4</div>
</div>

<div class="fnd-row example-row">
    <div class="fnd-row--col-sm-9">col-9</div>
    <div class="fnd-row--col-sm-3">col-3</div>
</div>

<div class="fnd-row example-row">
    <div class="fnd-row--col-sm-10">col-10</div>
    <div class="fnd-row--col-sm-2">col-2</div>
</div>

<div class="fnd-row example-row">
    <div class="fnd-row--col-sm-11">col-11</div>
    <div class="fnd-row--col-sm-1">col-1</div>
</div>

<div class="fnd-row example-row">
    <div class="fnd-row--col-sm-12">col-12</div>
</div>

## Grid with gutter

If you would like gutters with your grid use grid class `.fnd-row--gutter`.

<div class="fnd-row--gutter example-row">
    <div class="fnd-row--col-sm-1">col-1</div>
    <div class="fnd-row--col-sm-1">col-1</div>
    <div class="fnd-row--col-sm-1">col-1</div>
    <div class="fnd-row--col-sm-1">col-1</div>
    <div class="fnd-row--col-sm-1">col-1</div>
    <div class="fnd-row--col-sm-1">col-1</div>
    <div class="fnd-row--col-sm-1">col-1</div>
    <div class="fnd-row--col-sm-1">col-1</div>
    <div class="fnd-row--col-sm-1">col-1</div>
    <div class="fnd-row--col-sm-1">col-1</div>
    <div class="fnd-row--col-sm-1">col-1</div>
    <div class="fnd-row--col-sm-1">col-1</div>
</div>

<div class="fnd-row--gutter example-row">
    <div class="fnd-row--col-sm-2">col-2</div>
    <div class="fnd-row--col-sm-2">col-2</div>
    <div class="fnd-row--col-sm-2">col-2</div>
    <div class="fnd-row--col-sm-2">col-2</div>
    <div class="fnd-row--col-sm-2">col-2</div>
    <div class="fnd-row--col-sm-2">col-2</div>
</div>

<div class="fnd-row--gutter example-row">
    <div class="fnd-row--col-sm-3">col-3</div>
    <div class="fnd-row--col-sm-3">col-3</div>
    <div class="fnd-row--col-sm-3">col-3</div>
    <div class="fnd-row--col-sm-3">col-3</div>
</div>

<div class="fnd-row--gutter example-row">
    <div class="fnd-row--col-sm-4">col-4</div>
    <div class="fnd-row--col-sm-4">col-4</div>
    <div class="fnd-row--col-sm-4">col-4</div>
</div>

<div class="fnd-row--gutter example-row">
    <div class="fnd-row--col-sm-5">col-5</div>
    <div class="fnd-row--col-sm-7">col-7</div>
</div>

<div class="fnd-row--gutter example-row">
    <div class="fnd-row--col-sm-6">col-6</div>
    <div class="fnd-row--col-sm-6">col-6</div>
</div>

<div class="fnd-row--gutter example-row">
    <div class="fnd-row--col-sm-7">col-7</div>
    <div class="fnd-row--col-sm-5">col-5</div>
</div>

<div class="fnd-row--gutter example-row">
    <div class="fnd-row--col-sm-8">col-8</div>
    <div class="fnd-row--col-sm-4">col-4</div>
</div>

<div class="fnd-row--gutter example-row">
    <div class="fnd-row--col-sm-9">col-9</div>
    <div class="fnd-row--col-sm-3">col-3</div>
</div>

<div class="fnd-row--gutter example-row">
    <div class="fnd-row--col-sm-10">col-10</div>
    <div class="fnd-row--col-sm-2">col-2</div>
</div>

<div class="fnd-row--gutter example-row">
    <div class="fnd-row--col-sm-11">col-11</div>
    <div class="fnd-row--col-sm-1">col-1</div>
</div>

<div class="fnd-row--gutter example-row">
    <div class="fnd-row--col-sm-12">col-12</div>
</div>
