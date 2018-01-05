---
title: Adaptive States
description: This is a page dedicated to showcase adaptive states. Adaptive states can be defined within any scope of the DOM to modify style of supported elements for different environment factors like touch input.
demo:
  path: /ids-adaptive/ids-adaptive.html
specs:
- title: Touch Input Height
  spec: inputHeightAdaptiveTouch
  valueType: true
---

## Touch Adaptive State

Use the class `ids-adaptive--touch` to trigger the "touch" adaptive state to the inner elements that support it. The "touch" adaptive state primarily increases the size of touch points like fields and buttons to make it easier to tap these elements when using a device with touch input like a phone or tablet.

### Forms and Form Controls

The <span class="example-padding">dashed outline around the check box and radio controls</span> simply shows the increased touch target area around the control for better accessibility.

```html
<div class="ids-adaptive--touch">
    <!-- This input and checkbox will have a larger touch point since it's in an adaptive parent -->
    <input type="text" class="ids-form-control" placeholder="Text" aria-label="Adaptive text input example"/>
    <div class="ids-form-checkbox">
        <input type="checkbox" id="exampleCheckbox1" value="" aria-label="Adaptive checkbox example"/>
        <label for="exampleCheckbox1">
            Checkbox
        </label>
    </div>
</div>
```

The elements `input`, `select`, `radio`, and `checkbox` all support the touch adaptive state.
```html
<div class="ids-adaptive--touch">
    <form>
        <div class="ids-form-group">
            <label for="adaptive-textarea">Adaptive Text area</label>
            <textarea class="ids-form-control" id="adaptive-textarea" placeholder="Placeholder" rows="3"></textarea>
        </div>
        <fieldset class="ids-form-group">
            <legend>Example adaptive radio buttons</legend>
            <div class="ids-form-radio">
                <input type="radio" name="optionsRadios" id="optionsRadios1" value="option1" checked>
                <label for="optionsRadios1" class="example-padding">
                    Option one is this and that&mdash;be sure to include why it's great
                </label>
            </div>
            <div class="ids-form-radio">
                <input type="radio" name="optionsRadios" id="optionsRadios2" value="option2">
                <label for="optionsRadios2" class="example-padding">
                    Option two can be something else and selecting it will deselect option one
                </label>
            </div>
        </fieldset>
        <div class="ids-form-group">
          <label for="select-normal-1">Label</label>
              <select id="select-normal-1" class="ids-form-control">
                <option selected>Option 1</option>
                <option>Option 2</option>
                <option>Option 3</option>
            </select>
            <div class="ids-info-block">Some info text</div>
        </div>
        <input type="submit" class="ids-btn ids-btn--primary ids-btn--block" value="save">
    </form>
</div>
```
