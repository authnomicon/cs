exports = module.exports = function(container, logger) {
  // Load modules.
  //var Gateway = require('../../../lib/oobgateway');
  var Gateway = require('passport-oob').Gateway;
  
  var gateway = new Gateway();
  
  var channelComps = container.components('http://schemas.authnomicon.org/js/security/authentication/oob/Channel');
  return Promise.all(channelComps.map(function(comp) { return comp.create(); } ))
    .then(function(channels) {
      channels.forEach(function(channel, i) {
        var type = channelComps[i].a['@channel'];
        
        gateway.use(type, channel);
        logger.info('Loaded out-of-band authenticator channel: ' + type);
      });
    })
    .then(function() {
      return gateway;
    });
};

exports['@singleton'] = true;
exports['@require'] = [ '!container', 'http://i.bixbyjs.org/Logger' ];
