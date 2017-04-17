---
title: Adaptive Styles
description: Soho Foundation Styleguide
---

This is a page dedicated to showcase adaptive styles for edge cases.

## Specs

```css
{
    {{#each adaptiveInputs}}
    {{this.name}}: {{this.value}};
    {{/each}}
}
```


### Inputs

<div class="example">
    <form class="state-adaptive">
        <input type="text" class="form-control" placeholder="Text">
    </form>
</div>
```html
<input type="text" class="form-control" placeholder="Text">
```


### Textarea

Form control which supports multiple lines of text. Change `rows` attribute as necessary.

<div class="example">
    <form class="state-adaptive">
        <textarea class="form-control" placeholder="Placeholder" rows="3"></textarea>
    </form>
</div>
```html
<textarea class="form-control" placeholder="Placeholder" rows="3"></textarea>
```

#### Checkboxes

<div class="example">
    <form class="state-adaptive">
        <div class="form-checkbox">
            <label for="exampleCheckbox1">
                <input type="checkbox" class="form-checkbox--input" id="exampleCheckbox1" value=""/>
                Checkbox
            </label>
        </div>
    </form>
</div>
```html
<div class="form-checkbox">
    <label for="exampleCheckbox1">
        <input type="checkbox" class="form-checkbox--input" id="exampleCheckbox1" value=""/>
        Checkbox
    </label>
</div>
```

### Radio Buttons

<div class="example">
    <form class="state-adaptive">
        <div class="form-radio">
            <label>
                <input type="radio" class="form-radio--input" name="optionsRadios" id="optionsRadios1" value="option1" checked>
                Option one is this and that&mdash;be sure to include why it"s great
            </label>
        </div>
        <div class="form-radio">
            <label>
                <input type="radio" class="form-radio--input" name="optionsRadios" id="optionsRadios2" value="option2">
                Option two can be something else and selecting it will deselect option one
            </label>
        </div>
    </form>
</div>
```html
<div class="form-radio">
    <label for="optionsRadios1">
        <input type="radio" class="form-radio--input" name="optionsRadios" id="optionsRadios1" value="option1" checked>
        Option one is this and that&mdash;be sure to include why it"s great
    </label>
</div>
<div class="form-radio">
    <label for="optionsRadios2">
        <input type="radio" class="form-radio--input" name="optionsRadios" id="optionsRadios2" value="option2">
        Option two can be something else and selecting it will deselect option one
    </label>
</div>
```

### Selects
<div class="example">
    <form class="state-adaptive">
        <div class="form-group">
          <label form="select-normal-1">Label</label>
              <select id="select-normal-1" class="form-control">
                <option>Option</option>
                <option>Option</option>
                <option>Option</option>
            </select>
            <p class="info-block">Some info text</p>
        </div>
    </form>
</div>
```html
<div class="form-group">
    <label form="select-normal-1">Normal State</label>
    <select id="select-normal-1" class="form-control">
        <option>Option</option>
        <option>Option</option>
        <option>Option</option>
  </select>
  <p class="info-block">Some passive text</p>
</div>
```

For `<select>` controls with the `multiple` attribute, multiple options are shown by default.

<div class="example">
    <form class="state-adaptive">
        <div class="form-group">
            <label form="select-normal-1">Label</label>
            <select id="select-normal-1" class="form-control" multiple>
                <option>Option 1</option>
                <option>Option 2</option>
                <option>Option 3</option>
            </select>
            <p class="info-block">Some info text</p>
        </div>
    </form>
</div>
```html
<div class="form-group">
    <label form="select-normal-1">Normal State</label>
    <select id="select-normal-1" class="form-control" multiple>
        <option>Option 1</option>
        <option>Option 2</option>
        <option>Option 3</option>
  </select>
  <p class="info-block">Some passive text</p>
</div>
```
