var mongoose = require('mongoose'),
    debug    = require('debug')('app:models');

var clientSchema = new mongoose.Schema({
  name:   String,
  phone: String,
  email: String,
  projects: [{type: mongoose.Schema.Types.ObjectId, ref: 'Project'}]
});

var Client = mongoose.model('Client', clientSchema);

module.exports = Client;
