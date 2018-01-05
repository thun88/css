import { Helpers } from "./helpers.js"
import { IDSSelect } from "../../../src/packages/ids-select/select.js";


describe("A Select class", () => {
  const helpers = new Helpers();
  const numChildren = 2;
  const mockHtml = helpers.createSelectFixture(numChildren);

  /**
   * constructor
   */
  describe("when initiated", () => {
    it("should return the constructed class", () => {
      const idsSelect = new IDSSelect(mockHtml);
      expect(idsSelect).toBeDefined();
    });
  });

  /**
   * toggle()
   */
  describe('when toggled', function() {
    let idsSelect;

    beforeEach(function() {
      idsSelect = new IDSSelect(mockHtml);
    });

    it("and there is no open class should add the open class", () => {
      idsSelect.toggle();
      expect(idsSelect.rootEl_.classList).toContain(helpers.cssClasses.OPEN);
    });

    it("and there is an open class should remove the open class", () => {
      idsSelect.rootEl_.classList.add(helpers.cssClasses.OPEN);
      idsSelect.toggle();
      expect(idsSelect.rootEl_.classList).not.toContain(helpers.cssClasses.OPEN);
    });
  });

  /**
   * close()
   */
  describe('when closed', function() {
    let idsSelect;

    beforeEach(function() {
      idsSelect = new IDSSelect(mockHtml);
    });

    it("should remove the open class", () => {
      idsSelect.close();
      expect(idsSelect.rootEl_.classList).not.toContain(helpers.cssClasses.OPEN);
    });
  });

  /**
   * selectItem
   */
  describe('when an item is selected', function() {
    let idsSelect;

    beforeEach(function() {
      idsSelect = new IDSSelect(mockHtml);
      spyOn(idsSelect, 'clearSelection');
      idsSelect.selectItem(idsSelect.menuEl_.children[0]);
    });

    it("should call clear selection", () => {
      expect(idsSelect.clearSelection).toHaveBeenCalled();
    });


    it("should set the input value", () => {
      expect(idsSelect.inputEl_.value).toBe('0');
    });

    it("should add a class to the element", () => {
      expect(idsSelect.menuEl_.children[0].classList).toContain(helpers.cssClasses.SELECTED);
    });
  });


  /**
   * clearSelection()
   */
  describe('when and item is selected', function() {
    let idsSelect;

    beforeEach(function() {
      idsSelect = new IDSSelect(mockHtml);
      idsSelect.menuEl_.children[0].classList.add(helpers.cssClasses.SELECTED);
      idsSelect.menuEl_.children[1].classList.add(helpers.cssClasses.SELECTED);

      idsSelect.clearSelection();
    });

    it("should call clear all selected items", () => {
      let countOfSelected = 0;

      if (idsSelect.menuEl_.children[0].classList.contains(helpers.cssClasses.SELECTED)) {
        countOfSelected++;
      }

      if (idsSelect.menuEl_.children[1].classList.contains(helpers.cssClasses.SELECTED)) {
        countOfSelected++;
      }

      expect(countOfSelected).toBe(0);
    });
  });
});
