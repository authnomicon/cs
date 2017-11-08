// TODO: remove this file
function OOBGateway() {
  this._channels = {};
}

OOBGateway.prototype.use = function(type, channel) {
  this._channels[type] = channel;
};

OOBGateway.prototype.associate = function(type, user, options, cb) {
  var channel = this._channels[type];
  if (!channel) { return cb(new Error('OOB channel "' + type + '" is not supported')); }
  
  var arity = channel.associate.length;
  switch (arity) {
  case 3:
    return channel.associate(user, options, cb);
  default:
    return channel.associate(user, cb);
  }
};

OOBGateway.prototype.challenge = function(type, authenticator, cb) {
  var channel = this._channels[type];
  if (!channel) { return cb(new Error('OOB channel "' + type + '" is not supported')); }
  
  channel.challenge(authenticator, cb);
};

OOBGateway.prototype.verify = function(type, authenticator, txnID, options, cb) {
  if (typeof options == 'function') {
    cb = options;
    options = undefined;
  }
  options = options || {};
  
  var channel = this._channels[type];
  if (!channel) { return cb(new Error('OOB channel "' + type + '" is not supported')); }
  
  var arity = channel.verify.length;
  switch (arity) {
  case 4:
    return channel.verify(authenticator, txnID, options, cb);
  default:
    return channel.verify(authenticator, txnID, cb);
  }
};


module.exports = OOBGateway;
