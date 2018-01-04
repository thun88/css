requirejs.config({
  //By default load any module IDs from js/lib
  baseUrl: './dist'
});

// Files are the arr list]
requirejs(['select'], (iux) => {
  let singleSelect = new iux.IUXSelect(document.getElementsByClassName('iux-select')[0]);
  let multiSelect = new iux.IUXMultiSelect(document.getElementsByClassName('iux-select')[1]);
});
