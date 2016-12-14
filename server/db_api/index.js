module.exports = function(app, db, base) {
  
  var base = require("./base")(app, db);

  var module = {
  	users: require('./users')(app, db, base)
  };

  return module;
}