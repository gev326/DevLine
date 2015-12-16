var mongoose = require('mongoose'),
    debug    = require('debug')('app:models');

//embedding projects/clients into users
var projectSchema = new mongoose.Schema({
  name:   String,
  rate: Number,
  hourly: Boolean,
  hrlyDesign: Number,
  hrlyPlanning: Number,
  hrlyQA: Number,
  hrlyRefactor: Number,
  cost: Number
});

var clientSchema = new mongoose.Schema({
  name:  String,
  phone: String,
  email: String,
  projects: [projectSchema]
});

var userSchema = new mongoose.Schema({
  name:   String,
  email: String,
  googleID: String,
  clients: [clientSchema]
});


var User = mongoose.model('User', userSchema);

module.exports = User;
