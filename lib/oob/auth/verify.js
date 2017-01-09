exports = module.exports = function(verify, authenticatorsDir) {

  return function(req, user, token, cb) {
    
    // TODO: Decode the oob token to determine the authenticator ID, context
    
    var authenticatorID = '0';
    var context = {};
    context.transactionID = token;
    
    authenticatorsDir.get(user, authenticatorID, function(err, authenticator) {
      if (err) { return cb(err); }
      
      var opts = { context: context };
      // TODO: Support for confirmation codes
      //if (body.confirmation_code) {
      //  opts.secret = body.confirmation_code;
      //}
      
      verify(authenticator, context.transactionID, opts, function(err, ok) {
        if (err) { return cb(err); }
        if (ok === undefined || ok === false) { // pending or denied
          return cb(null, ok);
        }
        
        // TODO: Add any transaction context to authInfo.
        return cb(null, true);
      });
    });
  };
};

exports['@require'] = [
  'http://schemas.authnomicon.org/js/login/mfa/opt/auth0/oob/verify',
  'http://schemas.authnomicon.org/js/login/mfa/opt/auth0/UserAuthenticatorsDirectory'
];
