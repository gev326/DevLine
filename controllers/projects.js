// Require resource's model(s).
var Project = require('../models/project')

module.exports = {

  all: function(req, res) {
    Project.find({}, function(err, projects) {
      if(err) return res.status(err.statusCode || 500).json(err);
      res.json(projects);
    });
  },

};
