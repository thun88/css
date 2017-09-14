---
title: Adaptive States
description: This is a page dedicated to showcase adaptive states. Adaptive states can be defined within any scope of the DOM to modify style of supported elements for different environment factors like touch input.
---

## Touch Adaptive State

Use the class `adaptive--touch` to trigger the "touch" adaptive state to the inner elements that support it. The "touch" adaptive state primarily increases the size of touch points like fields and buttons to make it easier to tap these elements when using a device with touch input like a phone or tablet.

### Specs

{{> specValue title="Touch Input Height" spec=default.inputHeightAdaptiveTouch }}


### Forms and Form Controls

The <span class="example-padding">dashed outline around the check box and radio controls</span> simply shows the increased touch target area around the control for better accessibility.

```html
<div class="adaptive--touch">
    <!-- This input and checkbox will have a larger touch point since it's in an adaptive parent -->
    <input type="text" class="form-control" placeholder="Text" aria-label="Adaptive text input example">
    <div class="form-checkbox">
        <input type="checkbox" id="exampleCheckbox1" value="" aria-label="Adaptive checkbox example"/>
        <label for="exampleCheckbox1">
            Checkbox
        </label>
    </div>
</div>
```

The elements `input`, `select`, `radio`, and `checkbox` all support the touch adaptive state.
```
<div class="adaptive--touch">
    <form>
        <div class="form-group">
            <label for="adaptive-textarea">Adaptive Text area</label>
            <textarea class="form-control" id="adaptive-textarea" placeholder="Placeholder" rows="3"></textarea>
        </div>
        <fieldset class="form-group">
            <legend>Example adaptive radio buttons</legend>
            <div class="form-radio">
                <input type="radio" name="optionsRadios" id="optionsRadios1" value="option1" checked>
                <label for="optionsRadios1" class="example-padding">
                    Option one is this and that&mdash;be sure to include why it's great
                </label>
            </div>
            <div class="form-radio">
                <input type="radio" name="optionsRadios" id="optionsRadios2" value="option2">
                <label for="optionsRadios2" class="example-padding">
                    Option two can be something else and selecting it will deselect option one
                </label>
            </div>
        </fieldset>
        <div class="form-group">
          <label for="select-normal-1">Label</label>
              <select id="select-normal-1" class="form-control">
                <option selected>Option 1</option>
                <option>Option 2</option>
                <option>Option 3</option>
            </select>
            <div class="info-block">Some info text</div>
        </div>
        <input type="submit" class="btn btn--primary btn--block" onclick="return false;" value="save">
    </form>
</div>
```
