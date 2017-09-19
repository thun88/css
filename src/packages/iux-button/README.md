---
title: Buttons
description: This page describes how the buttons and button styles are used in foundation.
specs: [
    {{> specMd title="Default Button Color" spec=default.btnDefaultBg }},
    {{> specMd title="Default Button Label Color" spec=default.btnDefaultColor }},
    {{> specMd title="Default Button Hover Color" spec=default.btnDefaultHover }},
    {{> specMd title="Default Disabled State Opacity" spec=default.btnDisabledOpacity }},
    {{> specMd title="Primary Background Color" spec=default.btnPrimaryBg }},
    {{> specMd title="Primary Label Color" spec=default.btnPrimaryColor }},
    {{> specMd title="Primary Hover Color" spec=default.btnPrimaryHover }},
    {{> specMd title="Primary Disabled State Opacity" spec=default.btnDisabledOpacity }}
]
---


## Button Tags

Use the button classes on and `<a>`, `<button>`, `<input>` elements. As a best practice, we highly recommend using the `<button>` element whenever possible to ensure matching cross-browser rendering. If the `<a>` elements are used to act as buttons – triggering in-page functionality, rather than navigating to another document or section within the current page – they should also be given an appropriate `role="button"`.

<div class="example">
    <a class="btn btn--default" href="#" role="button">Link</a>
    <button class="btn btn--default" type="submit">Button</button>
    <input class="btn btn--default" type="button" value="Input">
    <input class="btn btn--default" type="submit" value="Submit">
</div>
```html
<a class="btn btn--default" href="#" role="button">Link</a>
<button class="btn btn--default" type="submit">Button</button>
<input class="btn btn--default" type="button" value="Input">
<input class="btn btn--default" type="submit" value="Submit">
```

## Options

Use any of the available button classes to quickly create a styled button.

<div class="example">
    <button type="button" class="btn btn--default">Default</button>&nbsp;
    <button type="button" class="btn btn--primary">Primary</button>&nbsp;
</div>
```html
<button type="button" class="btn btn--default">Default</button>
<button type="button" class="btn btn--primary">Primary</button>
```

By default, buttons are a dynamic width and the size will be as wide as the button text, with some additional padding. Buttons can be made to extend 100% of the width of their container by using the <code>btn--block</code> class.

## Disabled State

<div class="example">
    <button type="button" class="btn btn--default" disabled>Button</button>&nbsp;
    <button type="button" class="btn btn--primary" disabled>Primary Button</button>&nbsp;
</div>
```html
<button type="button" class="btn btn--default" disabled>Button</button>
```

## Focused State

To mimic the "focus" state, you can use the class `has-focus` on a button or link.

<div class="example">
    <button type="button" class="btn btn--default has-focus">Button</button>&nbsp;
</div>
```html
<button type="button" class="btn btn--default">Button</button>
```

## Button Hyperlinks

Can be used with `<a>` or `<button>` tags.

<div class="example">
    <a href="#" class="btn btn--link">Button</a>
    <a href="#" class="btn btn--link" disabled>Button</a>
    <a href="#" class="btn btn--link has-focus">Button (focused)</a>
    <button type="button" class="btn btn--link" title="link icon">
        <svg class="icon" focusable="false" aria-hidden="true" role="presentation">
            <use xlink:href="#link"></use>
        </svg>
        <span>Button</span>
    </button>
    <button type="button" class="btn btn--link" title="save icon">
        <svg class="icon" focusable="false" aria-hidden="true" role="presentation">
            <use xlink:href="#save"></use>
        </svg>
    </button>
</div>
```html
<a href="#" class="btn btn--link">Button</a>
<a href="#" class="btn btn--link" disabled>Button</a>
<button type="button" class="btn btn--link" title="link icon">
    <svg class="icon" focusable="false" aria-hidden="true" role="presentation">
        <use xlink:href="#link"></use>
    </svg>
    <span>Button</span>
</button>
<button type="button" class="btn btn--link" title="save icon">
    <svg class="icon" focusable="false" aria-hidden="true" role="presentation">
        <use xlink:href="#save"></use>
    </svg>
</button>
```

## Hyperlinks

<div class="example">
    <a href="#">Hyperlink</a><br>
    <a href="#" disabled>Hyperlink</a><br>
    <a href="#">
        Hyperlink
        <svg class="icon" focusable="false" aria-hidden="true" role="presentation">
            <use xlink:href="#link"></use>
        </svg>
    </a>
</div>
```html
<a href="#">Hyperlink</a>
<a href="#" disabled>Disabled Hyperlink</a>
```
