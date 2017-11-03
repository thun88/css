---
title: Icons
description: Infor UX Styleguide
specs:
---


# Standard Icons

To be able to x:link the icons into your app, you will need to copy `dist/icons.svg` contents into the top of your `<body>` tag for your html pages.

## Examples of icon use:

### As a standalone icon:

<div class="example">
    <div title="star-filled icon">
        <svg class="icon" focusable="false" aria-hidden="true" role="presentation">
            <use xlink:href="#star-filled"></use>
        </svg>
    </div>
</div>
```html
<div title="star-filled icon">
    <svg class="icon" focusable="false" aria-hidden="true" role="presentation">
        <use xlink:href="#star-filled"></use>
    </svg>
</div>
```
### As an inline icon:

<div class="example">
    This icon
    <span title="star-filled icon">
        <svg class="icon" focusable="false" aria-hidden="true" role="presentation">
            <use xlink:href="#star-filled"></use>
        </svg>
    </span>
    has text around it.
</div>
```html
<span title="star-filled icon">
    <svg class="icon" focusable="false" aria-hidden="true" role="presentation">
        <use xlink:href="#star-filled"></use>
    </svg>
</span>
```

## Button examples of all standard icons

The examples below are shown in buttons, as that is their most common use.

<div class='iux-row'>
    {{#each svgIcons}}
        <div class="iux-row--col-md-2 text--center">
            <div class="example">
                <button type="button" class="btn btn-link" title="{{this}}">
                <svg class="icon" focusable="false" aria-hidden="true" role="presentation">
                    <use xlink:href="#{{this}}"></use>
                </svg>
                </button>
                {{this}}
            </div>
        </div>
    {{/each}}
</div>
