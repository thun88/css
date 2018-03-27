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

<!---------------------------------------------
  This README.md is generated from readme.hbs
  !!CHANGES TO README.MD WILL BE OVERWRITTEN!!
  --------------------------------------------->

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

  <button type="button" class="ids-btn ids-btn--link" title="icon_add">
    <svg class="ids-icon" focusable="false" aria-hidden="true" role="presentation">
      <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon_add"></use>
    </svg>
  </button>
  <button type="button" class="ids-btn ids-btn--link" title="icon_arrow_down">
    <svg class="ids-icon" focusable="false" aria-hidden="true" role="presentation">
      <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon_arrow_down"></use>
    </svg>
  </button>
  <button type="button" class="ids-btn ids-btn--link" title="icon_arrow_left">
    <svg class="ids-icon" focusable="false" aria-hidden="true" role="presentation">
      <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon_arrow_left"></use>
    </svg>
  </button>
  <button type="button" class="ids-btn ids-btn--link" title="icon_arrow_right">
    <svg class="ids-icon" focusable="false" aria-hidden="true" role="presentation">
      <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon_arrow_right"></use>
    </svg>
  </button>
  <button type="button" class="ids-btn ids-btn--link" title="icon_arrow_up">
    <svg class="ids-icon" focusable="false" aria-hidden="true" role="presentation">
      <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon_arrow_up"></use>
    </svg>
  </button>
  <button type="button" class="ids-btn ids-btn--link" title="icon_attach">
    <svg class="ids-icon" focusable="false" aria-hidden="true" role="presentation">
      <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon_attach"></use>
    </svg>
  </button>
  <button type="button" class="ids-btn ids-btn--link" title="icon_calendar">
    <svg class="ids-icon" focusable="false" aria-hidden="true" role="presentation">
      <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon_calendar"></use>
    </svg>
  </button>
  <button type="button" class="ids-btn ids-btn--link" title="icon_camera">
    <svg class="ids-icon" focusable="false" aria-hidden="true" role="presentation">
      <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon_camera"></use>
    </svg>
  </button>
  <button type="button" class="ids-btn ids-btn--link" title="icon_cart">
    <svg class="ids-icon" focusable="false" aria-hidden="true" role="presentation">
      <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon_cart"></use>
    </svg>
  </button>
  <button type="button" class="ids-btn ids-btn--link" title="icon_close">
    <svg class="ids-icon" focusable="false" aria-hidden="true" role="presentation">
      <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon_close"></use>
    </svg>
  </button>
  <button type="button" class="ids-btn ids-btn--link" title="icon_collapse">
    <svg class="ids-icon" focusable="false" aria-hidden="true" role="presentation">
      <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon_collapse"></use>
    </svg>
  </button>
  <button type="button" class="ids-btn ids-btn--link" title="icon_copy">
    <svg class="ids-icon" focusable="false" aria-hidden="true" role="presentation">
      <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon_copy"></use>
    </svg>
  </button>
  <button type="button" class="ids-btn ids-btn--link" title="icon_cut">
    <svg class="ids-icon" focusable="false" aria-hidden="true" role="presentation">
      <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon_cut"></use>
    </svg>
  </button>
  <button type="button" class="ids-btn ids-btn--link" title="icon_delete">
    <svg class="ids-icon" focusable="false" aria-hidden="true" role="presentation">
      <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon_delete"></use>
    </svg>
  </button>
  <button type="button" class="ids-btn ids-btn--link" title="icon_edit">
    <svg class="ids-icon" focusable="false" aria-hidden="true" role="presentation">
      <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon_edit"></use>
    </svg>
  </button>
  <button type="button" class="ids-btn ids-btn--link" title="icon_expand">
    <svg class="ids-icon" focusable="false" aria-hidden="true" role="presentation">
      <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon_expand"></use>
    </svg>
  </button>
  <button type="button" class="ids-btn ids-btn--link" title="icon_folder">
    <svg class="ids-icon" focusable="false" aria-hidden="true" role="presentation">
      <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon_folder"></use>
    </svg>
  </button>
  <button type="button" class="ids-btn ids-btn--link" title="icon_home">
    <svg class="ids-icon" focusable="false" aria-hidden="true" role="presentation">
      <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon_home"></use>
    </svg>
  </button>
  <button type="button" class="ids-btn ids-btn--link" title="icon_information">
    <svg class="ids-icon" focusable="false" aria-hidden="true" role="presentation">
      <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon_information"></use>
    </svg>
  </button>
  <button type="button" class="ids-btn ids-btn--link" title="icon_insert_image">
    <svg class="ids-icon" focusable="false" aria-hidden="true" role="presentation">
      <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon_insert_image"></use>
    </svg>
  </button>
  <button type="button" class="ids-btn ids-btn--link" title="icon_launch">
    <svg class="ids-icon" focusable="false" aria-hidden="true" role="presentation">
      <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon_launch"></use>
    </svg>
  </button>
  <button type="button" class="ids-btn ids-btn--link" title="icon_link">
    <svg class="ids-icon" focusable="false" aria-hidden="true" role="presentation">
      <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon_link"></use>
    </svg>
  </button>
  <button type="button" class="ids-btn ids-btn--link" title="icon_mail">
    <svg class="ids-icon" focusable="false" aria-hidden="true" role="presentation">
      <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon_mail"></use>
    </svg>
  </button>
  <button type="button" class="ids-btn ids-btn--link" title="icon_map_pin">
    <svg class="ids-icon" focusable="false" aria-hidden="true" role="presentation">
      <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon_map_pin"></use>
    </svg>
  </button>
  <button type="button" class="ids-btn ids-btn--link" title="icon_menu">
    <svg class="ids-icon" focusable="false" aria-hidden="true" role="presentation">
      <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon_menu"></use>
    </svg>
  </button>
  <button type="button" class="ids-btn ids-btn--link" title="icon_minus">
    <svg class="ids-icon" focusable="false" aria-hidden="true" role="presentation">
      <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon_minus"></use>
    </svg>
  </button>
  <button type="button" class="ids-btn ids-btn--link" title="icon_notification">
    <svg class="ids-icon" focusable="false" aria-hidden="true" role="presentation">
      <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon_notification"></use>
    </svg>
  </button>
  <button type="button" class="ids-btn ids-btn--link" title="icon_paste">
    <svg class="ids-icon" focusable="false" aria-hidden="true" role="presentation">
      <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon_paste"></use>
    </svg>
  </button>
  <button type="button" class="ids-btn ids-btn--link" title="icon_print">
    <svg class="ids-icon" focusable="false" aria-hidden="true" role="presentation">
      <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon_print"></use>
    </svg>
  </button>
  <button type="button" class="ids-btn ids-btn--link" title="icon_save">
    <svg class="ids-icon" focusable="false" aria-hidden="true" role="presentation">
      <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon_save"></use>
    </svg>
  </button>
  <button type="button" class="ids-btn ids-btn--link" title="icon_search">
    <svg class="ids-icon" focusable="false" aria-hidden="true" role="presentation">
      <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon_search"></use>
    </svg>
  </button>
  <button type="button" class="ids-btn ids-btn--link" title="icon_search_list">
    <svg class="ids-icon" focusable="false" aria-hidden="true" role="presentation">
      <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon_search_list"></use>
    </svg>
  </button>
  <button type="button" class="ids-btn ids-btn--link" title="icon_settings">
    <svg class="ids-icon" focusable="false" aria-hidden="true" role="presentation">
      <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon_settings"></use>
    </svg>
  </button>
  <button type="button" class="ids-btn ids-btn--link" title="icon_star">
    <svg class="ids-icon" focusable="false" aria-hidden="true" role="presentation">
      <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon_star"></use>
    </svg>
  </button>
