---
title: Form Controls
description: Some text about using form-controls.
specs: [
    {{> specMd title="Border Color" spec=default.inputBorderColor }},
    {{> specMd title="Border Color (Hover)" spec=default.inputBorderColorHover }},
    {{> specMd title="Border Color (Focus)" spec=default.inputBorderColorFocus }},
    {{> specMd title="Input Text Color" spec=default.inputColor }},
    {{> specMd title="Input Placeholder Text Color" spec=default.inputColorPlaceholder }},
    {{> specMd title="Input Label Text Color" spec=default.inputLabelColor }},
    {{> specMd title="Info Block Text Color" spec=default.inputInfoBlockColor }},
    {{> specMd title="Input Height" spec=default.inputHeight }},
    {{> specMd title="Corner Radius" spec=default.inputBorderRadius }}
]
---


## Basic Example

Individual form controls automatically receive some global styling. All textual `<input>`, `<textarea>`, and `<select>` elements with `.form-control` are set to `width: 100%;` by default. Wrap labels and controls in `.form-group` for optimum spacing.

<div class="example">
    <form>
        <div class="form-group">
            <label for="exampleInputEmail1">Email address</label>
            <input type="email" class="form-control" id="exampleInputEmail1" name="exampleInputEmail1" placeholder="Email">
        </div>
        <div class="form-group">
            <label for="exampleInputPassword1">Password</label>
            <input type="password" class="form-control" id="exampleInputPassword1" name="exampleInputPassword1" placeholder="Password">
        </div>
        <div class="form-group form-control-file">
            <label for="exampleInputFile">File input</label>
            <input type="file" id="exampleInputFile" name="exampleInputFile">
            <svg class="icon" focusable="false" aria-hidden="true" role="presentation">
                <use xlink:href="#folder"></use>
            </svg>
            <div class="info-block">Example block-level help text here.</div>
        </div>
        <div class="form-checkbox">
            <input type="checkbox" id="exampleCheckMeOut" name="exampleCheckMeOut" value=""/>
            <label for="exampleCheckMeOut">
                Check me out
            </label>
        </div>
        <button type="submit" class="btn btn--default" onclick="return false;">Submit</button>
    </form>
</div>
```html
<form>
    <div class="form-group">
        <label for="exampleInputEmail1">Email address</label>
        <input type="email" class="form-control" id="exampleInputEmail1" name="exampleInputEmail1" placeholder="Email">
    </div>
    <div class="form-group">
        <label for="exampleInputPassword1">Password</label>
        <input type="password" class="form-control" id="exampleInputPassword1" name="exampleInputPassword1" placeholder="Password">
    </div>
    <div class="form-group form-control-file">
        <label for="exampleInputFile">File input</label>
        <input type="file" id="exampleInputFile" name="exampleInputFile" class="form-control-file">
        <svg class="icon" focusable="false" aria-hidden="true" role="presentation">
            <use xlink:href="#folder"></use>
        </svg>
        <div class="info-block">Example block-level help text here.</div>
    </div>
    <div class="form-checkbox">
        <input type="checkbox" id="exampleCheckMeOut" name="exampleCheckMeOut" value=""/>
        <label for="exampleCheckMeOut">
            Check me out
        </label>
    </div>
    <button type="submit" class="btn btn--default">Submit</button>
</form>
```

## Forms

### Inputs

By default, inputs take 100% width of their parent container. This is so they are become the width of the [layout](layout.html) column they are in.

<div class="example">
    <input type="text" class="form-control" placeholder="Text" aria-label="Example input 100% width">
</div>
```html
<input type="text" class="form-control" placeholder="Text">
```

Though it's strongly discouraged in favor of dynamic width fields, you can specify a fixed field width using the classes `form-control--xs`, `form-control--sm`, `form-control--md`, and `form-control--lg`.

### Textarea

Form control which supports multiple lines of text. Change `rows` attribute as necessary.

<div class="example">
    <textarea class="form-control" placeholder="Placeholder" rows="3" aria-label="Example multirow text area"></textarea>
