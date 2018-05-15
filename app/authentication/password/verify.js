exports = module.exports = function(realms) {
  
  return function(username, password, realm, cb) {
    console.log('AUTHENTICATE USER!!!');
    console.log(username);
    console.log(password);
    console.log(realm);
    
    
    if (typeof realm == 'function') {
      cb = realm;
      realm = undefined;
    }
    
    realms.authenticate(username, password, realm, function(err, user) {
      console.log('AUTHENTICATED!');
      console.log(err);
      console.log(user)
      
      //return;
      
    
    //realms.resolve(realm, function(err, realm) {
      //console.log(err);
      //console.log(realm);
      
      //var pwver = realm.createPasswordVerifier(function() {
        //console.log('PW VERIFIER READY!')
        
        //pwver.verify(username, password, function(err, user) {
          console.log('verify:');
          console.log(err);
          console.log(user);
          
          if (err) { return cb(err); }
          if (!user) { return cb(null, false); }
          
          // TODO: If user === true, then look up in directory
          /*
          var dir = realm.createDirectory(function() {
            console.log('DIRECTORY READY!')
          });
          */
      
          var info = { method: 'password' };
          //info.realm = realm;
          return cb(null, user, info);
          //});
        //});
    });
  };
};

exports['@implements'] = 'http://schemas.authnomicon.org/js/security/authentication/password/verifyFn';
exports['@require'] = [
  'http://schemas.modulate.io/js/aaa/realms'
];
