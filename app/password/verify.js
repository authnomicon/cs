exports = module.exports = function(ds) {
  
  return function(username, password, realm, cb) {
    if (typeof realm == 'function') {
      cb = realm;
      realm = undefined;
    }
    
    ds.authenticate(username, password, realm, function(err, user) {
      if (err) { return cb(err); }
      if (!user) { return cb(null, false); }
  
      var info = { method: 'password' };
      //info.realm = realm;
      return cb(null, user, info);
    });
  };
};

exports['@implements'] = 'http://schemas.authnomicon.org/js/security/authentication/password/verifyFn';
exports['@require'] = [
  'http://schemas.authnomicon.org/js/ds/realms'
];
