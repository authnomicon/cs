exports = module.exports = function(ceremony, authenticator) {


  // TODO: Support multiple accounts in a single session
  // TODO: Account linking, session management, etc

  return [
    require('body-parser').urlencoded({ extended: false }),
    ceremony.loadState('mfa'),
    authenticator.authenticate('session'),
    authenticator.authenticate('totp'),
    function(req, res, next) {
      // TODO: Move this into strategy
      req.authInfo = { method: 'otp' };
      next();
    },
    ceremony.complete('mfa'),
    ceremony.completeError('login')
  ];
  
};

exports['@require'] = [
  'http://i.bixbyjs.org/www/ceremony/Dispatcher',
  'http://i.bixbyjs.org/http/Authenticator'
];
