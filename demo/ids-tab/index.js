requirejs.config({
  //By default load any module IDs from js/lib
  baseUrl: './dist'
});

// Files are the arr list]
requirejs(['tab'], function(ids) {
  var horizTab = new ids.IDSTab(document.getElementsByClassName('ids-tabs--horizontal')[0]);
  var vertTab = new ids.IDSTab(document.getElementsByClassName('ids-tabs--vertical')[0]);
});
