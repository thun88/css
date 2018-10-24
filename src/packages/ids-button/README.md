---
title: Buttons
description: This page describes how the buttons and button styles are used.
system:
  category: elements
  name: buttons
demo:
  path: /ids-button/index.html
tokensCategory: button
---

## Button Tags

Use the button classes on and `<a>`, `<button>`, `<input>` elements. As a best practice, we highly recommend using the `<button>` element whenever
possible to ensure matching cross-browser rendering. If the `<a>` elements are used to act as buttons – triggering in-page functionality, rather
than navigating to another document or section within the current page – they should also be given an appropriate `role="button"`.

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

By default, buttons are a dynamic width and the size will be as wide as the button text, with some additional padding.
Buttons can be made to extend 100% of the width of their container by using the `ids-btn--block` class.

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
```

## Buttons and Icons

You can add icons into the button content as well with text or by itself.

```html
<button type="button" class="ids-btn ids" title="Star icon beside text button">
    <svg class="ids-icon" focusable="false" aria-hidden="true" role="presentation">
        <use xlink:href="#icon_star"></use>
    </svg>
    <span>Star Icon left of button Text</span>
</button>
<button type="button" class="ids-btn" title="Star icon button">
    <svg class="ids-icon" focusable="false" aria-hidden="true" role="presentation">
        <use xlink:href="#icon_star"></use>
    </svg>
</button>
```
