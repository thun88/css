---
title: Form Controls
description: Soho Foundation Styleguide
---

Some text about using form-controls.

## Specs

```css
{
    {{#each default.inputs}}
        {{@key}}: {{this}};
    {{/each}}
}
```

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
        <div class="form-group">
            <label for="exampleInputFile">File input</label>
            <input type="file" id="exampleInputFile" name="exampleInputFile" class="form-control-file">
            <p class="info-block">Example block-level help text here.</p>
        </div>
        <div class="form-checkbox">
            <input type="checkbox" id="exampleCheckMeOut" name="exampleCheckMeOut" value=""/>
            <label for="exampleCheckMeOut">
                Check me out
            </label>
        </div>
        <button type="submit" class="btn btn-default">Submit</button>
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
    <div class="form-group">
        <label for="exampleInputFile">File input</label>
        <input type="file" id="exampleInputFile" name="exampleInputFile" class="form-control-file">
        <p class="info-block">Example block-level help text here.</p>
    </div>
    <div class="form-checkbox">
        <input type="checkbox" id="exampleCheckMeOut" name="exampleCheckMeOut" value=""/>
        <label for="exampleCheckMeOut">
            Check me out
        </label>
    </div>
    <button type="submit" class="btn btn-default">Submit</button>
</form>
```

## Inline Forms
[todo]


### Inputs

<div class="example">
    <form>
        <input type="text" class="form-control" placeholder="Text">
    </form>
</div>
```html
<input type="text" class="form-control" placeholder="Text">
```


### Textarea

Form control which supports multiple lines of text. Change `rows` attribute as necessary.

<div class="example">
    <form>
        <textarea class="form-control" placeholder="Placeholder" rows="3"></textarea>
    </form>
</div>
```html
<textarea class="form-control" placeholder="Placeholder" rows="3"></textarea>
```

## Check boxes and Radios

Checkboxes are for selecting one or several options in a list, while radios are for selecting one option from many.

Disabled checkboxes and radios are supported, but to provide a "not-allowed" cursor on hover of the parent <label>, you'll need to add the `.is-disabled` class to the parent `.form-radio` or `.form-checkbox`.

### Checkboxes

<div class="example">
    <form>
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
    </form>
</div>
```html
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
```

### Radio Buttons

<div class="example">
    <form>
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
    </form>
</div>
```html
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
```

### Inline checkboxes and radios

[TODO]

### Selects
<div class="example">
    <form>
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
    <form>
        <div class="form-group">
            <label form="select-normal-1">Label</label>
            <select id="select-normal-1" class="form-control" multiple>
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
    <select id="select-normal-1" class="form-control" multiple>
        <option>Option</option>
        <option>Option</option>
        <option>Option</option>
    </select>
    <p class="info-block">Some passive text</p>
</div>
```

## Disabled state

<div class="example">
    <form>
        <div class="form-group">
            <label for="text-normal-3">Disabled</label>
            <input type="text" id="text-normal-3" class="form-control" value="Some Text" disabled>
        </div>
    </form>
</div>
```html
<div class="form-group">
    <label for="text-normal-3">Disabled</label>
    <input type="text" id="text-normal-3" class="form-control" value="Some Text" disabled>
</div>
```

## Read only state

<div class="example">
    <form>
        <div class="form-group">
            <label for="text-normal-2">Read Only</label>
            <input type="text" id="text-normal-2" class="form-control" value="Some Text" readonly>
        </div>
    </form>
</div>
```html
<div class="form-group">
    <label for="text-normal-2">Read Only</label>
    <input type="text" id="text-normal-2" class="form-control" value="Some Text" readonly>
</div>
```

### Help text

Block level help text for form controls.

<blockquote class="info">
    Associating help text with form controls
    Help text should be explicitly associated with the form control it relates to using the aria-describedby attribute. This will ensure that assistive technologies – such as screen readers – will announce this help text when the user focuses or enters the control.
</blockquote>

<div class="example">
    <form>
        <div class="form-group">
            <label for="exampeInputWithHelp">Input with help text</label>
            <input type="email" class="form-control" id="exampeInputWithHelp" aria-describedby="helpBlock">
            <p class="info-block">A block of help text that breaks onto a new line and may extend beyond one line.</p>
        </div>
    </form>
</div>
```html
<div class="form-group">
    <label for="exampeInputWithHelp">Input with help text</label>
    <input type="email" class="form-control" id="exampeInputWithHelp" aria-describedby="helpBlock">
    <p id="helpBlock" class="info-block">A block of help text that breaks onto a new line and may extend beyond one line.</p>
</div>
```

## Input States

## Validation States

Soho Foundation includes validation styles for errors on form controls. To use, add `.has-error` to the parent element. Any `.form-control` and `.info-block` within that element will receive the validation styles.

<blockquote>
    <strong>Conveying validation state to assistive technologies and colorblind users</strong>
    <p>Using these validation styles to denote the state of a form control only provides a visual, color-based indication, which will not be conveyed to users of assistive technologies - such as screen readers - or to colorblind users.</p>
    <p>Ensure that an alternative indication of state is also provided. For instance, you can include a hint about state in the form control's <label> text itself (as is the case in the following code example), include a Glyphicon (with appropriate alternative text using the .sr-only class - see the Glyphicon examples), or by providing an additional help text block. Specifically for assistive technologies, invalid form controls can also be assigned an aria-invalid="true" attribute.</p>
</blockquote>

<div class="example">
    <form>
        <div class="form-group has-error">
            <label for="text-info-2" class="is-required">Input with Error</label>
            <input type="text" id="text-info-2" class="form-control" placeholder="Placeholder">
            <p class="info-block">(!) Required</p>
        </div>

        <div class="form-group has-error">
            <label form="select-normal-2" class="is-required">Error State</label>
            <select id="select-normal-2" class="form-control">
                <option>Option</option>
                <option>Option</option>
                <option>Option</option>
            </select>
            <p class="info-block">Required</p>
        </div>
    </form>
</div>
```html
<div class="form-group has-error">
    <label for="text-info-2" class="is-required">Input with Error</label>
    <input type="text" id="text-info-2" class="form-control" placeholder="Placeholder">
    <p class="info-block">(!) Required</p>
</div>

<div class="form-group has-error">
    <label form="select-normal-2" class="is-required">Error State</label>
    <select id="select-normal-2" class="form-control">
        <option>Option</option>
        <option>Option</option>
        <option>Option</option>
    </select>
    <p class="info-block">Required</p>
</div>
```

### Input sizes

These can be used with `<select>`, `<input>`, and `<textarea>` elements.

<div class="example">
    <form>
        <div class="form-group">
            <label for="text-size-1">Extra Small</label>
            <input type="text" id="text-size-1" class="form-control form-control--xs">
        </div>
        <div class="form-group">
            <label for="text-size-2">Small</label>
            <input type="text" id="text-size-2" class="form-control form-control--sm">
        </div>
        <div class="form-group">
            <label for="text-size-3">Normal</label>
            <input type="text" id="text-size-3" class="form-control form-control--md">
        </div>
        <div class="form-group">
            <label for="text-size-4">Large</label>
            <input type="text" id="text-size-4" class="form-control form-control--lg">
        </div>
    </form>
</div>
```html
<input type="text" id="text-size-1" class="form-control form-control--xs">
<input type="text" id="text-size-2" class="form-control form-control--sm">
<input type="text" id="text-size-3" class="form-control form-control--md">
<input type="text" id="text-size-4" class="form-control form-control--lg">
```
