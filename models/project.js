var mongoose = require('mongoose'),
    debug    = require('debug')('app:models');

var projectSchema = new mongoose.Schema({
  name:   String,
  rate: Number,
  hourly: Boolean,
  hrlyDesign: Number
});

var Project = mongoose.model('Project', projectSchema);

module.exports = Project;
