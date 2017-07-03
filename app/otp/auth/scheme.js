exports = module.exports = function(verify) {
  var Strategy = require('passport-mfa-otp');
  
  return new Strategy({ passReqToCallback: true }, verify);
};

exports['@implements'] = 'http://i.bixbyjs.org/http/auth/Scheme';
exports['@scheme'] = 'mfa-otp';
exports['@require'] = [
  './verify'
];
