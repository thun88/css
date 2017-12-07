---
title: IUX Select
description: This page describes how the buttons and button styles are used.
demo:
  path: /iux-select/select.html
---

## Select

```html
<div class="iux-select">
    <input type="text" class="form-control iux-select--input" placeholder="Select one" />
    <ul class="iux-select--menu">
        <li class="is-selected" data-value="Option 1">Option 1</li>
        <li data-value="Option 2">Option 2</li>
        <li data-value="Option 3">Option 3</li>
        <li data-value="Option 4">Option 4</li>
    </ul>
</div>
```

## Multi-select

```html
<div class="iux-select">
  <input type="text" class="form-control iux-select--input" placeholder="Select many" />
  <ul class="iux-select--menu">
    <li>
      <div class="form-checkbox">
        <input type="checkbox" id="selectCheck1" name="selectCheck1" value="Checkbox 1"/>
        <label for="selectCheck1">
          Checkbox 1
        </label>
      </div>
    </li>
    <li>
      <div class="form-checkbox">
        <input type="checkbox" id="selectCheck2" name="selectCheck2" value="Checkbox 2"/>
        <label for="selectCheck2">
          Checkbox 2
        </label>
      </div>
    </li>
    <li>
      <div class="form-checkbox">
        <input type="checkbox" id="selectCheck3" name="selectCheck3" value="Checkbox 3"/>
        <label for="selectCheck3">
          Checkbox 3
        </label>
      </div>
    </li>
    <li>
      <div class="form-checkbox">
        <input type="checkbox" id="selectCheck4" name="selectCheck4" value="Checkbox 4"/>
        <label for="selectCheck4">
          Checkbox 4
        </label>
      </div>
    </li>
  </ul>
</div>
```
