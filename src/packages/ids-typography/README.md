---
title: Typography
description: These are typical type classes you'll have available.
demo:
  path: /ids-typography/index.html
system:
  category: identity
  name: typography
tokensCategory: font
---

## Standard Type Settings

```html
<h1>Primary Header</h1>
<h2>Secondary Header</h2>
<div>Base Text</div>
<small>Small Text</small>
```

## Hyperlinks

```html
<a href="#">Hyperlink</a>
<a href="#" disabled>Disabled Hyperlink</a>
```

You can also use the classes `ids-header--primary` and `ids-header--secondary` to emulate `<h1>` and `<h2>` styles without using those specific tags. `<strong>`, `<em>`, and `<small>` all behave as you would expect.

## Type Utility Clases

<!-- markdownlint-disable MD033 -->
Text utility classes are provided to emulate certain type styles by applying classes. `.ids-text--muted` makes the <span class="ids-text--muted">color of text muted</span>, and `.ids-text--alert` makes text <span class="ids-text--alert">Alert Red</span>. `.ids-text--link` allows you to <span class="ids-text--link">make text a link style</span> even when it's not in an `<a>` tag. Use `.ids-text--strong` to make text <span class="ids-text--strong">strong</span>, `.ids-text--emphasis` to makes it <span class="ids-text--emphasis">emphasized</span> and `.ids-text--small` makes it <span class="ids-text--small">smaller</small>.
<!-- markdownlint-enable MD033 -->

## Lists

For `<ol>` and `<ul>`, the default is to show the default `decimal` or `disc` `list-style-type`.

- Apples
- Oranges
- Bananas

An `<ol>` example:

1. First Place
2. Second Place
3. Third Place
