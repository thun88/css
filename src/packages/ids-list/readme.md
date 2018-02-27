---
title: Lists
description: Some text about using ids-list.
demo:
  path: /ids-list/index.html
---

To create a plain list, use `.ids-list`. If you'd like dividers in between, also add `.ids-list--dividers`.

```html
<ul class="ids-list ids-list--dividers">
  <li class="ids-list--heading">Heading 1</li>
  <li class="ids-list--item">One</li>
  <li class="ids-list--item">Two</li>
</ul>
```

Use `.ids-list--item` to denote what should be the list item. It can be on any tag but would generally recommend using it on an `<a>` tag if the item is actionable. The `ids-list--item--selected` class denotes a list item which should appear selected.

Lists can also be nested up to 3 levels deep:

```html
<h1 class="ids-list--heading">Heading 1</h1>
<ul class="ids-list">
  <li><a class="ids-list--item ids-list--item--selected">Selected Item</a></li>
  <li><a class="ids-list--item">Two</a></li>
  <li>
    <!--- Nested list -->
    <h2 class="ids-list--heading">Heading 2</h2>
    <ul class="ids-list">
      <li><a class="ids-list--item">Sub One</a></li>
      <li><a class="ids-list--item">Sub Two</a></li>
      <li>
        <!--- Nested list -->
        <div class="ids-list--heading">Heading 3</div>
        <ul class="ids-list">
          <li><a class="ids-list--item">Sub One</a></li>
          <li><a class="ids-list--item">Sub Two</a></li>
        </ul>
      </li>
    </ul>
  </li>
</ul>
```

**Note:** Any tag using `.ids-list--heading` will look the same. This allows you to maintain tag hierarchy without affecting the style of the list.

Some other helpful classes:
- `ids-list--striped` Even rows will be lightly shaded
- `ids-list--hover` Hovering over `.ids-list--item` (`<a>` and `<button>` tags only) will have a hover effect.
