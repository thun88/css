---
title: Radio Buttons
description: Some text about using ids-radio.
demo:
  path: /ids-radio/index.html
---

## Basic Example

```html
<fieldset class="ids-form-group">
    <legend>A group of radio buttons</legend>
    <div class="ids-form-radio">
        <input type="radio" name="optionsRadios" id="optionsRadios1" value="option1" checked>
        <label for="optionsRadios1">
            Option one is this and that&mdash;be sure to include why it's great
        </label>
    </div>
    <div class="ids-form-radio">
        <input type="radio" name="optionsRadios" id="optionsRadios2" value="option2">
        <label for="optionsRadios2">
            Option two can be something else and selecting it will deselect option one
        </label>
    </div>
    <div class="ids-form-radio is-disabled">
        <input type="radio" name="optionsRadios" id="optionsRadios3" value="option3" disabled>
        <label for="optionsRadios3">
            Option three is disabled
        </label>
    </div>
</fieldset>
```
