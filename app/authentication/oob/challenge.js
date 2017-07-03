exports = module.exports = function(auth0Challenge, duoChallenge) {
  
  return function(authenticator, cb) {
    switch (authenticator.vendor) {
    case 'auth0':
      return auth0Challenge(authenticator, cb);
    //case 'duo':
      //return duoVerify(authenticator, txnID, cb);
    default:
      return cb(new Error('Unknown authenticator vendor'))
    }
  };
};

exports['@implements'] = 'http://schemas.authnomicon.org/js/security/authentication/oob/challenge';

// // TODO: Make channels/vendors pluggable, and then remove this
exports['@require'] = [
  'http://schemas.authnomicon.org/js/login/mfa/opt/auth0/oob/challenge',
  //'http://schemas.authnomicon.org/js/login/mfa/opt/duo/oob/verify'
];
