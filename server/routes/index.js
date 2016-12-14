module.exports = function(app, dbApi) {
  app.get('/api/health', function(req, res) {

    res.json({status: "ok"});
  });
}