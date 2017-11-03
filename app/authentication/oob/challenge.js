exports = module.exports = function(gateway) {
  
  // TODO: Can just put this directly on main
  return gateway.challenge.bind(gateway);
};

exports['@implements'] = 'http://schemas.authnomicon.org/js/security/authentication/oob/challenge';
exports['@require'] = [
  './gateway'
];
