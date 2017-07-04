exports = module.exports = function(gateway) {
  
  return function(user, options, cb) {
    var type = options.channel;
    return gateway.associate(type, user, options, cb);
  };
};

exports['@implements'] = 'http://schemas.authnomicon.org/js/security/authentication/oob/associate';
exports['@require'] = [
  './gateway'
];
