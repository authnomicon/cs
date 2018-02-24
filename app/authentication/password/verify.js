exports = module.exports = function(directory) {
  
  return function(username, password, cb) {
    console.log('## verify password');
    console.log(username);
    
    //return;
    
    directory.authenticate(username, password, function(err, user) {
      if (err) { return cb(err); }
      if (!user) { return cb(null, false); }
      
      var info = { method: 'password' };
      return cb(null, user, info);
    });
  };
};

exports['@implements'] = 'http://schemas.authnomicon.org/js/security/authentication/password/verifyFn';
exports['@require'] = [ 'http://i.bixbyjs.org/ds/Directory' ];
