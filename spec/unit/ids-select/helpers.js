export class Helpers {

  constructor() {
    this.cssClasses = {
      OPEN: 'ids-select--open',
      SELECTED: 'ids-select--menu--selected'
    };
    return this;
  }


  /**
   * Create a fixture for DOM testing
   * @param  {Integer}  numOptions    - The number of options
   * @param  {Boolean} isMultiSelect - Is used for multiselect testing
   * @return {Element}
   */
  createSelectFixture(numOptions, isMultiSelect = false) {
    let container = document.createElement('div');

    let list = this.createSelectList_(numOptions, isMultiSelect);
    container.append(list);

    let input = document.createElement('input');
    input.classList.add('ids-select--input');
    container.append(input);

    return container;
  }

  /**
   * @private
   * Creates dummy menu DOM
   * @param  {Integer}  numOptions   - The number of options
   * @param  {Boolean} isMultiSelect - Is used for multiselect testing
   * @return {Element}
   */
  createSelectList_(numOptions, isMultiSelect) {
    let list = document.createElement('ul');
    list.classList.add('ids-select--menu');

    for (var i = 0; i < numOptions; i++) {
      if (isMultiSelect) {
        list.append(this.createCheckboxItem_(i));
      } else {
        list.append(this.createItem_(i));
      }
    }
    return list;
  }

  /**
   * @private
   * Creates a list item
   * @param  {Integer} id - A unique ID
   * @return {Element}
   */
  createItem_(id) {
    let li = document.createElement('li');
    li.dataset['value'] = id;
    return li;
  }

  /**
   * @private
   * Creates a checkbox item
   * @param  {Integer} id - A unique ID
   * @return {Element}
   */
  createCheckboxItem_(id) {
    let checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.value = `checkbox-${id}`;
    let li = document.createElement('li');
    li.append(checkbox);
    return li;
  }
}
