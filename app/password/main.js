exports = module.exports = function(verify) {
  
  return {
    verify: verify
  };
};

exports['@implements'] = 'http://schemas.authnomicon.org/js/cs/password';
exports['@require'] = [
  './verify'
];
