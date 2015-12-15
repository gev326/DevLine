// Require resource's model(s).
var Client  = require('../models/client')

module.exports = {

  all: function(req, res) {
    Client.find({}, function(err, clients) {
      if(err) return res.status(err.statusCode || 500).json(err);
      res.json(clients);
    });
  },

};
