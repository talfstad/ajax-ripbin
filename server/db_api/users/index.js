module.exports = function(app, db, base) {
  var module = {
  	leads: require('./leads')(app, db, base)
  };

  return module;
}