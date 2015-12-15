var mongoose = require('mongoose'),
    debug    = require('debug')('app:models');

var userSchema = new mongoose.Schema({
  name:   String,
  email: String,
  phone: String,
  googleID: String,
  clients: [{type: mongoose.Schema.Types.ObjectId, ref: 'Client'}]
});

var User = mongoose.model('User', userSchema);

module.exports = User;
