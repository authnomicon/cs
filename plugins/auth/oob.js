exports = module.exports = {
  'scheme': require('../../lib/oob/auth/scheme')
};

exports.load = function(id) {
  try {
    return require('../../lib/oob/auth/' + id);
  } catch (ex) {
    if (ex.code == 'MODULE_NOT_FOUND') { return; }
    throw ex;
  }
};
