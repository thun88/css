# Forms

Some text about using form-controls.

## Input Groups

A group of elements consisting of a `<label>`, `<input>`, and maybe assistive text below in a `<p>`.

<div class='form-group'>
  <label for='text-normal-0'>Normal  Empty</label>
  <input type='text' id='text-normal-0' class='form-control' placeholder='Placeholder'>
  <p class='info-block'>Some passive text</p>
</div>

<div class='form-group'>
  <label for='text-normal-1'>Normal with Text</label>
  <input type='text' id='text-normal-1' class='form-control' placeholder='Placeholder text' value='Some Text'>
</div>

<div class='form-group'>
  <label for='text-normal-2'>Read Only</label>
  <input type='text' id='text-normal-2' class='form-control' value='Some Text' readonly>
</div>

<div class='form-group'>
  <label for='text-normal-3'>Disabled</label>
  <input type='text' id='text-normal-3' class='form-control' value='Some Text' disabled>
</div>

### Textarea

<div class='form-group'>
  <label for='textarea-normal-0'></label>
  <textarea type='text' id='textarea-normal-0' class='form-control' placeholder='Placeholder' rows='3'></textarea>
</div>

<hr>
### Input sizes

These can be used with `<select>`, `<input>`, and `<textarea>` elements.

<div class='form-group'>
  <label for='text-size-1'>Extra Small</label>
  <input type='text' id='text-size-1' class='form-control form-control--xs'>
</div>
<div class='form-group'>
  <label for='text-size-2'>Small</label>
  <input type='text' id='text-size-2' class='form-control form-control--sm'>
</div>
<div class='form-group'>
  <label for='text-size-3'>Normal</label>
  <input type='text' id='text-size-3' class='form-control'>
</div>
<div class='form-group'>
  <label for='text-size-4'>Large</label>
  <input type='text' id='text-size-4' class='form-control form-control--lg'>
</div>
<div class='form-group'>
  <label for='text-size-5'>Full width</label>
  <input type='text' id='text-size-5' class='form-control form-control--full'>
</div>

<hr>

### Select box states

<div class='form-group'>
  <label form='select-normal-1'>Normal State</label>
  <select id='select-normal-1' class='form-control'>
    <option>Option</option>
    <option>Option</option>
    <option>Option</option>
  </select>
  <p class='info-block'>Some passive text</p>
</div>

<hr>
### Check boxes

<div class='form-checkbox'>
  <label>
    <input type='checkbox' class='form-checkbox--input' value=''/>
    Checkbox
  </label>
</div>

<div class='form-checkbox'>
  <label>
    <input type='checkbox' value='' class='form-checkbox--input checkbox-partial' checked/>
      Checkbox Partial Check
  </label>
</div>

<div class='form-checkbox'>
  <label>
    <input type='checkbox' class='form-checkbox--input' value='' checked/>
    Checkbox Checked
  </label>
</div>

<div class='form-checkbox'>
  <label>
    <input type='checkbox' value='' class='form-checkbox--input' disabled/>
      Checkbox Disabled
  </label>
</div>

<div class='form-checkbox'>
  <label>
    <input type='checkbox' value='' class='form-checkbox--input' disabled checked/>
      Checkbox Disabled and Checked
  </label>
</div>

<hr>
### Radio Buttons

<div class='form-radio'>
  <label>
    <input type='radio' class='form-radio--input' name='optionsRadios' id='optionsRadios1' value='option1' checked>
    Option one is this and that&mdash;be sure to include why it's great
  </label>
</div>
<div class='form-radio'>
  <label>
    <input type='radio' class='form-radio--input' name='optionsRadios' id='optionsRadios2' value='option2'>
    Option two can be something else and selecting it will deselect option one
  </label>
</div>
<div class='form-radio'>
  <label>
    <input type='radio' class='form-radio--input' name='optionsRadios' id='optionsRadios3' value='option3' disabled>
    Option three is disabled
  </label>
</div>

## Error States


<div class='form-group has-error'>
  <label for='text-info-2' class='is-required'>A Required Field With an Error</label>
  <input type='text' id='text-info-2' class='form-control' placeholder='Placeholder'>
  <p class='info-block'>(!) Required</p>
</div>

<div class='form-group has-error'>
  <label form='select-normal-2' class='is-required'>Error State</label>
  <select id='select-normal-2' class='form-control'>
    <option>Option</option>
    <option>Option</option>
    <option>Option</option>
  </select>
  <p class='info-block'>Required</p>
</div>
