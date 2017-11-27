import { Helpers } from "./helpers.js"
import { IUXSelect } from "../../../src/packages/iux-select/select.js";
import { IUXMultiSelect } from "../../../src/packages/iux-select/select.js";


describe("A MultiSelect class", () => {
  const helpers = new Helpers();
  const numItems = 2
  const mockHtml = helpers.createSelectFixture(numItems, true);

  /**
   * constructor
   */
  describe("when initiated", () => {
    it("should return the constructed class", () => {
      const iuxMulti = new IUXMultiSelect(mockHtml);
      expect(iuxMulti).toBeDefined();
    });
  });

  /**
   * selectItem
   */
  describe('when an item is selected', function() {
    let iuxMulti;

    beforeEach(function() {
      iuxMulti = new IUXMultiSelect(mockHtml);
      const checks = iuxMulti.menuEl_.querySelectorAll('[type=checkbox]');
      checks.forEach((chk) => {
        chk.checked = true;
      })

      iuxMulti.selectItem();
    });

    it("should add the checked value to the input", () => {
      expect(iuxMulti.inputEl_.value).toBe('checkbox-0, checkbox-1');
    });

  });
});
