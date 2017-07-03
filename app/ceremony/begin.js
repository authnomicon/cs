exports = module.exports = function() {
  var qs = require('querystring');


  // TODO: If no state, and there's a returnTo option, store that
  //       as initial state.

  function redirect(req, res, next) {
    console.log('REDIRECT TO MFA!');
    
    var params = {};
    if (req.state) {
      params.state = req.state.handle;
    }
    
    var q = qs.stringify(params);
    return res.redirect('/mfa' + (q ? '?' + q : ''));
  }


  return [
    redirect
  ];
  
};

exports['@require'] = [];
