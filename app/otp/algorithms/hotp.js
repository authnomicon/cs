exports = module.exports = function() {
  var HotpAlgorithm = require('../../../lib/otp/algorithms/hotp');
  
  return new HotpAlgorithm();
};

exports['@implements'] = 'http://schemas.authnomicon.org/js/security/authentication/otp/Algorithm';
exports['@algorithm'] = 'hotp';
exports['@require'] = [];
