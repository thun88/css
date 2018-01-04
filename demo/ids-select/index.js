requirejs.config({
  //By default load any module IDs from js/lib
  baseUrl: './dist'
});

// Files are the arr list]
requirejs(['select'], (ids) => {
  let singleSelect = new ids.IDSSelect(document.getElementsByClassName('ids-select')[0]);
  let multiSelect = new ids.IDSMultiSelect(document.getElementsByClassName('ids-select')[1]);
});
