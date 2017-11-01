import { Helpers } from "./helpers.spec.js";
import { IUXTab } from "../../../src/packages/iux-tab/tab.js";


describe("A Tab", () => {
  const helpers = new Helpers();
  const numChildren = 2;
  const mockHtml = helpers.createTabFixture(numChildren);

  /**
   * constructor
   */
  describe("when initiated", () => {

    it("should return the constructed tab", () => {
      const iuxTab = new IUXTab(mockHtml);
      expect(iuxTab).toBeDefined();
    });

    describe("should set the active tab index", () => {
      let activeIdx = 1;

      it("to 0 (default)", () => {
        const iuxTab = new IUXTab(mockHtml);
        expect(iuxTab.activeTabIndex_).toBe(0);
      });

      it("to the tab element with active class", () => {
        const tmpFixture = mockHtml;
        tmpFixture.children[activeIdx].classList.add(helpers.cssClasses.SELECTED);
        const iuxTab = new IUXTab(tmpFixture);
        expect(iuxTab.activeTabIndex_).toBe(activeIdx);
      });
    });
  });

  /**
   * setActiveTab()
   */
  describe("when setting the active tab and the tab is outside of the tab list", () => {
    it("should return an integer", () => {
      const notTab = document.createElement('a');
      const iuxTab = new IUXTab(mockHtml);
      const result = iuxTab.setActiveTab.bind(null, iuxTab.tabs[notTab]);
      expect(result).toThrowError();
    });
  });

  /**
   * getTabIndex()
   */
  describe("when requesting the index of a tab", () => {
    it("should return an integer", () => {
      const iuxTab = new IUXTab(mockHtml);
      const idx = 1;
      const result = iuxTab.getTabIndex(iuxTab.tabs[idx]);
      expect(result).toBe(idx);
    });
  });


  /**
   * switchToTabAtIndex()
   */
  describe("when switching to a tab at an index", () => {
    let iuxTab;
    const oldIdx = 0;
    const tmpFixture = mockHtml;
    tmpFixture.children[oldIdx].classList.add(helpers.cssClasses.SELECTED);

    describe("and the index is already the active tab", () => {
      it("returns", () => {
        const newIdx = oldIdx;
        iuxTab = new IUXTab(tmpFixture);
        const result = iuxTab.switchToTabAtIndex(newIdx);
        expect(result).toBeFalsy();
      });
    });

    describe("and the index is out of bounds", () => {
      it("throws an error", () => {
        const newIdx = tmpFixture.children.length + 1;
        iuxTab = new IUXTab(tmpFixture);
        const result = iuxTab.switchToTabAtIndex.bind(null, newIdx);
        expect(result).toThrowError();
      });
    });

    describe("and the index is in bounds", () => {
      const newIdx = 1

      beforeEach(function() {
        iuxTab = new IUXTab(tmpFixture);
        iuxTab.switchToTabAtIndex(newIdx);
      });

      it("should add the active class to the index", () => {
        expect(iuxTab.tabs[newIdx].classList.length).toBe(2);
      });

      it("should remove the active class from previous active index", () => {
        expect(iuxTab.tabs[oldIdx].classList.length).toBe(1);
      });
    });
  });
});
