/* global describe, it */

var $require = require('proxyquire');
var expect = require('chai').expect;
var sinon = require('sinon');
var factory = require('../../../app/authentication/otp/algorithms');
var Algorithms = require('passport-otp').Algorithms;


describe('authentication/otp/algorithms', function() {
  
  it('should export factory function', function() {
    expect(factory).to.be.a('function');
  });
  
  describe('creating algorithms', function() {
    var container = {
      components: function(){},
      create: function(){}
    }
    
    
    describe.only('without any algorithms', function() {
      var AlgorithmsSpy = sinon.spy(Algorithms);
      
      before(function() {
        sinon.stub(container, 'components').returns([]);
      });
      
      after(function() {
        container.components.restore();
      });
      
      var algorithms;
      before(function(done) {
        var factory = $require('../../../app/authentication/otp/algorithms',
          { 'passport-otp': { Algorithms: AlgorithmsSpy } });
        
        var promise = factory(container);
        promise.then(function(a) {
          algorithms = a;
          done();
        });
      });
      
      it('should construct algorithms', function() {
        expect(AlgorithmsSpy).to.have.been.calledOnce;
        expect(AlgorithmsSpy).to.have.been.calledWithExactly();
      });
      
      it('should return algorithms', function() {
        expect(algorithms).to.be.an.instanceOf(Algorithms);
      });
    }); // without any algorithms
    
  }); // creating algorithms
  
});
