exports = module.exports = function() {
  var TotpAlgorithm = require('passport-otp').TotpAlgorithm;
  
  return new TotpAlgorithm();
};

exports['@implements'] = 'http://schemas.authnomicon.org/js/security/authentication/otp/Algorithm';
exports['@algorithm'] = 'totp';
exports['@require'] = [];
