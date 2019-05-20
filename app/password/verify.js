exports = module.exports = function(IoC, connect, ns, services) {
  
  var modules = IoC.components('http://i.authnomicon.org/js/cs/IPasswordService')
    , services = modules.map(function(m) { return m.a['@name']; });
  
  // TODO: pass domain + etc in as options
  // TODO: if realm is an argument, resolve it to a specific service, and proceed with that.
  return function(username, password, options, cb) {
    if (typeof options == 'function') {
      cb = options;
      options = undefined;
    }
    options = options || {};
    
    connect(services, function(err, conn) {
      if (err) { return cb(err); }
      
      conn.verify(username, password, function(err, user) {
        if (err) { return cb(err); }
        if (!user) { return cb(null, false); }
        return cb(null, user);
      });
    });
  };
};

exports['@require'] = [
  '!container',
  'http://i.bixbyjs.org/ns/connect',
  'http://i.bixbyjs.org/ns',
  'http://i.bixbyjs.org/services'
];
