module.exports = function(app, dbApi) {
  app.get('/health', function(req, res) {

    res.json({status: "ok"});
  });
}