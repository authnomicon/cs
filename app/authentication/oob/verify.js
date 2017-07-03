exports = module.exports = function(duoVerify) {
  
  return function(authenticator, txnID, cb) {
    switch (authenticator.vendor) {
    case 'duo':
      return duoVerify(authenticator, txnID, cb);
    }
  };
};

exports['@implements'] = 'http://schemas.authnomicon.org/js/security/authentication/oob/verify';

// // TODO: Make channels/vendors pluggable, and then remove this
exports['@require'] = [
  'http://schemas.authnomicon.org/js/login/mfa/opt/duo/oob/verify'
];
