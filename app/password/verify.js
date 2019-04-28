exports = module.exports = function(sd) {
  
  return function(url, username, password, options, cb) {
    if (typeof options == 'function') {
      cb = options;
      options = undefined;
    }
    options = options || {};
    
    var type = options.type;
    var conn = sd.createConnection(type, { url: url });
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
