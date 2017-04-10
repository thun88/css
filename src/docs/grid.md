# Grid - Lost Grid

The grids used run off of the [lost grid](http://lostgrid.org/docs.html) postcss plugin.

## Specs

```css
{
{{#each breakpoints}}
  {{this.name}}: {{this.value}};
{{/each}}
}
```

## Grid

The grid is responsive based on the breakpoints applied. The default is that each column is 100%. When you apply a breakpoint `col` class, such as `.fnd-grid--col-md-1`, that column will stay 100% width, until you hit the `medium` breakpoint when it will then become 1/12 of the width.

<div class="fnd-grid demo-grid">
  <div class="fnd-grid--col-1 fnd-grid--col-sm-1">col-1</div>
  <div class="fnd-grid--col-1 fnd-grid--col-sm-1">col-1</div>
  <div class="fnd-grid--col-1 fnd-grid--col-sm-1">col-1</div>
  <div class="fnd-grid--col-1 fnd-grid--col-sm-1">col-1</div>
  <div class="fnd-grid--col-1 fnd-grid--col-sm-1">col-1</div>
  <div class="fnd-grid--col-1 fnd-grid--col-sm-1">col-1</div>
  <div class="fnd-grid--col-1 fnd-grid--col-sm-1">col-1</div>
  <div class="fnd-grid--col-1 fnd-grid--col-sm-1">col-1</div>
  <div class="fnd-grid--col-1 fnd-grid--col-sm-1">col-1</div>
  <div class="fnd-grid--col-1 fnd-grid--col-sm-1">col-1</div>
  <div class="fnd-grid--col-1 fnd-grid--col-sm-1">col-1</div>
  <div class="fnd-grid--col-1 fnd-grid--col-sm-1">col-1</div>
</div>

<div class="fnd-grid demo-grid">
  <div class="fnd-grid--col-2 fnd-grid--col-sm-2">col-2</div>
  <div class="fnd-grid--col-2 fnd-grid--col-sm-2">col-2</div>
  <div class="fnd-grid--col-2 fnd-grid--col-sm-2">col-2</div>
  <div class="fnd-grid--col-2 fnd-grid--col-sm-2">col-2</div>
  <div class="fnd-grid--col-2 fnd-grid--col-sm-2">col-2</div>
  <div class="fnd-grid--col-2 fnd-grid--col-sm-2">col-2</div>
</div>

<div class="fnd-grid demo-grid">
  <div class="fnd-grid--col-3 fnd-grid--col-sm-3">col-3</div>
  <div class="fnd-grid--col-3 fnd-grid--col-sm-3">col-3</div>
  <div class="fnd-grid--col-3 fnd-grid--col-sm-3">col-3</div>
  <div class="fnd-grid--col-3 fnd-grid--col-sm-3">col-3</div>
</div>

<div class="fnd-grid demo-grid">
  <div class="fnd-grid--col-4 fnd-grid--col-sm-4">col-4</div>
  <div class="fnd-grid--col-4 fnd-grid--col-sm-4">col-4</div>
  <div class="fnd-grid--col-4 fnd-grid--col-sm-4">col-4</div>
</div>

<div class="fnd-grid demo-grid">
  <div class="fnd-grid--col-5 fnd-grid--col-sm-5">col-5</div>
  <div class="fnd-grid--col-7 fnd-grid--col-sm-7">col-7</div>
</div>

<div class="fnd-grid demo-grid">
  <div class="fnd-grid--col-6 fnd-grid--col-sm-6">col-6</div>
  <div class="fnd-grid--col-6 fnd-grid--col-sm-6">col-6</div>
</div>

<div class="fnd-grid demo-grid">
  <div class="fnd-grid--col-7 fnd-grid--col-sm-7">col-7</div>
  <div class="fnd-grid--col-5 fnd-grid--col-sm-5">col-5</div>
</div>

<div class="fnd-grid demo-grid">
  <div class="fnd-grid--col-8 fnd-grid--col-sm-8">col-8</div>
  <div class="fnd-grid--col-4 fnd-grid--col-sm-4">col-4</div>
</div>

<div class="fnd-grid demo-grid">
  <div class="fnd-grid--col-9 fnd-grid--col-sm-9">col-9</div>
  <div class="fnd-grid--col-3 fnd-grid--col-sm-3">col-3</div>
</div>

<div class="fnd-grid demo-grid">
  <div class="fnd-grid--col-10 fnd-grid--col-sm-10">col-10</div>
  <div class="fnd-grid--col-2 fnd-grid--col-sm-2">col-2</div>
</div>

<div class="fnd-grid demo-grid">
  <div class="fnd-grid--col-11 fnd-grid--col-sm-11">col-11</div>
  <div class="fnd-grid--col-1 fnd-grid--col-sm-1">col-1</div>
</div>

<div class="fnd-grid demo-grid">
  <div class="fnd-grid--col-12 fnd-grid--col-sm-12">col-12</div>
</div>

## Grid with gutter

If you would like gutters with your grid use grid class `.fnd-grid--gutter`.

<div class="fnd-grid--gutter demo-grid">
  <div class="fnd-grid--col-1 fnd-grid--col-sm-1">col-1</div>
  <div class="fnd-grid--col-1 fnd-grid--col-sm-1">col-1</div>
  <div class="fnd-grid--col-1 fnd-grid--col-sm-1">col-1</div>
  <div class="fnd-grid--col-1 fnd-grid--col-sm-1">col-1</div>
  <div class="fnd-grid--col-1 fnd-grid--col-sm-1">col-1</div>
  <div class="fnd-grid--col-1 fnd-grid--col-sm-1">col-1</div>
  <div class="fnd-grid--col-1 fnd-grid--col-sm-1">col-1</div>
  <div class="fnd-grid--col-1 fnd-grid--col-sm-1">col-1</div>
  <div class="fnd-grid--col-1 fnd-grid--col-sm-1">col-1</div>
  <div class="fnd-grid--col-1 fnd-grid--col-sm-1">col-1</div>
  <div class="fnd-grid--col-1 fnd-grid--col-sm-1">col-1</div>
  <div class="fnd-grid--col-1 fnd-grid--col-sm-1">col-1</div>
</div>

<div class="fnd-grid--gutter demo-grid">
  <div class="fnd-grid--col-2 fnd-grid--col-sm-2">col-2</div>
  <div class="fnd-grid--col-2 fnd-grid--col-sm-2">col-2</div>
  <div class="fnd-grid--col-2 fnd-grid--col-sm-2">col-2</div>
  <div class="fnd-grid--col-2 fnd-grid--col-sm-2">col-2</div>
  <div class="fnd-grid--col-2 fnd-grid--col-sm-2">col-2</div>
  <div class="fnd-grid--col-2 fnd-grid--col-sm-2">col-2</div>
</div>

<div class="fnd-grid--gutter demo-grid">
  <div class="fnd-grid--col-3 fnd-grid--col-sm-3">col-3</div>
  <div class="fnd-grid--col-3 fnd-grid--col-sm-3">col-3</div>
  <div class="fnd-grid--col-3 fnd-grid--col-sm-3">col-3</div>
  <div class="fnd-grid--col-3 fnd-grid--col-sm-3">col-3</div>
</div>

<div class="fnd-grid--gutter demo-grid">
  <div class="fnd-grid--col-4 fnd-grid--col-sm-4">col-4</div>
  <div class="fnd-grid--col-4 fnd-grid--col-sm-4">col-4</div>
  <div class="fnd-grid--col-4 fnd-grid--col-sm-4">col-4</div>
</div>

<div class="fnd-grid--gutter demo-grid">
  <div class="fnd-grid--col-5 fnd-grid--col-sm-5">col-5</div>
  <div class="fnd-grid--col-7 fnd-grid--col-sm-7">col-7</div>
</div>

<div class="fnd-grid--gutter demo-grid">
  <div class="fnd-grid--col-6 fnd-grid--col-sm-6">col-6</div>
  <div class="fnd-grid--col-6 fnd-grid--col-sm-6">col-6</div>
</div>

<div class="fnd-grid--gutter demo-grid">
  <div class="fnd-grid--col-7 fnd-grid--col-sm-7">col-7</div>
  <div class="fnd-grid--col-5 fnd-grid--col-sm-5">col-5</div>
</div>

<div class="fnd-grid--gutter demo-grid">
  <div class="fnd-grid--col-8 fnd-grid--col-sm-8">col-8</div>
  <div class="fnd-grid--col-4 fnd-grid--col-sm-4">col-4</div>
</div>

<div class="fnd-grid--gutter demo-grid">
  <div class="fnd-grid--col-9 fnd-grid--col-sm-9">col-9</div>
  <div class="fnd-grid--col-3 fnd-grid--col-sm-3">col-3</div>
</div>

<div class="fnd-grid--gutter demo-grid">
  <div class="fnd-grid--col-10 fnd-grid--col-sm-10">col-10</div>
  <div class="fnd-grid--col-2 fnd-grid--col-sm-2">col-2</div>
</div>

<div class="fnd-grid--gutter demo-grid">
  <div class="fnd-grid--col-11 fnd-grid--col-sm-11">col-11</div>
  <div class="fnd-grid--col-1 fnd-grid--col-sm-1">col-1</div>
</div>

<div class="fnd-grid--gutter demo-grid">
  <div class="fnd-grid--col-12 fnd-grid--col-sm-12">col-12</div>
</div>
