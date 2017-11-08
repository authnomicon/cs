/* global describe, it, expect */

var $require = require('proxyquire');
var expect = require('chai').expect;
var sinon = require('sinon');
var factory = require('../../../../app/authentication/otp/algorithms/totp');
var TotpAlgorithm = require('passport-otp').TotpAlgorithm;


describe('authentication/otp/algorithms/totp', function() {
  
  it('should export factory function', function() {
    expect(factory).to.be.a('function');
  });
  
  it('should be annotated', function() {
    expect(factory['@implements']).to.equal('http://schemas.authnomicon.org/js/security/authentication/otp/Algorithm');
    expect(factory['@algorithm']).to.equal('totp');
  });
  
  describe('creating algorithm', function() {
    var TotpAlgorithmSpy = sinon.spy(TotpAlgorithm);
    
    var factory = $require('../../../../app/authentication/otp/algorithms/totp',
      { 'passport-otp': { TotpAlgorithm: TotpAlgorithmSpy } });
    var algorithm = factory();
    
    it('should construct algorithm', function() {
      expect(TotpAlgorithmSpy).to.have.been.calledOnce;
      expect(TotpAlgorithmSpy).to.have.been.calledWithExactly();
    });
    
    it('should return algorithm', function() {
      expect(algorithm).to.be.an.instanceOf(TotpAlgorithm);
    });
  }); // creating algorithm
  
});
