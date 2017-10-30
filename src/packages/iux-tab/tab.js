const cssClasses = {
  SELECTED: 'iux-tabs--tab--active',
  DISABLED: 'iux-tabs--tab--disabled',
  TAB: 'iux-tabs--tab'
};

/**
 * Class IUXTab
 */
export class IUXTab {

  /**
   * constructor
   * @param  {object} root - The tabs container
   */
  constructor(root) {
    this.rootEl_ = root;
    this.activeTabIndex_ = -1;
    this.tabs = this.rootEl_.querySelectorAll(`.${cssClasses.TAB}:not(.${cssClasses.DISABLED})`);

    this.tabs.forEach(el => {
      el.addEventListener('click', (e) => {
        this.setActiveTab(e.target);
      });

      if (el.classList.contains(cssClasses.SELECTED) > 0) {
        this.activeTabIndex_ = this.getTabIndex(el);
      }
    });

    return this;
  }

  /**
   * @private
   * @param {HTMLElement} tab - A tab element
   * @return {Integer}
   */
  getTabIndex(tab) {
    return Array.prototype.indexOf.call(this.tabs, tab);
  }

  /**
   * Set a tab to active
   * @param  {HTMLElement} activeTab - The active tab element
   */
  setActiveTab(activeTab) {
    const indexOfTab = this.getTabIndex(activeTab);
    if (indexOfTab < 0) {
      throw new Error('Invalid tab component given as activeTab: Tab not found within this component\'s tab list');
    }

    this.switchToTabAtIndex(indexOfTab);
  }


  /**
   * @private
   * @param  {Integer} index - The index of a tab
   */
  switchToTabAtIndex(index) {
    if (index === this.activeTabIndex_) {
      return;
    }

    if (index < 0 || index >= this.tabs.length) {
      throw new Error(`Out of bounds index specified for tab: ${index}`);
    }

    const prevActiveTabIndex = this.activeTabIndex_;
    this.activeTabIndex_ = index;

    this.tabs.item(this.activeTabIndex_).classList.add(cssClasses.SELECTED);
    this.tabs.item(prevActiveTabIndex).classList.remove(cssClasses.SELECTED);
  }
}
