exports = module.exports = function(algorithms) {
  
  return {
    generate: algorithms.generate.bind(algorithms),
    verify: algorithms.verify.bind(algorithms)
  };
};

exports['@implements'] = 'http://schemas.authnomicon.org/js/cs/otp';
exports['@require'] = [
  './algorithms'
];
