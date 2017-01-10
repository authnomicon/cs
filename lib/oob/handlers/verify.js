exports = module.exports = function(ceremony, authenticator) {


  // TODO: Support multiple accounts in a single session
  // TODO: Account linking, session management, etc

  return [
    require('body-parser').urlencoded({ extended: false }),
    ceremony.loadState('mfa'),
    authenticator.authenticate('session'),
    authenticator.authenticate('mfa-oob'),
    ceremony.complete('mfa'),
    function(err, req, res, next) {
      console.log(err);
      console.log(err.stack);
      next(err);
    },
    ceremony.completeError('mfa')
  ];
  
};

exports['@require'] = [
  'http://i.bixbyjs.org/www/ceremony/Dispatcher',
  'http://i.bixbyjs.org/http/Authenticator'
];
