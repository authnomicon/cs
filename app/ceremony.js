exports = module.exports = function(begin) {
  
  return {
    begin: begin,
    resume: null
  };
};

exports['@require'] = [
  './ceremony/begin'
];
