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

## Common layout patterns

<div class="fnd-grid--gutter">
  <div class="fnd-grid--col-xlg-4">
    <h4>breakpoint-lg</h4>
  </div>
  <div class="fnd-grid--col-xlg-4">
    <h4>breakpoint-md</h4>
  </div>
  <div class="fnd-grid--col-xlg-4">
    <h4>breakpoint-sm</h4>
  </div>
</div>

<div class="fnd-grid--gutter">
  <div class="fnd-grid--col-xlg-4">
    <div class="fnd-grid demo-grid">
      <div class="fnd-grid--col-xlg-12">col-12</div>
    </div>
  </div>
  <div class="fnd-grid--col-xlg-4">
    <div class="fnd-grid demo-grid">
      <div class="fnd-grid--col-xlg-12">col-12</div>
    </div>
  </div>
  <div class="fnd-grid--col-xlg-4">
    <div class="fnd-grid demo-grid">
      <div class="fnd-grid--col-xlg-12">col-12</div>
    </div>
  </div>
</div>

<div class="fnd-grid--gutter">
  <div class="fnd-grid--col-xlg-4">
    <div class="fnd-grid demo-grid">
      <div class="fnd-grid--col-xlg-4">col-4</div>
      <div class="fnd-grid--col-xlg-8">col-8</div>
    </div>
  </div>
  <div class="fnd-grid--col-xlg-4">
    <div class="fnd-grid demo-grid">
      <div class="fnd-grid--col-xlg-4">col-4</div>
      <div class="fnd-grid--col-xlg-8">col-8</div>
    </div>
  </div>
  <div class="fnd-grid--col-xlg-4">
    <div class="fnd-grid demo-grid">
      <div class="fnd-grid--col-xlg-12">col-4</div>
      <div class="fnd-grid--col-xlg-12">col-8</div>
    </div>
  </div>
</div>

<div class="fnd-grid--gutter">
  <div class="fnd-grid--col-xlg-4">
    <div class="fnd-grid demo-grid">
      <div class="fnd-grid--col-xlg-3">col-3</div>
      <div class="fnd-grid--col-xlg-9">col-9</div>
    </div>
  </div>
  <div class="fnd-grid--col-xlg-4">
    <div class="fnd-grid demo-grid">
      <div class="fnd-grid--col-xlg-4">col-3</div>
      <div class="fnd-grid--col-xlg-8">col-9</div>
    </div>
  </div>
  <div class="fnd-grid--col-xlg-4">
    <div class="fnd-grid demo-grid">
      <div class="fnd-grid--col-xlg-12">col-3</div>
      <div class="fnd-grid--col-xlg-12">col-9</div>
    </div>
  </div>
</div>

<div class="fnd-grid--gutter">
  <div class="fnd-grid--col-xlg-4">
    <div class="fnd-grid demo-grid">
      <div class="fnd-grid--col-xlg-3">col-3</div>
      <div class="fnd-grid--col-xlg-3">col-3</div>
      <div class="fnd-grid--col-xlg-3">col-3</div>
      <div class="fnd-grid--col-xlg-3">col-3</div>
    </div>
  </div>
  <div class="fnd-grid--col-xlg-4">
    <div class="fnd-grid demo-grid">
      <div class="fnd-grid--col-xlg-12">col-3</div>
      <div class="fnd-grid--col-xlg-12">col-3</div>
      <div class="fnd-grid--col-xlg-12">col-3</div>
      <div class="fnd-grid--col-xlg-12">col-3</div>
    </div>
  </div>
  <div class="fnd-grid--col-xlg-4">
    <div class="fnd-grid demo-grid">
      <div class="fnd-grid--col-xlg-12">col-3</div>
      <div class="fnd-grid--col-xlg-12">col-3</div>
      <div class="fnd-grid--col-xlg-12">col-3</div>
      <div class="fnd-grid--col-xlg-12">col-3</div>
    </div>
  </div>
</div>

