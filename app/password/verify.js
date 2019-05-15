exports = module.exports = function(connect, ns, services) {
  
  return function(username, password, domain, cb) {
    console.log('RESOLVE DOMAIN!');
    console.log(domain)
    
    //var type = 'auth0-oauth2-ro'
    var type = 'auth0-oauth2-token-password'
    //var type = 'okta-password'
    if (domain) {
      type = [ type, domain ].join('.')
    }
    
    console.log('RESOLVE TYPE: ' + type);
    
    connect([ type ], function(err, conn) {
      if (err) { return cb(err); }
      console.log('WE ARE CONNECTED!');
      console.log(conn);
      
      conn.verify(username, password, function(err, user) {
        if (err) { return cb(err); }
        if (!user) { return cb(null, false); }
        return cb(null, user);
      });
      
    });
    
    
    /*
    ns.resolve(type, 'SRV', function(err, addrs) {
      console.log(err);
      console.log(addrs)
      
    });
    */
    
    return;
    
    
    var type = 'auth0-oauth2-ro';
    services.createConnection(type, { url: url }, function() {
      this.verify(username, password, function(err, user) {
        if (err) { return cb(err); }
        if (!user) { return cb(null, false); }
        return cb(null, user);
      });
    });
    
    /*
    var conn = sd.createConnection(type, { url: url });
    conn.verify(username, password, function(err, user) {
      if (err) { return cb(err); }
      if (!user) { return cb(null, false); }
      return cb(null, user);
    });
    */
  };
};

exports['@require'] = [
  'http://i.bixbyjs.org/ns/connect',
  'http://i.bixbyjs.org/ns',
  'http://i.bixbyjs.org/services'
];
