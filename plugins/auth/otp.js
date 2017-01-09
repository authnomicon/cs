exports = module.exports = {
  'scheme': require('../../lib/otp/auth/scheme')
};

exports.load = function(id) {
  try {
    return require('../../lib/otp/auth/' + id);
  } catch (ex) {
    if (ex.code == 'MODULE_NOT_FOUND') { return; }
    throw ex;
  }
};
