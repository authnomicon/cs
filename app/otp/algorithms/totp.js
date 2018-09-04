exports = module.exports = function() {
  var TotpAlgorithm = require('../../../lib/otp/algorithms/hotp');
  
  return new TotpAlgorithm();
};

exports['@implements'] = 'http://schemas.authnomicon.org/js/security/authentication/otp/Algorithm';
exports['@algorithm'] = 'totp';
exports['@require'] = [];
