/* global describe, it */

var expect = require('chai').expect;
var sinon = require('sinon');


describe('@authnomicon/security', function() {
  
  describe('package.json', function() {
    var json = require('../package.json');
    
    it('should have assembly metadata', function() {
      expect(json.assembly.namespace).to.equal('org.authnomicon/cs');
      
      expect(json.assembly.components).to.have.length(5);
      expect(json.assembly.components).to.include('oob/main');
      expect(json.assembly.components).to.include('otp/main');
      expect(json.assembly.components).to.include('otp/algorithms/hotp');
      expect(json.assembly.components).to.include('otp/algorithms/totp');
    });
  });
  
  it('should throw if required', function() {
    expect(function() {
      var pkg = require('..');
    }).to.throw(Error).with.property('code', 'MODULE_NOT_FOUND');
  });
  
});

afterEach(function() {
  sinon.restore();
});
