/* global describe, it, expect */

var $require = require('proxyquire');
var expect = require('chai').expect;
var sinon = require('sinon');
var factory = require('../../../app/otp/algorithms/hotp');
var HotpAlgorithm = require('../../../lib/otp/algorithms/hotp');


describe('authentication/otp/algorithms/hotp', function() {
  
  it('should export factory function', function() {
    expect(factory).to.be.a('function');
  });
  
  it('should be annotated', function() {
    expect(factory['@implements']).to.equal('http://schemas.authnomicon.org/js/security/authentication/otp/Algorithm');
    expect(factory['@algorithm']).to.equal('hotp');
  });
  
  describe('creating algorithm', function() {
    var HotpAlgorithmSpy = sinon.spy(HotpAlgorithm);
    
    var factory = $require('../../../app/otp/algorithms/hotp',
      { '../../../lib/otp/algorithms/hotp': HotpAlgorithmSpy });
    var algorithm = factory();
    
    it('should construct algorithm', function() {
      expect(HotpAlgorithmSpy).to.have.been.calledOnce;
      expect(HotpAlgorithmSpy).to.have.been.calledWithExactly();
    });
    
    it('should return algorithm', function() {
      expect(algorithm).to.be.an.instanceOf(HotpAlgorithm);
    });
  }); // creating algorithm
  
});
