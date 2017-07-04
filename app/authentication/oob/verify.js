exports = module.exports = function(gateway) {
  
  return function(authenticator, txnID, cb) {
    var type = authenticator.vendor;
    return gateway.verify(type, authenticator, txnID, cb);
  };
};

exports['@implements'] = 'http://schemas.authnomicon.org/js/security/authentication/oob/verify';
exports['@require'] = [
  './gateway'
];
