import { Helpers } from "./helpers.js";
import { IDSTab } from "../../../src/packages/ids-tab/tab.js";


describe("A Tab", () => {
  const helpers = new Helpers();
  const numChildren = 2;
  const mockHtml = helpers.createTabFixture(numChildren);

  /**
   * constructor
   */
  describe("when initiated", () => {

    it("should return the constructed tab", () => {
      const idsTab = new IDSTab(mockHtml);
      expect(idsTab).toBeDefined();
    });

    describe("should set the active tab index", () => {
      let activeIdx = 1;

      it("to 0 (default)", () => {
        const idsTab = new IDSTab(mockHtml);
        expect(idsTab.activeTabIndex_).toBe(0);
      });

      it("to the tab element with active class", () => {
        const tmpFixture = mockHtml;
        tmpFixture.children[activeIdx].classList.add(helpers.cssClasses.SELECTED);
        const idsTab = new IDSTab(tmpFixture);
        expect(idsTab.activeTabIndex_).toBe(activeIdx);
      });
    });
  });

  /**
   * setActiveTab()
   */
  describe("when setting the active tab and the tab is outside of the tab list", () => {
    it("should return an integer", () => {
      const notTab = document.createElement('a');
      const idsTab = new IDSTab(mockHtml);
      const result = idsTab.setActiveTab.bind(null, idsTab.tabs[notTab]);
      expect(result).toThrowError();
    });
  });

  /**
   * getTabIndex()
   */
  describe("when requesting the index of a tab", () => {
    it("should return an integer", () => {
      const idsTab = new IDSTab(mockHtml);
      const idx = 1;
      const result = idsTab.getTabIndex(idsTab.tabs[idx]);
      expect(result).toBe(idx);
    });
  });


  /**
   * switchToTabAtIndex()
   */
  describe("when switching to a tab at an index", () => {
    let idsTab;
    const oldIdx = 0;
    const tmpFixture = mockHtml;
    tmpFixture.children[oldIdx].classList.add(helpers.cssClasses.SELECTED);

    describe("and the index is already the active tab", () => {
      it("returns", () => {
        const newIdx = oldIdx;
        idsTab = new IDSTab(tmpFixture);
        const result = idsTab.switchToTabAtIndex(newIdx);
        expect(result).toBeFalsy();
      });
    });

    describe("and the index is out of bounds", () => {
      it("throws an error", () => {
        const newIdx = tmpFixture.children.length + 1;
        idsTab = new IDSTab(tmpFixture);
        const result = idsTab.switchToTabAtIndex.bind(null, newIdx);
        expect(result).toThrowError();
      });
    });

    describe("and the index is in bounds", () => {
      const newIdx = 1

      beforeEach(function() {
        idsTab = new IDSTab(tmpFixture);
        idsTab.switchToTabAtIndex(newIdx);
      });

      it("should add the active class to the index", () => {
        expect(idsTab.tabs[newIdx].classList.length).toBe(2);
      });

      it("should remove the active class from previous active index", () => {
        expect(idsTab.tabs[oldIdx].classList.length).toBe(1);
      });
    });
  });
});
