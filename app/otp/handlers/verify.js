exports = module.exports = function(ceremony, authenticator) {


  // TODO: Support multiple accounts in a single session
  // TODO: Account linking, session management, etc

  return [
    require('body-parser').urlencoded({ extended: false }),
    ceremony.loadState('mfa'),
    authenticator.authenticate('session'),
    authenticator.authenticate('mfa-otp'),
    ceremony.complete('mfa'),
    ceremony.completeError('mfa')
  ];
  
};

exports['@require'] = [
  'http://i.bixbyjs.org/http/state/Dispatcher',
  'http://i.bixbyjs.org/http/Authenticator'
];
