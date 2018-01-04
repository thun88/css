---
title: Form Controls
description: Some text about using ids-form-controls.
demo:
  path: /ids-form/form.html
specs:
- title: Border Color
  spec: inputBorderColor
- title: Border Color (Hover)
  spec: inputBorderColorHover
- title: Border Color (Focus)
  spec: inputBorderColorFocus
- title: Input Text Color
  spec: inputColor
- title: Input Placeholder Text Color
  spec: inputColorPlaceholder
- title: Input Label Text Color
  spec: inputLabelColor
- title: Info Block Text Color
  spec: inputInfoBlockColor
- title: Input Height
  spec: inputHeight
  valueType: true
- title: Corner Radius
  spec: inputBorderRadius
  valueType: true
---


## Basic Example

Individual form controls automatically receive some global styling. All textual `<input>`, `<textarea>`, and `<select>` elements with `.ids-form-control` are set to `width: 100%;` by default. Wrap labels and controls in `.ids-form-group` for optimum spacing.

```html
<form>
    <div class="ids-form-group">
        <label for="exampleInputEmail1">Email address</label>
        <input type="email" class="ids-form-control" id="exampleInputEmail1" name="exampleInputEmail1" placeholder="Email">
    </div>
    <div class="ids-form-group">
        <label for="exampleInputPassword1">Password</label>
        <input type="password" class="ids-form-control" id="exampleInputPassword1" name="exampleInputPassword1" placeholder="Password">
    </div>
    <div class="ids-form-group ids-form-file">
        <label for="exampleInputFile">File input</label>
        <input type="file" id="exampleInputFile" name="exampleInputFile">
        <svg class="ids-icon" focusable="false" aria-hidden="true" role="presentation">
            <use xlink:href="#folder"></use>
        </svg>
        <div class="ids-info-block">Example block-level help text here.</div>
    </div>
    <div class="ids-form-checkbox">
        <input type="checkbox" id="exampleCheckMeOut" name="exampleCheckMeOut" value=""/>
        <label for="exampleCheckMeOut">
            Check me out
        </label>
    </div>
    <button type="submit" class="ids-btn ids-btn--default">Submit</button>
</form>
```

## Forms

### Inputs

By default, inputs take 100% width of their parent container. This is so they are become the width of the [layout](layout.html) column they are in.

```html
<input type="text" class="ids-form-control" placeholder="Text">
```

Though it's strongly discouraged in favor of dynamic width fields, you can specify a fixed field width using the classes `ids-form-control--xs`, `ids-form-control--sm`, `ids-form-control--md`, and `ids-form-control--lg`.

### Textarea

Form control which supports multiple lines of text. Change `rows` attribute as necessary.

```html
<textarea class="ids-form-control" placeholder="Placeholder" rows="3" aria-label="Example multirow text area"></textarea>
```

### Disabled state

```html
<div class="ids-form-group">
    <label for="text-normal-3">Disabled</label>
    <input type="text" id="text-normal-3" class="ids-form-control" value="Some Text" disabled>
</div>
```

### Read only state

```html
<div class="ids-form-group">
    <label for="text-normal-2">Read Only</label>
    <input type="text" id="text-normal-2" class="ids-form-control" value="Some Text" readonly>
</div>
```

### Help text

Block level help text for form controls.

```html
<div class="ids-form-group">
    <label for="exampeInputWithHelp">Input with help text</label>
    <input type="email" class="ids-form-control" id="exampeInputWithHelp" aria-describedby="helpBlock">
    <p id="helpBlock" class="ids-info-block">A block of help text that breaks onto a new line and may extend beyond one line.</p>
</div>
```

### Validation States

Infor UX includes validation styles for errors on form controls. To use, add `.has-error` to the parent element. Any `.ids-form-control` and `.ids-info-block` within that element will receive the validation styles.

```html
<div class="ids-form-group has-error">
    <label for="text-info-2" class="is-required">Input with Error</label>
    <input type="text" id="text-info-2" class="ids-form-control" placeholder="Placeholder">
    <div class="ids-info-block">(!) Required</div>
</div>
<div class="ids-form-group has-error">
    <label for="select-normal-2" class="is-required">Error State</label>
    <select id="select-normal-2" class="ids-form-control">
        <option selected>Option</option>
        <option>Option 1</option>
        <option>Option 2</option>
    </select>
    <div class="ids-info-block">Required</div>
</div>
```

## Check boxes and Radios

Checkboxes are for selecting one or several options in a list, while radios are for selecting one option from many.

Disabled checkboxes and radios are supported, but to provide a "not-allowed" cursor on hover of the parent <label>, you'll need to add the `.is-disabled` class to the parent `.ids-form-radio` or `.ids-form-checkbox`.

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

### Radio Buttons

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

## Select

```html
<div class="ids-form-group">
    <label for="select-normal-1">Normal State</label>
    <select id="select-normal-1" class="ids-form-control">
        <option selected>Option</option>
        <option>Option 1</option>
        <option>Option 2</option>
    </select>
    <div class="ids-info-block">Some passive text</div>
</div>
```

`<select multiple>` is also supported to select one or more items from a list.
