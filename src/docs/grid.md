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
  <div class="fnd-grid--col-4">
    <h4>breakpoint-lg</h4>
  </div>
  <div class="fnd-grid--col-4">
    <h4>breakpoint-md</h4>
  </div>
  <div class="fnd-grid--col-4">
    <h4>breakpoint-sm</h4>
  </div>
</div>

<div class="fnd-grid--gutter">
  <div class="fnd-grid--col-4">
    <div class="fnd-grid demo-grid">
      <div class="fnd-grid--col-12">col-12</div>
    </div>
  </div>
  <div class="fnd-grid--col-4">
    <div class="fnd-grid demo-grid">
      <div class="fnd-grid--col-12">col-12</div>
    </div>
  </div>
  <div class="fnd-grid--col-4">
    <div class="fnd-grid demo-grid">
      <div class="fnd-grid--col-12">col-12</div>
    </div>
  </div>
</div>

<div class="fnd-grid--gutter">
  <div class="fnd-grid--col-4">
    <div class="fnd-grid demo-grid">
      <div class="fnd-grid--col-4">col-4</div>
      <div class="fnd-grid--col-8">col-8</div>
    </div>
  </div>
  <div class="fnd-grid--col-4">
    <div class="fnd-grid demo-grid">
      <div class="fnd-grid--col-4">col-4</div>
      <div class="fnd-grid--col-8">col-8</div>
    </div>
  </div>
  <div class="fnd-grid--col-4">
    <div class="fnd-grid demo-grid">
      <div class="fnd-grid--col-12">col-4</div>
      <div class="fnd-grid--col-12">col-8</div>
    </div>
  </div>
</div>

<div class="fnd-grid--gutter">
  <div class="fnd-grid--col-4">
    <div class="fnd-grid demo-grid">
      <div class="fnd-grid--col-3">col-3</div>
      <div class="fnd-grid--col-9">col-9</div>
    </div>
  </div>
  <div class="fnd-grid--col-4">
    <div class="fnd-grid demo-grid">
      <div class="fnd-grid--col-4">col-3</div>
      <div class="fnd-grid--col-8">col-9</div>
    </div>
  </div>
  <div class="fnd-grid--col-4">
    <div class="fnd-grid demo-grid">
      <div class="fnd-grid--col-12">col-3</div>
      <div class="fnd-grid--col-12">col-9</div>
    </div>
  </div>
</div>

<div class="fnd-grid--gutter">
  <div class="fnd-grid--col-4">
    <div class="fnd-grid demo-grid">
      <div class="fnd-grid--col-3">col-3</div>
      <div class="fnd-grid--col-3">col-3</div>
      <div class="fnd-grid--col-3">col-3</div>
      <div class="fnd-grid--col-3">col-3</div>
    </div>
  </div>
  <div class="fnd-grid--col-4">
    <div class="fnd-grid demo-grid">
      <div class="fnd-grid--col-12">col-3</div>
      <div class="fnd-grid--col-12">col-3</div>
      <div class="fnd-grid--col-12">col-3</div>
      <div class="fnd-grid--col-12">col-3</div>
    </div>
  </div>
  <div class="fnd-grid--col-4">
    <div class="fnd-grid demo-grid">
      <div class="fnd-grid--col-12">col-3</div>
      <div class="fnd-grid--col-12">col-3</div>
      <div class="fnd-grid--col-12">col-3</div>
      <div class="fnd-grid--col-12">col-3</div>
    </div>
  </div>
</div>

<div class="fnd-grid--gutter">
  <div class="fnd-grid--col-4">
    <div class="fnd-grid demo-grid">
      <div class="fnd-grid--col-4">col-4</div>
      <div class="fnd-grid--col-4">col-4</div>
      <div class="fnd-grid--col-4">col-4</div>
    </div>
  </div>
  <div class="fnd-grid--col-4">
    <div class="fnd-grid demo-grid">
      <div class="fnd-grid--col-12">col-4</div>
      <div class="fnd-grid--col-12">col-4</div>
      <div class="fnd-grid--col-12">col-4</div>
    </div>
  </div>
  <div class="fnd-grid--col-4">
    <div class="fnd-grid demo-grid">
      <div class="fnd-grid--col-12">col-4</div>
      <div class="fnd-grid--col-12">col-4</div>
      <div class="fnd-grid--col-12">col-12</div>
    </div>
  </div>
