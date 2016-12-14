module.exports = function(app, db) {
  var module = {
  	leads: require('./leads/base')(app, db)
  };

  return module;
}