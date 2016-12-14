module.exports = function(app, db) {


  var module = {

    getAllLeads: function(callback) {

      var exec = function() {
        db.getConnection(function(err, connection) {
          if (err) {
            callback(err, null);
          } else {
            connection.query("SELECT user_email FROM users;", function(err, userDocs) {
              if (err) {
                callback(err);
              } else {
                callback(false, userDocs);
              }
              connection.release();
            });
          }
        });
      }

      exec();
    }

  };

  return module;

};