</div>

<div class="fnd-grid--gutter">
  <div class="fnd-grid--col-4">
    <div class="fnd-grid demo-grid">
      <div class="fnd-grid--col-3">col-3</div>
      <div class="fnd-grid--col-6">col-6</div>
      <div class="fnd-grid--col-3">col-3</div>
    </div>
  </div>
  <div class="fnd-grid--col-4">
    <div class="fnd-grid demo-grid">
      <div class="fnd-grid--col-12">col-3</div>
      <div class="fnd-grid--col-12">col-6</div>
      <div class="fnd-grid--col-12">col-3</div>
    </div>
  </div>
  <div class="fnd-grid--col-4">
    <div class="fnd-grid demo-grid">
      <div class="fnd-grid--col-12">col-3</div>
      <div class="fnd-grid--col-12">col-6</div>
      <div class="fnd-grid--col-12">col-3</div>
    </div>
  </div>
</div>





## Grid

<div class="fnd-grid demo-grid">
  <div class="fnd-grid--col-1">col-1</div>
  <div class="fnd-grid--col-1">col-1</div>
  <div class="fnd-grid--col-1">col-1</div>
  <div class="fnd-grid--col-1">col-1</div>
  <div class="fnd-grid--col-1">col-1</div>
  <div class="fnd-grid--col-1">col-1</div>
  <div class="fnd-grid--col-1">col-1</div>
  <div class="fnd-grid--col-1">col-1</div>
  <div class="fnd-grid--col-1">col-1</div>
  <div class="fnd-grid--col-1">col-1</div>
  <div class="fnd-grid--col-1">col-1</div>
  <div class="fnd-grid--col-1">col-1</div>
</div>

<div class="fnd-grid demo-grid">
  <div class="fnd-grid--col-2">col-2</div>
  <div class="fnd-grid--col-2">col-2</div>
  <div class="fnd-grid--col-2">col-2</div>
  <div class="fnd-grid--col-2">col-2</div>
  <div class="fnd-grid--col-2">col-2</div>
  <div class="fnd-grid--col-2">col-2</div>
</div>

<div class="fnd-grid demo-grid">
  <div class="fnd-grid--col-3">col-3</div>
  <div class="fnd-grid--col-3">col-3</div>
  <div class="fnd-grid--col-3">col-3</div>
  <div class="fnd-grid--col-3">col-3</div>
</div>

<div class="fnd-grid demo-grid">
  <div class="fnd-grid--col-4">col-4</div>
  <div class="fnd-grid--col-4">col-4</div>
  <div class="fnd-grid--col-4">col-4</div>
</div>

<div class="fnd-grid demo-grid">
  <div class="fnd-grid--col-5">col-5</div>
  <div class="fnd-grid--col-7">col-7</div>
</div>

<div class="fnd-grid demo-grid">
  <div class="fnd-grid--col-6">col-6</div>
  <div class="fnd-grid--col-6">col-6</div>
</div>

<div class="fnd-grid demo-grid">
  <div class="fnd-grid--col-7">col-7</div>
  <div class="fnd-grid--col-5">col-5</div>
</div>

<div class="fnd-grid demo-grid">
  <div class="fnd-grid--col-8">col-8</div>
  <div class="fnd-grid--col-4">col-4</div>
</div>

<div class="fnd-grid demo-grid">
  <div class="fnd-grid--col-9">col-9</div>
  <div class="fnd-grid--col-3">col-3</div>
</div>

<div class="fnd-grid demo-grid">
  <div class="fnd-grid--col-10">col-10</div>
  <div class="fnd-grid--col-2">col-2</div>
</div>

