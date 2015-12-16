// Require resource's model(s).
var User    = require('../models/user')

  var clientCreate = function(req,res) {

    User.findById(req.user._id, function(err, user){
        user.clients.push({
          name:   req.body.name,
          phone:  req.body.phone,
          email:  req.body.email,
          projects: []
        });
        user.save(function(err){
          if(err) {
            res.send(err)
          }
          res.json(user.clients.pop());
        });
    })

  };


var allClients = function(req,res) {
  User.findById(req.user._id, function(err, user) {
      res.json(user.clients);
  });
};

var createProject = function(req,res) {
   User.findById(req.user._id, function(err, user) {
      var client = user.clients.filter(function(c) {
        console.log(c._id + "  hey");
        return c._id.toString();
      })[0];


      console.log(client + " Here you go");

      client.projects.push({
        name:         req.body.name,
        rate:         req.body.rate,
        hourly:       req.body.hourly,
        hrlyDesign:   req.body.hrlyDesign,
        hrlyPlanning: req.body.hrlyPlanning,
        hrlyQA:       req.body.hrlyQA,
        hrlyRefactor: req.body.hrlyRefactor,
        cost:         req.body.cost
      });

      user.save(function(err) {
        res.json(client.projects.pop());
      })
  });
}
module.exports = {
  clientCreate:  clientCreate,
  allClients:    allClients,
  createProject: createProject
}


