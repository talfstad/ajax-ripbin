module.exports = function(app, dbApi) {

  app.get('/api/health', function(req, res) {
    //health check
    res.json({ status: "ok" });
  });

  app.get('/api/users/leads', function(req, res) {
    //health check
    dbApi.users.leads.getAllLeads(function(err, leads) {
      if (err) {
        res.json(err);
      } else {
        res.json(leads);
      }
    });
  });

}
