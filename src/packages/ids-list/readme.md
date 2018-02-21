---
title: Lists
description: Some text about using ids-list.
demo:
  path: /ids-list/index.html
---

To create a plain list, use `.ids-list--plain`. If you'd like dividers in between, also add `.ids-list--plain--dividers`.

```html
<ul class="ids-list--plain ids-list--plain--dividers">
  <li class="ids-list--heading">Heading 1</li>
  <li class="ids-list--item">One</li>
  <li class="ids-list--item">Two</li>
</ul>
```

Use `.ids-list--item` to denote what should be the list item. It can be on any tag but would generally recommend using it on an `<a>` tag if the item is actionable. The `ids-list--item--selected` class denotes a list item which should appear selected.

Lists can also be nested up to 3 levels deep:

```html
<ul class="ids-list--plain">
  <li class="ids-list--heading">Heading 1</li>
  <li><a class="ids-list--item ids-list--item--selected">Selected Item</a></li>
  <li><a class="ids-list--item">Two</a></li>
  <!--- Nested list -->
  <li class="ids-list--heading">Heading 2</li>
  <li>
    <ul class="ids-list--plain">
      <li><a class="ids-list--item">Sub One</a></li>
      <li><a class="ids-list--item">Sub Two</a></li>
      <!--- Nested list -->
      <li class="ids-list--heading">Heading 3</li>
      <li>
        <ul class="ids-list--plain">
          <li><a class="ids-list--item">Sub One</a></li>
          <li><a class="ids-list--item">Sub Two</a></li>
        </ul>
      </li>
    </ul>
  </li>
</ul>
```
