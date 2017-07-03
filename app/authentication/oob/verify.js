exports = module.exports = function(auth0Verify, duoVerify) {
  
  return function(authenticator, txnID, cb) {
    switch (authenticator.vendor) {
    case 'auth0':
      return auth0Verify(authenticator, txnID, cb);
    case 'duo':
      return duoVerify(authenticator, txnID, cb);
    default:
      return cb(new Error('Unknown authenticator vendor'))
    }
  };
};

exports['@implements'] = 'http://schemas.authnomicon.org/js/security/authentication/oob/verify';

// // TODO: Make channels/vendors pluggable, and then remove this
exports['@require'] = [
  'http://schemas.authnomicon.org/js/login/mfa/opt/auth0/oob/verify',
  'http://schemas.authnomicon.org/js/login/mfa/opt/duo/oob/verify'
];
