/* global describe, it */

var expect = require('chai').expect;
var factory = require('../../../app/authentication/otp/main');


describe('authentication/otp/main', function() {
  
  it('should export factory function', function() {
    expect(factory).to.be.a('function');
  });
  
  it('should be annotated', function() {
    expect(factory['@implements']).to.equal('http://schemas.authnomicon.org/js/security/authentication/otp');
  });
  
  describe('creating interface', function() {
    var gateway = {
      generate: function(){ return this; },
      verify: function(){ return this; }
    }
    
    var api = factory(gateway);
    
    it('should create API', function() {
      expect(api.generate).to.be.a('function');
      expect(api.verify).to.be.a('function');
    });
    
    it('should bind context', function() {
      expect(api.generate()).to.equal(gateway);
      expect(api.verify()).to.equal(gateway);
    });
  }); // creating interface
  
});