<div class="fnd-grid--gutter">
  <div class="fnd-grid--col-xlg-4">
    <div class="fnd-grid demo-grid">
      <div class="fnd-grid--col-xlg-4">col-4</div>
      <div class="fnd-grid--col-xlg-4">col-4</div>
      <div class="fnd-grid--col-xlg-4">col-4</div>
    </div>
  </div>
  <div class="fnd-grid--col-xlg-4">
    <div class="fnd-grid demo-grid">
      <div class="fnd-grid--col-xlg-12">col-4</div>
      <div class="fnd-grid--col-xlg-12">col-4</div>
      <div class="fnd-grid--col-xlg-12">col-4</div>
    </div>
  </div>
  <div class="fnd-grid--col-xlg-4">
    <div class="fnd-grid demo-grid">
      <div class="fnd-grid--col-xlg-12">col-4</div>
      <div class="fnd-grid--col-xlg-12">col-4</div>
      <div class="fnd-grid--col-xlg-12">col-12</div>
    </div>
  </div>
</div>

<div class="fnd-grid--gutter">
  <div class="fnd-grid--col-xlg-4">
    <div class="fnd-grid demo-grid">
      <div class="fnd-grid--col-xlg-3">col-3</div>
      <div class="fnd-grid--col-xlg-6">col-6</div>
      <div class="fnd-grid--col-xlg-3">col-3</div>
    </div>
  </div>
  <div class="fnd-grid--col-xlg-4">
    <div class="fnd-grid demo-grid">
      <div class="fnd-grid--col-xlg-12">col-3</div>
      <div class="fnd-grid--col-xlg-12">col-6</div>
      <div class="fnd-grid--col-xlg-12">col-3</div>
    </div>
  </div>
  <div class="fnd-grid--col-xlg-4">
    <div class="fnd-grid demo-grid">
      <div class="fnd-grid--col-xlg-12">col-3</div>
      <div class="fnd-grid--col-xlg-12">col-6</div>
      <div class="fnd-grid--col-xlg-12">col-3</div>
    </div>
  </div>
</div>





## Grid

<div class="fnd-grid demo-grid">
  <div class="fnd-grid--col-xlg-1">col-1</div>
  <div class="fnd-grid--col-xlg-1">col-1</div>
  <div class="fnd-grid--col-xlg-1">col-1</div>
  <div class="fnd-grid--col-xlg-1">col-1</div>
  <div class="fnd-grid--col-xlg-1">col-1</div>
  <div class="fnd-grid--col-xlg-1">col-1</div>
  <div class="fnd-grid--col-xlg-1">col-1</div>
  <div class="fnd-grid--col-xlg-1">col-1</div>
  <div class="fnd-grid--col-xlg-1">col-1</div>
  <div class="fnd-grid--col-xlg-1">col-1</div>
  <div class="fnd-grid--col-xlg-1">col-1</div>
  <div class="fnd-grid--col-xlg-1">col-1</div>
</div>

<div class="fnd-grid demo-grid">
  <div class="fnd-grid--col-xlg-2">col-2</div>
  <div class="fnd-grid--col-xlg-2">col-2</div>
  <div class="fnd-grid--col-xlg-2">col-2</div>
  <div class="fnd-grid--col-xlg-2">col-2</div>
  <div class="fnd-grid--col-xlg-2">col-2</div>
  <div class="fnd-grid--col-xlg-2">col-2</div>
</div>

<div class="fnd-grid demo-grid">
  <div class="fnd-grid--col-xlg-3">col-3</div>
  <div class="fnd-grid--col-xlg-3">col-3</div>
  <div class="fnd-grid--col-xlg-3">col-3</div>
  <div class="fnd-grid--col-xlg-3">col-3</div>
</div>

<div class="fnd-grid demo-grid">
  <div class="fnd-grid--col-xlg-4">col-4</div>
  <div class="fnd-grid--col-xlg-4">col-4</div>
  <div class="fnd-grid--col-xlg-4">col-4</div>
</div>

<div class="fnd-grid demo-grid">
  <div class="fnd-grid--col-xlg-5">col-5</div>
  <div class="fnd-grid--col-xlg-7">col-7</div>
</div>

<div class="fnd-grid demo-grid">
  <div class="fnd-grid--col-xlg-6">col-6</div>
  <div class="fnd-grid--col-xlg-6">col-6</div>
</div>

<div class="fnd-grid demo-grid">
  <div class="fnd-grid--col-xlg-7">col-7</div>
  <div class="fnd-grid--col-xlg-5">col-5</div>
</div>

<div class="fnd-grid demo-grid">
  <div class="fnd-grid--col-xlg-8">col-8</div>
  <div class="fnd-grid--col-xlg-4">col-4</div>
