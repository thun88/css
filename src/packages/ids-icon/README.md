---
title: Icons
description: Basic icons for IDS.
system:
  category: identity
  name: icons
demo:
  path: /ids-icon/index.html
tokensCategory: icons
---

To be able to x:link the icons into your app, you will need to copy `dist/ids-icons.svg` contents into the top of your `<body>` tag for your html pages. You can hide it with a class we proivde: `visuallyhidden`.

## Examples of icon use:

### As a standalone icon:

<div class="example">
  <div title="icon_star icon">
    <svg class="ids-icon" focusable="false" aria-hidden="true" role="presentation">
      <use xlink:href="#icon_star"></use>
    </svg>
  </div>
</div>
```html
<div title="icon_star icon">
  <svg class="ids-icon" focusable="false" aria-hidden="true" role="presentation">
    <use xlink:href="#icon_star"></use>
  </svg>
</div>
```

### As an inline icon:

<div class="example">
  This icon
  <span title="icon_star icon">
    <svg class="ids-icon" focusable="false" aria-hidden="true" role="presentation">
      <use xlink:href="#icon_star"></use>
    </svg>
  </span>
  has text around it.
</div>
```html
<span title="icon_star icon">
  <svg class="ids-icon" focusable="false" aria-hidden="true" role="presentation">
    <use xlink:href="#icon_star"></use>
  </svg>
</span>
```

## Button examples of all standard icons

The examples below are shown in buttons, as that is their most common use.

<button type="button" class="ids-btn ids-btn--link" title="icon_close">
  <svg class="ids-icon" focusable="false" aria-hidden="true" role="presentation">
    <use xlink:href="#icon_close"></use>
  </svg>
</button>

<button type="button" class="ids-btn ids-btn--link" title="icon_expand">
  <svg class="ids-icon" focusable="false" aria-hidden="true" role="presentation">
    <use xlink:href="#icon_expand"></use>
  </svg>
</button>

<button type="button" class="ids-btn ids-btn--link" title="icon_folder">
  <svg class="ids-icon" focusable="false" aria-hidden="true" role="presentation">
    <use xlink:href="#icon_folder"></use>
  </svg>
</button>

<button type="button" class="ids-btn ids-btn--link" title="icon_lookup">
  <svg class="ids-icon" focusable="false" aria-hidden="true" role="presentation">
    <use xlink:href="#icon_lookup"></use>
  </svg>
</button>

<button type="button" class="ids-btn ids-btn--link" title="icon_minus">
  <svg class="ids-icon" focusable="false" aria-hidden="true" role="presentation">
    <use xlink:href="#icon_minus"></use>
  </svg>
</button>

<button type="button" class="ids-btn ids-btn--link" title="icon_plus">
  <svg class="ids-icon" focusable="false" aria-hidden="true" role="presentation">
    <use xlink:href="#icon_plus"></use>
  </svg>
</button>

<button type="button" class="ids-btn ids-btn--link" title="icon_search">
  <svg class="ids-icon" focusable="false" aria-hidden="true" role="presentation">
    <use xlink:href="#icon_search"></use>
  </svg>
</button>

<button type="button" class="ids-btn ids-btn--link" title="icon_star">
  <svg class="ids-icon" focusable="false" aria-hidden="true" role="presentation">
    <use xlink:href="#icon_star"></use>
  </svg>
</button>

<button type="button" class="ids-btn ids-btn--link" title="icon_information">
  <svg class="ids-icon" focusable="false" aria-hidden="true" role="presentation">
    <use xlink:href="#icon_information"></use>
  </svg>
</button>
