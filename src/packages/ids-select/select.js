const cssClasses = {
  OPEN: 'ids-select--open',
  SELECTED: 'ids-select--menu--selected'
};

/**
 * Class IDSSelect
 */
export class IDSSelect {

  /**
   * constructor
   * @param  {object} root - The root element of the select
   */
  constructor(root) {
    this.rootEl_ = root;
    this.inputEl_ = this.rootEl_.querySelector('.ids-select--input');
    this.menuEl_ = this.rootEl_.querySelector('.ids-select--menu');

    this.inputEl_.addEventListener('click', (e) => {
      this.toggle();
    });

    this.menuEl_.addEventListener('click', (e) => {
      this.selectItem(e.target);
      this.toggle();
    });

    return this;
  }

  /**
   * Toggle select class
   */
  toggle() {
    this.rootEl_.classList.toggle(cssClasses.OPEN);
  }

  /**
   * Remove select open class
   */
  close() {
    this.rootEl_.classList.remove(cssClasses.OPEN);
  }

  /**
   * Select a select item
   * @param  {object} el - DOM element selected
   */
  selectItem(el) {
    this.clearSelection();
    this.inputEl_.value = el.dataset.value;
    el.classList.add(cssClasses.SELECTED);
  }

  /**
   * Remove all selected classes
   */
  clearSelection() {
    let selected = this.menuEl_.querySelectorAll('.' + cssClasses.SELECTED);
    selected.forEach(el => {
      el.classList.remove(cssClasses.SELECTED);
    });
  }
}


/**
 * Class for IDSSelectMulti
 * @extends IDSSelect
 */
export class IDSMultiSelect extends IDSSelect {

  /**
   * Select a select item checkbox
   */
  selectItem() {
    const checks = this.menuEl_.querySelectorAll('[type=checkbox]');
    let currentVals = [];

    checks.forEach((chk) => {
      if (chk.checked) {
        currentVals.push(chk.value)
      }
    });

    this.inputEl_.value = currentVals.join(', ');
  }

}
