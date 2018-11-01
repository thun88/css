---
title: IDS Dropdown
description: This page describes how to use a dropdown.
demo:
  path: /ids-dropdown/index.html
tokensCategory: dropdown
---

## Dropdown

Using `ids-list` and its class options inside of the dropdown menu is the easiest way to style your dropdown.

```html
  <div class="ids-dropdown">
    <input type="text" class="ids-form-control ids-dropdown--input" placeholder="Select one" />
    <div class="ids-dropdown--menu">
      <ul class="ids-list ids-list--hover">
        <li><a class="ids-list--item ids-list--item--selected" data-value="Option 1">Option 1</a></li>
        <li><a class="ids-list--item" data-value="Option 2">Option 2</a></li>
        <li><a class="ids-list--item" data-value="Option 3">Option 3</a></li>
        <li><a class="ids-list--item" data-value="Option 4">Option 4</a></li>
      </ul>
    </div>
  </div>
```

## Dropdown with checkboxes

```html
<div class="ids-dropdown ids-dropdown--open example-open">
    <input type="text" class="ids-form-control ids-dropdown--input" placeholder="Check a few" />
    <div class="ids-dropdown--menu">
      <ul class="ids-list ids-list--striped">
        <li>
          <div class="ids-list--item ids-form-checkbox is-selected">
            <input type="checkbox" id="selectCheck1" name="selectCheck1" value="Checkbox 1" checked/>
            <label for="selectCheck1">Checkbox 1</label>
          </div>
        </li>
        <li>
          <div class="ids-list--item ids-form-checkbox">
            <input type="checkbox" id="selectCheck2" name="selectCheck2" value="Checkbox 2"/>
            <label for="selectCheck2">Checkbox 2</label>
          </div>
        </li>
        <li>
          <div class="ids-list--item ids-form-checkbox is-selected">
            <input type="checkbox" id="selectCheck3" name="selectCheck3" value="Checkbox 3" checked/>
            <label for="selectCheck3">Checkbox 3</label>
          </div>
        </li>
        <li>
          <div class="ids-list--item ids-form-checkbox">
            <input type="checkbox" id="selectCheck4" name="selectCheck4" value="Checkbox 4"/>
            <label for="selectCheck4">Checkbox 4</label>
          </div>
        </li>
      </ul>
    </div>
  </div>
```
