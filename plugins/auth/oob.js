exports = module.exports = {
  'scheme': require('../../lib/auth/oob/scheme')
};

exports.load = function(id) {
  try {
    return require('../../lib/auth/oob/' + id);
  } catch (ex) {
    if (ex.code == 'MODULE_NOT_FOUND') { return; }
    throw ex;
  }
};
