---
title: Icons
description: Basic icons for IUX.
---

To be able to x:link the icons into your app, you will need to copy `dist/inline-icons.svg` contents into the top of your `<body>` tag for your html pages. You can hide it with a class we proivde: `visuallyhidden`.

## Examples of icon use:

### As a standalone icon:

<div class="example">
    <div title="icon_star icon">
        <svg class="iux-icon" focusable="false" aria-hidden="true" role="presentation">
            <use xlink:href="#icon_star"></use>
        </svg>
    </div>
</div>
```html
<div title="icon_star icon">
    <svg class="iux-icon" focusable="false" aria-hidden="true" role="presentation">
        <use xlink:href="#icon_star"></use>
    </svg>
</div>
```

### As an inline icon:

<div class="example">
    This icon
    <span title="icon_star icon">
        <svg class="iux-icon" focusable="false" aria-hidden="true" role="presentation">
            <use xlink:href="#icon_star"></use>
        </svg>
    </span>
    has text around it.
</div>
```html
<span title="icon_star icon">
    <svg class="iux-icon" focusable="false" aria-hidden="true" role="presentation">
        <use xlink:href="#icon_star"></use>
    </svg>
</span>
```

## Button examples of all standard icons

The examples below are shown in buttons, as that is their most common use.

<button type="button" class="iux-btn iux-btn--link" title="icon_close">
  <svg class="iux-icon" focusable="false" aria-hidden="true" role="presentation">
      <use xlink:href="#icon_close"></use>
  </svg>
</button>

<button type="button" class="iux-btn iux-btn--link" title="icon_expand">
  <svg class="iux-icon" focusable="false" aria-hidden="true" role="presentation">
      <use xlink:href="#icon_expand"></use>
  </svg>
</button>

<button type="button" class="iux-btn iux-btn--link" title="icon_folder">
  <svg class="iux-icon" focusable="false" aria-hidden="true" role="presentation">
      <use xlink:href="#icon_folder"></use>
  </svg>
</button>

<button type="button" class="iux-btn iux-btn--link" title="icon_lookup">
  <svg class="iux-icon" focusable="false" aria-hidden="true" role="presentation">
      <use xlink:href="#icon_lookup"></use>
  </svg>
</button>

<button type="button" class="iux-btn iux-btn--link" title="icon_minus">
  <svg class="iux-icon" focusable="false" aria-hidden="true" role="presentation">
      <use xlink:href="#icon_minus"></use>
  </svg>
</button>

<button type="button" class="iux-btn iux-btn--link" title="icon_plus">
  <svg class="iux-icon" focusable="false" aria-hidden="true" role="presentation">
      <use xlink:href="#icon_plus"></use>
  </svg>
</button>

<button type="button" class="iux-btn iux-btn--link" title="icon_search">
  <svg class="iux-icon" focusable="false" aria-hidden="true" role="presentation">
      <use xlink:href="#icon_search"></use>
  </svg>
</button>

<button type="button" class="iux-btn iux-btn--link" title="icon_star">
  <svg class="iux-icon" focusable="false" aria-hidden="true" role="presentation">
      <use xlink:href="#icon_star"></use>
  </svg>
</button>
