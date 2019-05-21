exports = module.exports = function(IoC, connect) {
  
  var modules = IoC.components('http://i.authnomicon.org/js/cs/IPasswordService')
    , services = modules.map(function(m) { return m.a['@name']; });
  
  
  var api = {};
  
  // TODO: pass domain + etc in as options
  // TODO: if realm is an argument, resolve it to a specific service, and proceed with that.
  api.verify = function(username, password, options, cb) {
    if (typeof options == 'function') {
      cb = options;
      options = undefined;
    }
    options = options || {};
    
    connect(services, function(err, conn) {
      if (err) { return cb(err); }
      
      conn.verify(username, password, function(err, user) {
        if (err) { return cb(err); }
        return cb(null, user);
      });
    });
  };
  
  return api;
};

exports['@implements'] = 'http://schemas.authnomicon.org/js/cs/password';
exports['@singleton'] = true;
exports['@require'] = [
  '!container',
  'http://i.bixbyjs.org/ns/connect'
];
