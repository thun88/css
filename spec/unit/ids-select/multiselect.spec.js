import { Helpers } from "./helpers.js"
import { IDSSelect } from "../../../src/packages/ids-select/select.js";
import { IDSMultiSelect } from "../../../src/packages/ids-select/select.js";


describe("A MultiSelect class", () => {
  const helpers = new Helpers();
  const numItems = 2
  const mockHtml = helpers.createSelectFixture(numItems, true);

  /**
   * constructor
   */
  describe("when initiated", () => {
    it("should return the constructed class", () => {
      const idsMulti = new IDSMultiSelect(mockHtml);
      expect(idsMulti).toBeDefined();
    });
  });

  /**
   * selectItem
   */
  describe('when an item is selected', function() {
    let idsMulti;

    beforeEach(function() {
      idsMulti = new IDSMultiSelect(mockHtml);
      const checks = idsMulti.menuEl_.querySelectorAll('[type=checkbox]');
      checks.forEach((chk) => {
        chk.checked = true;
      })

      idsMulti.selectItem();
    });

    it("should add the checked value to the input", () => {
      expect(idsMulti.inputEl_.value).toBe('checkbox-0, checkbox-1');
    });

  });
});
