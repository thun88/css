import { IUXTab } from '../../../src/packages/iux-tab/tab.js';

describe("Initiating a tab", () => {
  let tab;
  let htmlFixture = document.createElement('div');

  for (var i = 0; i < 3; i++) {
    let el = document.createElement('a');
    el.classList.add('iux-tabs--tab');
    htmlFixture.appendChild(el);
  }

  beforeEach(function() {
    tab = new IUXTab(htmlFixture);
  });

  it('should return the root element', () => {
    expect(tab).toBeDefined();
  });

  it('should set vars', () => {
      // console.log(tab.tabs);
  //   expect(tab.setActiveTab).toHaveBeenCalled();
  });




});
