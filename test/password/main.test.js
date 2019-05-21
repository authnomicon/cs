/* global describe, it */

var expect = require('chai').expect;
var sinon = require('sinon');
var factory = require('../../app/password/main');


describe('password/main', function() {
  var _container = {
    components: function(){},
    create: function(){}
  };
  var _passwordCredentialService = {
    verify: function(){}
  };
  
  
  it('should export factory function', function() {
    expect(factory).to.be.a('function');
  });
  
  it('should be annotated', function() {
    expect(factory['@implements']).to.equal('http://schemas.authnomicon.org/js/cs/password');
    expect(factory['@singleton']).to.be.true;
  });
  
  it('should construct API', function() {
    sinon.stub(_container, 'components').returns([ { a: { '@name': 'ldap' } } ]);
    var _connect = sinon.spy();
    
    var api = factory(_container, _connect);
    expect(_container.components).to.have.been.calledWith('http://i.authnomicon.org/js/cs/IPasswordService');
    expect(api.verify).to.be.a('function');
  }); // should construct API
  
  describe('API', function() {
    sinon.stub(_container, 'components').returns([ { a: { '@name': 'ldap' } } ]);
    var _connect = sinon.stub().yieldsAsync(null, _passwordCredentialService);
    var api = factory(_container, _connect);
  
    describe('verify', function() {
      
      it('should validate correct password', function(done) {
        sinon.stub(_passwordCredentialService, 'verify').yieldsAsync(null, true);
      
        api.verify('johndoe', 'pa$$w0rd', function(err, user) {
          expect(_connect).to.have.been.calledWith([ 'ldap' ]);
          expect(_passwordCredentialService.verify).to.have.been.calledWith('johndoe', 'pa$$w0rd');
          expect(err).to.be.null;
          expect(user).to.be.true;
          done();
        });
      }); // should validate correct password
    
    }); // verify
  
  }); // API
  
});
