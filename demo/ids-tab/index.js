requirejs.config({
  //By default load any module IDs from js/lib
  baseUrl: './dist'
});

// Files are the arr list]
requirejs(['tab'], function(iux) {
  var horizTab = new iux.IUXTab(document.getElementsByClassName('iux-tabs--horizontal')[0]);
  var vertTab = new iux.IUXTab(document.getElementsByClassName('iux-tabs--vertical')[0]);
});
