import { IUXTab } from '../../../src/packages/iux-tab/tab.js';

describe("Tab", function() {

  it('The getTabIndex should return the index of a tab', () => {
    const myTab = new IUXTab([]);

    const arr = [ {id:1}, {id:2}];

    expect(myTab.getTabIndex({id:2})).toEqual(1);


  })
});
