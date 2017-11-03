exports = module.exports = function(gateway, challenge, associate) {
  
  return {
    
    associate: function(user, options, cb) {
      console.log('OUT-OF-BAND ASSOCIATION');
      console.log(user);
      console.log(options);
      
    },  // associate
    
    challenge: challenge,
    verify: gateway.verify.bind(gateway)
    
  };
};

exports['@implements'] = 'http://schemas.authnomicon.org/js/security/authentication/oob';
exports['@require'] = [
  './gateway',
  'http://schemas.authnomicon.org/js/security/authentication/oob/challenge',
  'http://schemas.authnomicon.org/js/security/authentication/oob/associate'
];
