exports = module.exports = function(sd) {
  
  return function(service, username, password, cb) {
    var conn = sd.createConnection(service.type, service);
    conn.verify(username, password, function(err, user) {
      if (err) { return cb(err); }
      if (!user) { return cb(null, false); }
      return cb(null, user);
    });
  };
};

exports['@require'] = [
  'http://i.bixbyjs.org/sd'
];
