module.exports = function(app, dbApi) {
  app.get('/api/health', function(req, res) {
    //health check
    dbApi.users.leads.getAllLeads(function(err, leads) {
      if (err) {
      	console.log("error: " + JSON.stringify(err));
      } else {
      	console.log("JSON: " + JSON.stringify(leads));
      }
    })
    res.json({ status: "ok" });
  });
}
