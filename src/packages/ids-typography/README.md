---
title: Typography
description: These are typical type classes you'll have available.
demo:
  path: /ids-typography/index.html
system:
  category: identity
  name: fonts-colors
specs:
- title: Secondary Header Font Size
  spec: headerSecondaryFontSize
  valueType: true
- title: Base Font Size
  spec: fontSizeBase
  valueType: true
- title: Small Font Size
  spec: textSmall
  valueType: true
- title: Default Text Color
  spec: bodyColor
- title: Descriptive Text Color
  spec: textDescriptive
- title: Muted Text Color
  spec: textMuted
- title: Link Text Color
  spec: linkColor
- title: Alert Text Color
  spec: textAlert
---

## Standard Type Settings

```html
<h1>Primary Header</h1>
<h2>Secondary Header</h2>
<div>Base Text</div>
<small>Small Text</small>
```

You can also use the classes `ids-header--primary` and `ids-header--secondary` to emulate `<h1>` and `<h2>` styles without using those specific tags. `<strong>`, `<em>`, and `<small>` all behave as you would expect.

## Type Utility Clases

Text utility classes are provided to emulate certain type styles by applying classes. `.ids-text-descriptive` changes the <span class="ids-text-descriptive">color of descriptive text to a shade lighter</span>, `.ids-text-muted` makes the <span class="ids-text-muted">color of text muted</span>, and `.ids-text-alert` makes text <span class="ids-text-alert">Alert Red</span>. `.ids-text-link` allows you to <span class="ids-text-link">make text a link style</span> even when it's not in an `<a>` tag. Use `.ids-text-strong` to make text <span class="ids-text-strong">strong</span>, `.ids-text-emphasis` to makes it <span class="ids-text-emphasis">emphasized</span> and `.ids-text-small` makes it <span class="ids-text-small">smaller</small>.

## Lists

For `<ol>` and `<ul>`, the default is to show the default `decimal` or `disc` `list-style-type`. If you want a plain ordered or un-ordered list without the list indicator, use `.ids-list--plain`.
