module.exports.register = function (handlebars) {

  /**
   * Compare two strings
   * @param {String} lvalue
   * @param {String} rvalue
   * @param {Object} options
   */
  handlebars.registerHelper('equal', function(lvalue, rvalue, options) {
    if (arguments.length < 3)
        throw new Error("Handlebars Helper equal needs 2 parameters");
    if( lvalue!=rvalue ) {
        return options.inverse(this);
    } else {
        return options.fn(this);
    }
  });
};
