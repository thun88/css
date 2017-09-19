---
title: Typography
description: These are typical type classes you'll have available.
specs: [
    {{> specMd title="Secondary Header Font Size" spec=default.headerSecondaryFontSize }},
    {{> specMd title="Base Font Size" spec=default.fontSizeBase }},
    {{> specMd title="Small Font Size" spec=default.textSmall }},
    {{> specMd title="Default Text Color" spec=default.bodyColor }},
    {{> specMd title="Descriptive Text Color" spec=default.textDescriptive }},
    {{> specMd title="Muted Text Color" spec=default.textMuted }},
    {{> specMd title="Link Text Color" spec=default.linkColor }},
    {{> specMd title="Alert Text Color" spec=default.textAlert }}
]
---

## Standard Type Settings

```html
<h1>Primary Header</h1>
<h2>Secondary Header</h2>
<div>Base Text</div>
<small>Small Text</small>
```

You can also use the classes `header--primary` and `header--secondary` to emulate `<h1>` and `<h2>` styles without using those specific tags. `<strong>`, `<em`, and `<small>` all behave as you would expect.

## Type Utility Clases

Text utility classes are provided to emulate certain type styles by applying classes. `.text-descriptive` changes the <span class="text-descriptive">color of descriptive text to a shade lighter</span>, `.text-muted` makes the <span class="text-muted">color of text muted</span>, and `.text-alert` makes text <span class="text-alert">Alert Red</span>. `.text-link` allows you to <span class="text-link">make text a link style</span> even when it's not in an `<a>` tag. Use `.text-strong` to make text <span class="text-strong">strong</span>, `.text-emphasis` to makes it <span class="text-emphasis">emphasized</span> and `.text-small` makes it <span class="text-small">smaller</small>.
