// Require resource's model(s).
var User = require('../models/user')

  var userShow = function(req, res, next) {
    var id = req.params.id;

    User.findById(id, function(err,user) {
      if(err) {
        res.send(err);
      }

      res.json(user);
    });
}


  var userIndex = function(req,res) {
    User.find({}, function(err,users) {
      if(err) {
        res.send(err)
      }
      res.json(users);
    });
  }

module.exports = {
  userShow:   userShow,
  userIndex:  userIndex
}