</div>
```html
<textarea class="form-control" placeholder="Placeholder" rows="3" aria-label="Example multirow text area"></textarea>
```

### Disabled state

<div class="example">
    <div class="form-group">
        <label for="text-normal-3">Disabled</label>
        <input type="text" id="text-normal-3" class="form-control" value="Some Text" disabled>
    </div>
</div>
```html
<div class="form-group">
    <label for="text-normal-3">Disabled</label>
    <input type="text" id="text-normal-3" class="form-control" value="Some Text" disabled>
</div>
```

### Read only state

<div class="example">
    <div class="form-group">
        <label for="text-normal-2">Read Only</label>
        <input type="text" id="text-normal-2" class="form-control" value="Some Text" readonly>
    </div>
</div>
```html
<div class="form-group">
    <label for="text-normal-2">Read Only</label>
    <input type="text" id="text-normal-2" class="form-control" value="Some Text" readonly>
</div>
```

### Help text

Block level help text for form controls.

<div class="example">
    <div class="form-group">
        <label for="exampeInputWithHelp">Input with help text</label>
        <input type="email" class="form-control" id="exampeInputWithHelp" aria-describedby="helpBlock">
        <div class="info-block">A block of help text that breaks onto a new line and may extend beyond one line.</div>
    </div>
</div>
```html
<div class="form-group">
    <label for="exampeInputWithHelp">Input with help text</label>
    <input type="email" class="form-control" id="exampeInputWithHelp" aria-describedby="helpBlock">
    <p id="helpBlock" class="info-block">A block of help text that breaks onto a new line and may extend beyond one line.</p>
</div>
```

### Validation States

Soho Foundation includes validation styles for errors on form controls. To use, add `.has-error` to the parent element. Any `.form-control` and `.info-block` within that element will receive the validation styles.

<div class="example">
    <div class="form-group has-error">
        <label for="text-info-2" class="is-required">Input with Error</label>
        <input type="text" id="text-info-2" class="form-control" placeholder="Placeholder">
        <div class="info-block">(!) Required</div>
    </div>

    <div class="form-group has-error">
        <label for="select-normal-2" class="is-required">Error State</label>
        <select id="select-normal-2" class="form-control">
            <option>Option</option>
            <option>Option</option>
            <option>Option</option>
        </select>
        <div class="info-block">Required</div>
    </div>
</div>
```html
<div class="form-group has-error">
    <label for="text-info-2" class="is-required">Input with Error</label>
    <input type="text" id="text-info-2" class="form-control" placeholder="Placeholder">
    <div class="info-block">(!) Required</div>
</div>
<div class="form-group has-error">
    <label for="select-normal-2" class="is-required">Error State</label>
    <select id="select-normal-2" class="form-control">
        <option selected>Option</option>
        <option>Option 1</option>
        <option>Option 2</option>
    </select>
    <div class="info-block">Required</div>
</div>
```

## Check boxes and Radios

Checkboxes are for selecting one or several options in a list, while radios are for selecting one option from many.

Disabled checkboxes and radios are supported, but to provide a "not-allowed" cursor on hover of the parent <label>, you'll need to add the `.is-disabled` class to the parent `.form-radio` or `.form-checkbox`.

### Checkboxes

<div class="example">
    <fieldset class="form-group">
        <legend>Group of checkboxes</legend>
        <div class="form-checkbox">
            <input type="checkbox" id="exampleCheckbox1" value=""/>
            <label for="exampleCheckbox1">
                Empty
            </label>
        </div>

        <div class="form-checkbox form-checkbox--partial">
            <input type="checkbox" value="" id="exampleCheckbox2" checked/>
            <label for="exampleCheckbox2">
                Partially Check
            </label>
        </div>

        <div class="form-checkbox">
            <input type="checkbox" id="exampleCheckbox3" value="" checked/>
            <label for="exampleCheckbox3">
                Checked
            </label>
        </div>

        <div class="form-checkbox is-disabled">
            <input type="checkbox" value="" id="exampleCheckbox4" disabled/>
            <label for="exampleCheckbox4">
                Empty Disabled
            </label>
        </div>

        <div class="form-checkbox form-checkbox--partial is-disabled">
            <input type="checkbox" value="" id="exampleCheckbox5" checked disabled/>
            <label for="exampleCheckbox5">
                Partially Checked &amp; Disabled
            </label>
        </div>

        <div class="form-checkbox is-disabled">
            <input type="checkbox" value="" id="exampleCheckbox6" checked disabled/>
            <label for="exampleCheckbox6">
                Checked and Disabled
            </label>
        </div>
    </fieldset>
