exports = module.exports = function(verify, authenticatorsDir, stateStore) {

  return function(req, user, token, cb) {
    
    stateStore.load(req, token, function(err, state) {
      if (err) { return cb(err); }
    
    
      authenticatorsDir.get(user, state.authenticator, function(err, authenticator) {
        if (err) { return cb(err); }
        // TODO: Error if no authenticator??
      
      
        // TODO: Support for confirmation codes
        //if (body.confirmation_code) {
        //  opts.secret = body.confirmation_code;
        //}
      
        verify(authenticator, state.transaction, function(err, ok) {
          if (err) { return cb(err); }
          if (ok === undefined || ok === false) { // pending or denied
            return cb(null, ok);
          }
        
          // TODO: Add any transaction context to authInfo.
          return cb(null, true);
        });
      });
    });
  };
};

exports['@require'] = [
  'http://schemas.authnomicon.org/js/login/mfa/opt/auth0/oob/verify',
  'http://schemas.authnomicon.org/js/login/mfa/opt/auth0/UserAuthenticatorsDirectory',
  'http://i.bixbyjs.org/www/ceremony/StateStore'
];
