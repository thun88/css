---
title: Adaptive Styles
description: Soho Foundation Styleguide
---

This is a page dedicated to showcase adaptive states. Adaptive states can be defined within any scope of the DOM to modify style of supported elements for different environment factors like touch input.

## Specs

```css
{
{{#each adaptiveInputs}}
    {{this.name}}: {{this.value}};
{{/each}}
}
```

## Touch Adaptive State

Use the class `adaptive--touch` to trigger the "touch" adaptive state to the inner elements that support it. The "touch" adaptive state primarily increases the size of touch points like fields and buttons to make it easier to tap these elements when using a device with touch input like a phone or tablet.

### Forms and Form Controls

The dashed outline around the check box and radio controls simply shows the increased touch target area around the control for better accessibility.

<div class="adaptive--touch example">
    <form>
        <input type="text" class="form-control" placeholder="Text">
        <div class="form-checkbox">
            <input type="checkbox" id="exampleCheckbox1" value=""/>
            <label for="exampleCheckbox1" class="example-padding">
                Checkbox
            </label>
        </div>
    </form>
</div>
```html
<div class="adaptive--touch">
    <form>
        <!-- This input and checkbox will have a larger touch point since it's in an adaptive parent -->
        <input type="text" class="form-control" placeholder="Text">
        <div class="form-checkbox">
            <input type="checkbox" id="exampleCheckbox1" value=""/>
            <label for="exampleCheckbox1">
                Checkbox
            </label>
        </div>
    </form>
</div>
```

The elements `input`, `select`, `radio`, and `checkbox` all support the touch adaptive state.

<div class="adaptive--touch example">
    <form>
        <textarea class="form-control" placeholder="Placeholder" rows="3"></textarea>
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
        <div class="form-group">
          <label form="select-normal-1">Label</label>
              <select id="select-normal-1" class="form-control">
                <option>Option</option>
                <option>Option</option>
                <option>Option</option>
            </select>
            <p class="info-block">Some info text</p>
        </div>
        <button type="button" class="btn btn-primary btn-block">Save</button>
    </form>
</div>

