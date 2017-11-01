import { Helpers } from "./helpers.spec.js"
import { IUXSelect } from "../../../src/packages/iux-select/select.js";


describe("A Select class", () => {
  const helpers = new Helpers();
  const numChildren = 2;
  const mockHtml = helpers.createSelectFixture(numChildren);

  /**
   * constructor
   */
  describe("when initiated", () => {
    it("should return the constructed class", () => {
      const iuxSelect = new IUXSelect(mockHtml);
      expect(iuxSelect).toBeDefined();
    });
  });

  /**
   * toggle()
   */
  describe('when toggled', function() {
    let iuxSelect;

    beforeEach(function() {
      iuxSelect = new IUXSelect(mockHtml);
    });

    it("and there is no open class should add the open class", () => {
      iuxSelect.toggle();
      expect(iuxSelect.rootEl_.classList).toContain(helpers.cssClasses.OPEN);
    });

    it("and there is an open class should remove the open class", () => {
      iuxSelect.rootEl_.classList.add(helpers.cssClasses.OPEN);
      iuxSelect.toggle();
      expect(iuxSelect.rootEl_.classList).not.toContain(helpers.cssClasses.OPEN);
    });
  });

  /**
   * close()
   */
  describe('when closed', function() {
    let iuxSelect;

    beforeEach(function() {
      iuxSelect = new IUXSelect(mockHtml);
    });

    it("should remove the open class", () => {
      iuxSelect.close();
      expect(iuxSelect.rootEl_.classList).not.toContain(helpers.cssClasses.OPEN);
    });
  });

  /**
   * selectItem
   */
  describe('when and item is selected', function() {
    let iuxSelect;

    beforeEach(function() {
      iuxSelect = new IUXSelect(mockHtml);
      spyOn(iuxSelect, 'clearSelection');
      iuxSelect.selectItem(iuxSelect.menuEl_.children[0]);
    });

    it("should call clear selection", () => {
      expect(iuxSelect.clearSelection).toHaveBeenCalled();
    });


    it("should set the input value", () => {
      expect(iuxSelect.inputEl_.value).toBe('0');
    });

    it("should add a class to the element", () => {
      expect(iuxSelect.menuEl_.children[0].classList).toContain(helpers.cssClasses.SELECTED);
    });
  });


  /**
   * clearSelection()
   */
  describe('when and item is selected', function() {
    let iuxSelect;

    beforeEach(function() {
      iuxSelect = new IUXSelect(mockHtml);
      iuxSelect.menuEl_.children[0].classList.add(helpers.cssClasses.SELECTED);
      iuxSelect.menuEl_.children[1].classList.add(helpers.cssClasses.SELECTED);

      iuxSelect.clearSelection();
    });

    it("should call clear all selected items", () => {
      let countOfSelected = 0;

      if (iuxSelect.menuEl_.children[0].classList.contains(helpers.cssClasses.SELECTED)) {
        countOfSelected++;
      }

      if (iuxSelect.menuEl_.children[1].classList.contains(helpers.cssClasses.SELECTED)) {
        countOfSelected++;
      }

      expect(countOfSelected).toBe(0);
    });
  });
});
