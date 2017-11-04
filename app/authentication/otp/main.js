exports = module.exports = function(algorithms) {
  
  return {
    verify: algorithms.verify.bind(algorithms)
  };
};

exports['@implements'] = 'http://schemas.authnomicon.org/js/security/authentication/otp';
exports['@require'] = [
  './algorithms'
];
