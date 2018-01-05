export class Helpers {

  constructor() {
    this.cssClasses = {
      SELECTED: 'ids-tabs--tab--active',
      DISABLED: 'ids-tabs--tab--disabled',
      TAB: 'ids-tabs--tab'
    };
    return this;
  }

  /**
   * Create a fixture for DOM testing
   * @param  {Integer} numTabs - The number of tabs
   * @return {[type]}         [description]
   */
  createTabFixture(numTabs) {
    let div = document.createElement("div");

    for (var i = 0; i < numTabs; i++) {
      let el = document.createElement("a");
      el.classList.add(this.cssClasses.TAB);
      div.appendChild(el);
    }
    return div;
  }
}
