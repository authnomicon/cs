exports = module.exports = {
  'scheme': require('../../lib/auth/otp/scheme')
};

exports.load = function(id) {
  try {
    return require('../../lib/auth/otp/' + id);
  } catch (ex) {
    if (ex.code == 'MODULE_NOT_FOUND') { return; }
    throw ex;
  }
};