</div>

<div class="fnd-grid demo-grid">
  <div class="fnd-grid--col-xlg-9">col-9</div>
  <div class="fnd-grid--col-xlg-3">col-3</div>
</div>

<div class="fnd-grid demo-grid">
  <div class="fnd-grid--col-xlg-10">col-10</div>
  <div class="fnd-grid--col-xlg-2">col-2</div>
</div>

<div class="fnd-grid demo-grid">
  <div class="fnd-grid--col-xlg-11">col-11</div>
  <div class="fnd-grid--col-xlg-1">col-1</div>
</div>

<div class="fnd-grid demo-grid">
  <div class="fnd-grid--col-xlg-12">col-12</div>
</div>

## Grid with gutter

If you would like gutters with your grid use grid class `.fnd-grid--gutter`.

<div class="fnd-grid--gutter demo-grid">
  <div class="fnd-grid--col-xlg-1">col-1</div>
  <div class="fnd-grid--col-xlg-1">col-1</div>
  <div class="fnd-grid--col-xlg-1">col-1</div>
  <div class="fnd-grid--col-xlg-1">col-1</div>
  <div class="fnd-grid--col-xlg-1">col-1</div>
  <div class="fnd-grid--col-xlg-1">col-1</div>
  <div class="fnd-grid--col-xlg-1">col-1</div>
  <div class="fnd-grid--col-xlg-1">col-1</div>
  <div class="fnd-grid--col-xlg-1">col-1</div>
  <div class="fnd-grid--col-xlg-1">col-1</div>
  <div class="fnd-grid--col-xlg-1">col-1</div>
  <div class="fnd-grid--col-xlg-1">col-1</div>
</div>

<div class="fnd-grid--gutter demo-grid">
  <div class="fnd-grid--col-xlg-2">col-2</div>
  <div class="fnd-grid--col-xlg-2">col-2</div>
  <div class="fnd-grid--col-xlg-2">col-2</div>
  <div class="fnd-grid--col-xlg-2">col-2</div>
  <div class="fnd-grid--col-xlg-2">col-2</div>
  <div class="fnd-grid--col-xlg-2">col-2</div>
</div>

<div class="fnd-grid--gutter demo-grid">
  <div class="fnd-grid--col-xlg-3">col-3</div>
  <div class="fnd-grid--col-xlg-3">col-3</div>
  <div class="fnd-grid--col-xlg-3">col-3</div>
  <div class="fnd-grid--col-xlg-3">col-3</div>
</div>

<div class="fnd-grid--gutter demo-grid">
  <div class="fnd-grid--col-xlg-4">col-4</div>
  <div class="fnd-grid--col-xlg-4">col-4</div>
  <div class="fnd-grid--col-xlg-4">col-4</div>
</div>

<div class="fnd-grid--gutter demo-grid">
  <div class="fnd-grid--col-xlg-5">col-5</div>
  <div class="fnd-grid--col-xlg-7">col-7</div>
</div>

<div class="fnd-grid--gutter demo-grid">
  <div class="fnd-grid--col-xlg-6">col-6</div>
  <div class="fnd-grid--col-xlg-6">col-6</div>
</div>

<div class="fnd-grid--gutter demo-grid">
  <div class="fnd-grid--col-xlg-7">col-7</div>
  <div class="fnd-grid--col-xlg-5">col-5</div>
</div>

<div class="fnd-grid--gutter demo-grid">
  <div class="fnd-grid--col-xlg-8">col-8</div>
  <div class="fnd-grid--col-xlg-4">col-4</div>
</div>

<div class="fnd-grid--gutter demo-grid">
  <div class="fnd-grid--col-xlg-9">col-9</div>
  <div class="fnd-grid--col-xlg-3">col-3</div>
</div>

<div class="fnd-grid--gutter demo-grid">
  <div class="fnd-grid--col-xlg-10">col-10</div>
  <div class="fnd-grid--col-xlg-2">col-2</div>
</div>

<div class="fnd-grid--gutter demo-grid">
  <div class="fnd-grid--col-xlg-11">col-11</div>
  <div class="fnd-grid--col-xlg-1">col-1</div>
</div>

<div class="fnd-grid--gutter demo-grid">
  <div class="fnd-grid--col-xlg-12">col-12</div>
</div>