<div class="fnd-grid demo-grid">
  <div class="fnd-grid--col-11">col-11</div>
  <div class="fnd-grid--col-1">col-1</div>
</div>

<div class="fnd-grid demo-grid">
  <div class="fnd-grid--col-12">col-12</div>
</div>

## Grid with gutter

If you would like gutters with your grid use grid class `.fnd-grid--gutter`.

<div class="fnd-grid--gutter demo-grid">
  <div class="fnd-grid--col-1">col-1</div>
  <div class="fnd-grid--col-1">col-1</div>
  <div class="fnd-grid--col-1">col-1</div>
  <div class="fnd-grid--col-1">col-1</div>
  <div class="fnd-grid--col-1">col-1</div>
  <div class="fnd-grid--col-1">col-1</div>
  <div class="fnd-grid--col-1">col-1</div>
  <div class="fnd-grid--col-1">col-1</div>
  <div class="fnd-grid--col-1">col-1</div>
  <div class="fnd-grid--col-1">col-1</div>
  <div class="fnd-grid--col-1">col-1</div>
  <div class="fnd-grid--col-1">col-1</div>
</div>

<div class="fnd-grid--gutter demo-grid">
  <div class="fnd-grid--col-2">col-2</div>
  <div class="fnd-grid--col-2">col-2</div>
  <div class="fnd-grid--col-2">col-2</div>
  <div class="fnd-grid--col-2">col-2</div>
  <div class="fnd-grid--col-2">col-2</div>
  <div class="fnd-grid--col-2">col-2</div>
</div>

<div class="fnd-grid--gutter demo-grid">
  <div class="fnd-grid--col-3">col-3</div>
  <div class="fnd-grid--col-3">col-3</div>
  <div class="fnd-grid--col-3">col-3</div>
  <div class="fnd-grid--col-3">col-3</div>
</div>

<div class="fnd-grid--gutter demo-grid">
  <div class="fnd-grid--col-4">col-4</div>
  <div class="fnd-grid--col-4">col-4</div>
  <div class="fnd-grid--col-4">col-4</div>
</div>

<div class="fnd-grid--gutter demo-grid">
  <div class="fnd-grid--col-5">col-5</div>
  <div class="fnd-grid--col-7">col-7</div>
</div>

<div class="fnd-grid--gutter demo-grid">
  <div class="fnd-grid--col-6">col-6</div>
  <div class="fnd-grid--col-6">col-6</div>
</div>

<div class="fnd-grid--gutter demo-grid">
  <div class="fnd-grid--col-7">col-7</div>
  <div class="fnd-grid--col-5">col-5</div>
</div>

<div class="fnd-grid--gutter demo-grid">
  <div class="fnd-grid--col-8">col-8</div>
  <div class="fnd-grid--col-4">col-4</div>
</div>

<div class="fnd-grid--gutter demo-grid">
  <div class="fnd-grid--col-9">col-9</div>
  <div class="fnd-grid--col-3">col-3</div>
</div>

<div class="fnd-grid--gutter demo-grid">
  <div class="fnd-grid--col-10">col-10</div>
  <div class="fnd-grid--col-2">col-2</div>
</div>

<div class="fnd-grid--gutter demo-grid">
  <div class="fnd-grid--col-11">col-11</div>
  <div class="fnd-grid--col-1">col-1</div>
</div>

<div class="fnd-grid--gutter demo-grid">
  <div class="fnd-grid--col-12">col-12</div>
</div>

## Example with "cards"

Taken from soho, this is an example using the grid to control cards.

<div class="fnd-grid--gutter card-grid">
  <div class="fnd-grid--col-4">
    <div class="card">
      <div class="card--header">
        <h2 class="card--header--title">This is a card contained by col-4</h2>
      </div>
      <div class="card--content">
      </div>
    </div>
  </div>
  <div class="fnd-grid--col-8">
    <div class="card">
      <div class="card--header">
        <h2 class="card--header--title">This is a card contained by col-8</h2>
      </div>
      <div class="card--content">
      </div>
    </div>
  </div>
</div>
