/* global describe, it */

var expect = require('chai').expect;
var factory = require('../../app/oob/main');


describe('authentication/oob/main', function() {
  
  it('should export factory function', function() {
    expect(factory).to.be.a('function');
  });
  
  it('should be annotated', function() {
    expect(factory['@implements']).to.equal('http://schemas.authnomicon.org/js/security/authentication/oob');
  });
  
  describe('creating interface', function() {
    var gateway = {
      associate: function(){ return this; },
      challenge: function(){ return this; },
      verify: function(){ return this; }
    }
    
    var api = factory(gateway);
    
    it('should create API', function() {
      expect(api.associate).to.be.a('function');
      expect(api.challenge).to.be.a('function');
      expect(api.verify).to.be.a('function');
    });
    
    it('should bind context', function() {
      expect(api.associate()).to.equal(gateway);
      expect(api.challenge()).to.equal(gateway);
      expect(api.verify()).to.equal(gateway);
    });
  }); // creating interface
  
});
