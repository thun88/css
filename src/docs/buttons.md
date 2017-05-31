---
title: Buttons
description: Soho Foundation Styleguide
---

## Specs

**Default Button**:
{{> specColor title="Default Button Color" spec=default.btnDefaultBg }}
{{> specColor title="Default Button Label Color" spec=default.btnDefaultColor }}
{{> specColor title="Default Button Hover Color" spec=default.btnDefaultHover }}
{{> specValue title="Disabled State Opacity" spec=default.btnDisabledOpacity }}

**Primary Button**
{{> specColor title="Background Color" spec=default.btnPrimaryBg }}
{{> specColor title="Label Color" spec=default.btnPrimaryColor }}
{{> specColor title="Hover Color" spec=default.btnPrimaryHover }}
{{> specValue title="Disabled State Opacity" spec=default.btnDisabledOpacity }}

<blockquote>
    <strong>Note</strong> that buttons can be made to extend the width of their container (aka width: 100%) by using the <code>btn--block</code> class.
</blockquote>

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

## Button Icons

<div class="example">
    <button type="button" class="btn btn--default btn--icon" title="save icon">
        <svg class="icon" focusable="false" aria-hidden="true" role="presentation">
            <use xlink:href="#save"></use>
        </svg>
    </button>
<button type="button" class="btn btn--default" title="save icon">
    <svg class="icon" focusable="false" aria-hidden="true" role="presentation">
        <use xlink:href="#save"></use>
    </svg>
    <span>Button</span>
</button>
<button type="button" class="btn btn--primary btn--icon" title="save icon">
    <svg class="icon" focusable="false" aria-hidden="true" role="presentation">
        <use xlink:href="#save"></use>
    </svg>
</button>
<button type="button" class="btn btn--primary" title="save icon">
    <svg class="icon" focusable="false" aria-hidden="true" role="presentation">
        <use xlink:href="#save"></use>
    </svg>
    <span>Button</span>
</button>
<button type="button" class="btn btn--link btn--icon" title="link icon">
    <svg class="icon" focusable="false" aria-hidden="true" role="presentation">
        <use xlink:href="#link"></use>
    </svg>
    <span>Button</span>
</button>
</div>
```html
<button type="button" class="btn btn--default" title="save icon">
    <svg class="icon" focusable="false" aria-hidden="true" role="presentation">
        <use xlink:href="#save"></use>
    </svg>
    <span>Button</span>
</button>
<button type="button" class="btn btn--link" title="link icon">
    <svg class="icon" focusable="false" aria-hidden="true" role="presentation">
        <use xlink:href="#link"></use>
    </svg>
<span>Button</span>
</button>
```

## Button Hyperlinks

Can be used with `<a>` or `<button>` tags.

<div class="example">
    <a href="" class="btn btn--link">Button</a>
    <a href="" class="btn btn--link" disabled>Button</a>
    <a href="" class="btn btn--link has-focus">Button (focused)</a>
</div>
```html
<a href="" class="btn btn--link">Button</a>
<a href="" class="btn btn--link" disabled>Button</a>
```

## Hyperlinks

<div class="example">
    <a href="#example-link">Hyperlink</a><br>
    <a href="#example-link" disabled>Hyperlink</a><br>
    <a href="#example-link">
        Hyperlink
        <svg class="icon" focusable="false" aria-hidden="true" role="presentation">
            <use xlink:href="#link"></use>
        </svg>
    </a>
</div>
```html
<a href="#example-link">Hyperlink</a>
<a href="#example-link" disabled>Disabled Hyperlink</a>
```
