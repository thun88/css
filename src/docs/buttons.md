---
title: Buttons
description: Soho Foundation Styleguide
---

## Specs

```css
{
{{#each default.buttons}}
    {{@key}}: {{this}};
{{/each}}
{{#each default.buttonPrimary}}
    {{@key}}: {{this}};
{{/each}}
}
```

<blockquote>
    <strong>Note</strong> that buttons can be made to extend the width of their container (aka width: 100%) by using the <code>btn-block</code> class.
</blockquote>

## Button Tags

Use the button classes on and `<a>`, `<button>`, `<input>` elements. As a best practice, we highly recommend using the `<button>` element whenever possible to ensure matching cross-browser rendering. If the `<a>` elements are used to act as buttons – triggering in-page functionality, rather than navigating to another document or section within the current page – they should also be given an appropriate `role="button"`.

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

## Options

Use any of the available button classes to quickly create a styled button.

<div class="example">
    <button type="button" class="btn btn-default">Default</button>&nbsp;
    <button type="button" class="btn btn-primary">Primary</button>&nbsp;
</div>
```html
<button type="button" class="btn btn-default">Default</button>
<button type="button" class="btn btn-primary">Primary</button>
```


## Disabled State

<div class="example">
    <button type="button" class="btn btn-default" disabled>Button</button>&nbsp;
    <button type="button" class="btn btn-primary" disabled>Primary Button</button>&nbsp;
</div>
```html
<button type="button" class="btn btn-default" disabled>Button</button>
```

## Focused State

<div class="example">
    <button type="button" class="btn btn-default example-focus">Button</button>&nbsp;
</div>
```html
<button type="button" class="btn btn-default">Button</button>
```

## Button Icons

<div class="example">
    <button type="button" class="btn btn-default btn-icon" title="save icon">
        <svg class="icon" focusable="false" aria-hidden="true" role="presentation">
            <use xlink:href="#save"></use>
        </svg>
    </button>
<button type="button" class="btn btn-default" title="save icon">
    <svg class="icon" focusable="false" aria-hidden="true" role="presentation">
        <use xlink:href="#save"></use>
    </svg>
    <span>Button</span>
</button>
<button type="button" class="btn btn-primary btn-icon" title="save icon">
    <svg class="icon" focusable="false" aria-hidden="true" role="presentation">
        <use xlink:href="#save"></use>
    </svg>
</button>
<button type="button" class="btn btn-primary" title="save icon">
    <svg class="icon" focusable="false" aria-hidden="true" role="presentation">
        <use xlink:href="#save"></use>
    </svg>
    <span>Button</span>
</button>
<button type="button" class="btn btn-link btn-icon" title="link icon">
    <svg class="icon" focusable="false" aria-hidden="true" role="presentation">
        <use xlink:href="#link"></use>
    </svg>
    <span>Button</span>
</button>
</div>
```html
<button type="button" class="btn btn-default" title="save icon">
    <svg class="icon" focusable="false" aria-hidden="true" role="presentation">
        <use xlink:href="#save"></use>
    </svg>
    <span>Button</span>
</button>
<button type="button" class="btn btn-link" title="link icon">
    <svg class="icon" focusable="false" aria-hidden="true" role="presentation">
        <use xlink:href="#link"></use>
    </svg>
<span>Button</span>
</button>
```

## Button Links

<div class="example">
    <a href="" class="btn btn-link">Button</a>
    <a href="" class="btn btn-link" disabled>Button</a>
    <a href="" class="btn btn-link example-focus">Button (focused)</a>
</div>
```html
<a href="" class="btn btn-link">Button</a>
<a href="" class="btn btn-link" disabled>Button</a>
```

## Links

<div class="example">
    <a href="#example-link">Link</a><br>
    <a href="#example-link" disabled>Link</a><br>
    <a href="#example-link">
        Link
        <svg class="icon" focusable="false" aria-hidden="true" role="presentation">
            <use xlink:href="#link"></use>
        </svg>
    </a>
</div>
```html
<a href="#example-link">Link</a>
<a href="#example-link" disabled>Disabled Link</a>
```
