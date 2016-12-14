var _ = require('underscore');

var base = {
  port: 3000,
  maxSockets: 100,
  dbConnectionInfo: {
    multipleStatements: true,
    connectionLimit: 100
  }
};

var init = function(env) {

  var test = {
    loglevel: 'all',
    dbConnectionInfo: _.extend({
      host: 'ripbin.cynwtdt18kyi.us-west-2.rds.amazonaws.com',
      user: 'buildcave',
      password: 'Wewillrockyou1986!',
      database: 'test'
    }, base.dbConnectionInfo),
    port: base.port,
    maxSockets: base.maxSockets
  };

  var prod = {
    loglevel: 'all',
    dbConnectionInfo: _.extend({
      host: 'ripbin.cynwtdt18kyi.us-west-2.rds.amazonaws.com',
      user: 'buildcave',
      password: 'Wewillrockyou1986!',
      database: 'prod'
    }, base.dbConnectionInfo),
    port: base.port,
    maxSockets: base.maxSockets
  };

  switch (env) {
    case 'dev':
      return test;
      break;
    case 'prod':
      return prod;
      break;
    default:
      return test;
      break;
  }
}

module.exports = init;
