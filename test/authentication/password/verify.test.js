/* global describe, it */

var expect = require('chai').expect;
var factory = require('../../../app/authentication/password/verify');


describe('authentication/password/verify', function() {
  
  it('should export factory function', function() {
    expect(factory).to.be.a('function');
  });
  
  it('should be annotated', function() {
    expect(factory['@implements']).to.equal('http://schemas.authnomicon.org/js/security/authentication/password/verifyFn');
    expect(factory['@singleton']).to.be.undefined;
  });
  
});
