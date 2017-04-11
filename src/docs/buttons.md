---
title: Buttons
description: Soho Foundation Styleguide
---

# Buttons

## Specs

```css
{
{{#each buttons}}
  {{this.name}}: {{this.value}};
{{/each}}
}
```


## Button Tags

Use the button classes on and `<a>`, `<button>`, `<input>` elements.

<div class="example">
  <a class="btn btn-default" href="#" role="button">Link</a>
  <button class="btn btn-default" type="submit">Button</button>
  <input class="btn btn-default" type="button" value="Input">
  <input class="btn btn-default" type="submit" value="Submit">
</div>
```html
<a class="btn btn-default" href="#" role="button">Link</a>
<button class="btn btn-default" type="submit">Button</button>
<input class="btn btn-default" type="button" value="Input">
<input class="btn btn-default" type="submit" value="Submit">

```

> Context-specific usage
> While button classes can be used on `<a>` and `<button>` elements, only `<button>` elements are supported within our nav and navbar components.

> Links acting as buttons
> If the <a> elements are used to act as buttons – triggering in-page functionality, rather than navigating to another document or section within the current page – they should also be given an appropriate role="button".

> Cross-browser rendering
> As a best practice, we highly recommend using the `<button>` element whenever possible to ensure matching cross-browser rendering.

> Among other things, there"s a bug in Firefox &lt; 30 that prevents us from setting the line-height of `<input>`-based buttons, causing them to not exactly match the height of other buttons on Firefox.


## Options

Use any of the available button classes to quickly create a styled button.

<div class="example">
  <button type="button" class="btn btn-default">Default</button>&nbsp;
  <button type="button" class="btn btn-primary">Primary</button>&nbsp;
  <button type="button" class="btn btn-warning">Warning</button>
</div>
```html
<button type="button" class="btn btn-default">Default</button>
<button type="button" class="btn btn-primary">Primary</button>
<button type="button" class="btn btn-warning">Warning</button>
```


## Disabled State

<div class="example">
  <button type="button" class="btn btn-default" disabled>Button</button>&nbsp;
  <button type="button" class="btn btn-primary" disabled>Primary Button</button>&nbsp;
  <button type="button" class="btn btn-warning" disabled>Warning Button</button>
</div>
```html
<button type="button" class="btn btn-default" disabled>Button</button>
```

## Focused State

<div class="example">
  <button type="button" class="btn btn-default has-focus">Button</button>&nbsp;
  <button type="button" class="btn btn-primary has-focus">Primary Button</button>&nbsp;
  <button type="button" class="btn btn-warning has-focus">Warning Button</button>
</div>
```html
<button type="button" class="btn btn-default has-focus">Button</button>
```


## Link Buttons

<div class="example">
  <a href="" class="btn btn-link">Link Button</a>
  <a href="" class="btn btn-link" disabled>Link Button</a>
  <a href="" class="btn btn-link has-focus">Link Button</a>
</div>
```html
<a href="" class="btn btn-link">Link Button</a>
<a href="" class="btn btn-link" disabled>Link Button</a>
```


## Icon Buttons

<div class="example">
  <a href="" class="btn btn-default">
    Button Icon
    <svg class="icon" focusable="false" aria-hidden="true" role="presentation">
      <use xlink:href="#star-filled"></use>
    </svg>
  </a>
</div>
```html
<a href="" class="btn btn-default">
  Button Icon
  <svg class="icon" focusable="false" aria-hidden="true" role="presentation">
    <use xlink:href="#star-filled"></use>
  </svg>
</a>
```
