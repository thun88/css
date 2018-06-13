---
title: Checkboxes
description: Some text about using ids-checkboxes.
demo:
  path: /ids-checkbox/index.html
tokensCategory: checkboxes
---

## Check boxes and Radios

Checkboxes are for selecting one or several options in a list.

Disabled checkboxes are supported, but to provide a "not-allowed" cursor on hover of the parent `<label>`, you'll need to add the `.is-disabled` class to the parent `.ids-form-checkbox`.

### Checkboxes

```html
<fieldset class="ids-form-group">
    <legend>Group of checkboxes</legend>
    <div class="ids-form-checkbox">
        <input type="checkbox" id="exampleCheckbox1" value=""/>
        <label for="exampleCheckbox1">
            Empty
        </label>
    </div>
    <div class="ids-form-checkbox form-checkbox--partial">
        <input type="checkbox" value="" id="exampleCheckbox2" checked/>
        <label for="exampleCheckbox2">
            Partially Check
        </label>
    </div>
    <div class="ids-form-checkbox">
        <input type="checkbox" id="exampleCheckbox3" value="" checked/>
        <label for="exampleCheckbox3">
            Checked
        </label>
    </div>
    <div class="ids-form-checkbox is-disabled">
        <input type="checkbox" value="" id="exampleCheckbox4" disabled/>
        <label for="exampleCheckbox4">
            Empty Disabled
        </label>
    </div>
    <div class="ids-form-checkbox form-checkbox--partial">
        <input type="checkbox" value="" id="exampleCheckbox5" checked disabled/>
        <label for="exampleCheckbox5">
            Partially Checked &amp; Disabled
        </label>
    </div>
    <div class="ids-form-checkbox is-disabled">
        <input type="checkbox" value="" id="exampleCheckbox6" checked disabled/>
        <label for="exampleCheckbox6">
            Checked and Disabled
        </label>
    </div>
</fieldset>
```