</div>
```html
<fieldset class="form-group">
    <legend>Group of checkboxes</legend>
    <div class="form-checkbox">
        <input type="checkbox" id="exampleCheckbox1" value=""/>
        <label for="exampleCheckbox1">
            Empty
        </label>
    </div>
    <div class="form-checkbox form-checkbox--partial">
        <input type="checkbox" value="" id="exampleCheckbox2" checked/>
        <label for="exampleCheckbox2">
            Partially Check
        </label>
    </div>
    <div class="form-checkbox">
        <input type="checkbox" id="exampleCheckbox3" value="" checked/>
        <label for="exampleCheckbox3">
            Checked
        </label>
    </div>
    <div class="form-checkbox is-disabled">
        <input type="checkbox" value="" id="exampleCheckbox4" disabled/>
        <label for="exampleCheckbox4">
            Empty Disabled
        </label>
    </div>
    <div class="form-checkbox form-checkbox--partial">
        <input type="checkbox" value="" id="exampleCheckbox5" checked disabled/>
        <label for="exampleCheckbox5">
            Partially Checked &amp; Disabled
        </label>
    </div>
    <div class="form-checkbox is-disabled">
        <input type="checkbox" value="" id="exampleCheckbox6" checked disabled/>
        <label for="exampleCheckbox6">
            Checked and Disabled
        </label>
    </div>
</fieldset>
```

### Radio Buttons

<div class="example">
    <fieldset class="form-group">
        <legend>A group of radio buttons</legend>
        <div class="form-radio">
            <input type="radio" name="optionsRadios" id="optionsRadios1" value="option1" checked>
            <label for="optionsRadios1">
                Option one is this and that&mdash;be sure to include why it"s great
            </label>
        </div>
        <div class="form-radio">
            <input type="radio" name="optionsRadios" id="optionsRadios2" value="option2">
            <label for="optionsRadios2">
                Option two can be something else and selecting it will deselect option one
            </label>
        </div>
        <div class="form-radio is-disabled">
            <input type="radio" name="optionsRadios" id="optionsRadios3" value="option3" disabled>
            <label for="optionsRadios3">
                Option three is disabled
            </label>
        </div>
    </fieldset>
</div>
```html
<fieldset class="form-group">
    <legend>A group of radio buttons</legend>
    <div class="form-radio">
        <input type="radio" name="optionsRadios" id="optionsRadios1" value="option1" checked>
        <label for="optionsRadios1">
            Option one is this and that&mdash;be sure to include why it's great
        </label>
    </div>
    <div class="form-radio">
        <input type="radio" name="optionsRadios" id="optionsRadios2" value="option2">
        <label for="optionsRadios2">
            Option two can be something else and selecting it will deselect option one
        </label>
    </div>
    <div class="form-radio is-disabled">
        <input type="radio" name="optionsRadios" id="optionsRadios3" value="option3" disabled>
        <label for="optionsRadios3">
            Option three is disabled
        </label>
    </div>
</fieldset>
```

## Select
<div class="example">
    <div class="form-group">
        <label for="select-normal-1">Label</label>
        <select id="select-normal-1" class="form-control">
            <option selected>Option</option>
            <option>Option 1</option>
            <option>Option 2</option>
        </select>
        <div class="info-block">Some info text</div>
    </div>
</div>
```html
<div class="form-group">
    <label for="select-normal-1">Normal State</label>
    <select id="select-normal-1" class="form-control">
        <option selected>Option</option>
        <option>Option 1</option>
        <option>Option 2</option>
    </select>
    <div class="info-block">Some passive text</div>
</div>
```

`<select multiple>` is also supported to select one or more items from a list.
