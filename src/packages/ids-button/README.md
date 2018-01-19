---
title: Buttons
description: This page describes how the buttons and button styles are used.
system:
- category: elements
- name: buttons
demo:
  path: /ids-button/index.html
specs:
- title: Default Button Color
  spec: btnDefaultBg
- title: Default Button Label Color
  spec: btnDefaultColor
- title: Default Button Hover Color
  spec: btnDefaultHover
- title: Default Disabled State Opacity
  spec: btnDisabledOpacity
- title: Primary Background Color
  spec: btnPrimaryBg
- title: Primary Label Color
  spec: btnPrimaryColor
- title: Primary Hover Color
  spec: btnPrimaryHover
- title: Primary Disabled State Opacity
  valueType: true
  spec: btnDisabledOpacity
---


## Button Tags

Use the button classes on and `<a>`, `<button>`, `<input>` elements. As a best practice, we highly recommend using the `<button>` element whenever possible to ensure matching cross-browser rendering. If the `<a>` elements are used to act as buttons – triggering in-page functionality, rather than navigating to another document or section within the current page – they should also be given an appropriate `role="button"`.

```html
<a class="ids-btn ids-btn--default" href="#" role="button">Link</a>
<button class="ids-btn ids-btn--default" type="submit">Button</button>
<input class="ids-btn ids-btn--default" type="button" value="Input">
<input class="ids-btn ids-btn--default" type="submit" value="Submit">
```

## Options

Use any of the available button classes to quickly create a styled button.

```html
<button type="button" class="ids-btn ids-btn--default">Default</button>
<button type="button" class="ids-btn ids-btn--primary">Primary</button>
```

By default, buttons are a dynamic width and the size will be as wide as the button text, with some additional padding. Buttons can be made to extend 100% of the width of their container by using the <code>ids-btn--block</code> class.

## Disabled State

```html
<button type="button" class="ids-btn ids-btn--default" disabled>Button</button>
```

## Focused State

To mimic the "focus" state, you can use the class `has-focus` on a button or link.

```html
<button type="button" class="ids-btn ids-btn--default">Button</button>
```

## Button Hyperlinks

Can be used with `<a>` or `<button>` tags.

```html
<a href="#" class="ids-btn ids-btn--link">Button</a>
<a href="#" class="ids-btn ids-btn--link" disabled>Button</a>
<button type="button" class="ids-btn ids-btn--link" title="link icon">
    <svg class="ids-icon" focusable="false" aria-hidden="true" role="presentation">
        <use xlink:href="#link"></use>
    </svg>
    <span>Button</span>
</button>
<button type="button" class="ids-btn ids-btn--link" title="save icon">
    <svg class="ids-icon" focusable="false" aria-hidden="true" role="presentation">
        <use xlink:href="#save"></use>
    </svg>
</button>
```

## Hyperlinks

```html
<a href="#">Hyperlink</a>
<a href="#" disabled>Disabled Hyperlink</a>
```
