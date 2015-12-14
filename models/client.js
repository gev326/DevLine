var mongoose = require('mongoose'),
    debug    = require('debug')('app:models');

var clientSchema = new mongoose.Schema({
  name:   String,
  phone: String,
  email: String,
  googleID: String,
  projects: [Project];
});

var User = mongoose.model('User', userSchema);

module.exports = User;
