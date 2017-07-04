function OOBGateway() {
  this._channels = {};
}

OOBGateway.prototype.use = function(type, channel) {
  this._channels[type] = channel;
};

OOBGateway.prototype.challenge = function(type, authenticator, cb) {
  var channel = this._channels[type];
  if (!channel) { return cb(new Error('OOB channel "' + type + '" is not supported')); }
  
  channel.challenge(authenticator, cb);
};

OOBGateway.prototype.verify = function(type, authenticator, txnID, cb) {
  var channel = this._channels[type];
  if (!channel) { return cb(new Error('OOB channel "' + type + '" is not supported')); }
  
  channel.verify(authenticator, txnID, cb);
};


module.exports = OOBGateway;
