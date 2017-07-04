exports = module.exports = function(gateway) {
  
  return function(authenticator, cb) {
    var type = authenticator.vendor;
    return gateway.challenge(type, authenticator, cb);
  };
};

exports['@implements'] = 'http://schemas.authnomicon.org/js/security/authentication/oob/challenge';

// // TODO: Make channels/vendors pluggable, and then remove this
exports['@require'] = [
  './gateway'
];
