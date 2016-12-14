module.exports = function(app, db) {

  var module = {
    users: require('./users/base')(app, db)
  };

  return module;
}