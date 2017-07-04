exports = module.exports = function(gateway) {
  
  return function(authenticator, txnID, options, cb) {
    if (typeof options == 'function') {
      cb = options;
      options = undefined;
    }
    options = options || {};
    
    var type = authenticator.vendor;
    return gateway.verify(type, authenticator, txnID, options, cb);
  };
};

exports['@implements'] = 'http://schemas.authnomicon.org/js/security/authentication/oob/verify';
exports['@require'] = [
  './gateway'
];
