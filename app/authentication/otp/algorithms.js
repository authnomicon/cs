exports = module.exports = function(container, logger) {
  var Algorithms = require('passport-otp').Algorithms;
  
  
  var algorithms = new Algorithms();
  
  return Promise.resolve(algorithms)
    .then(function(algorithms) {
      // Register OTP algorithms.
      var algoComps = container.components('http://schemas.authnomicon.org/js/security/authentication/otp/Algorithm');
    
      return Promise.all(algoComps.map(function(comp) { return comp.create(); } ))
        .then(function(algos) {
          algos.forEach(function(algo, i) {
            var type = algoComps[i].a['@algorithm'];
            algorithms.use(type, algo);
            logger.info('Loaded OTP algorithm: ' + type);
          });
        })
        .then(function() {
          return algorithms;
        });
    })
    .then(function(algorithms) {
      return algorithms;
    });
};

exports['@singleton'] = true;
exports['@require'] = [ '!container', 'http://i.bixbyjs.org/Logger' ];
