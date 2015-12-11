var _ = require('lodash');

var localEnvVars = {
  TITLE:      'devline',
  SAFE_TITLE: 'devline'
};

// Merge all environmental variables into one object.
module.exports = _.extend(process.env, localEnvVars);
