---
title: Form Controls
description: Some text about using ids-form-controls.
demo:
  path: /ids-formcontrol/index.html
tokensCategory: inputs
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

Infor Design System includes validation styles for errors on form controls. To use, add `.has-error` to the parent element. Any `.ids-form-control` and `.ids-info-block` within that element will receive the validation styles.

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

### Horizontal

```html
<div class="ids-form-group">
  <label for="text-normal-4">Horizontal Input and Button</label>
  <div class="ids-form-controls--horizontal">
    <input type="text" value="" class="ids-form-control" id="text-normal-4">
    <button class="ids-btn ids-btn--primary">Submit</button>
  </div>
</div>
```
