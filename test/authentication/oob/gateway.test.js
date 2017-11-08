/* global describe, it */

var $require = require('proxyquire');
var expect = require('chai').expect;
var sinon = require('sinon');
var factory = require('../../../app/authentication/oob/gateway');
var Gateway = require('passport-oob').Gateway;


describe('authentication/oob/gateway', function() {
  
  it('should export factory function', function() {
    expect(factory).to.be.a('function');
  });
  
  describe('creating gateway', function() {
    var container = {
      components: function(){},
      create: function(){}
    }
    
    
    describe('without any channels', function() {
      var GatewaySpy = sinon.spy(Gateway);
      
      before(function() {
        sinon.stub(container, 'components').returns([]);
      });
      
      after(function() {
        container.components.restore();
      });
      
      var gateway;
      before(function(done) {
        var factory = $require('../../../app/authentication/oob/gateway',
          { 'passport-oob': { Gateway: GatewaySpy } });
        
        var promise = factory(container);
        promise.then(function(g) {
          gateway = g;
          done();
        });
      });
      
      it('should construct gateway', function() {
        expect(GatewaySpy).to.have.been.calledOnce;
        expect(GatewaySpy).to.have.been.calledWithExactly();
      });
      
      it('should return gateway', function() {
        expect(gateway).to.be.an.instanceOf(Gateway);
      });
    }); // without any channels
    
  }); // creating gateway
  
});
