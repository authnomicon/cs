exports = module.exports = function(challenge, associate) {
  
  return {
    
    associate: function(user, options, cb) {
      console.log('OUT-OF-BAND ASSOCIATION');
      console.log(user);
      console.log(options);
      
    },  // associate
    
    challenge: challenge
    
  };
};

exports['@implements'] = 'http://schemas.authnomicon.org/js/security/authentication/oob';
exports['@require'] = [
  'http://schemas.authnomicon.org/js/security/authentication/oob/challenge',
  'http://schemas.authnomicon.org/js/security/authentication/oob/associate'
];
