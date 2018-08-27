exports = module.exports = function(gateway) {
  
  return {
    associate: gateway.associate.bind(gateway),
    challenge: gateway.challenge.bind(gateway),
    verify: gateway.verify.bind(gateway)
  };
};

exports['@implements'] = 'http://schemas.authnomicon.org/js/cs/oob';
exports['@require'] = [
  './gateway'
];
