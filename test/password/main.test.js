/* global describe, it */

var expect = require('chai').expect;
var sinon = require('sinon');
var factory = require('../../app/password/main');


describe('password/main', function() {
  
  it('should export factory function', function() {
    expect(factory).to.be.a('function');
  });
  
  it('should be annotated', function() {
    expect(factory['@implements']).to.equal('http://schemas.authnomicon.org/js/cs/password');
    expect(factory['@singleton']).to.be.true;
  });
  
  describe('verify', function() {
    var ds = {
      authenticate: function(){}
    }
    
    
    describe('valid password', function() {
      var user, info;
      
      before(function() {
        sinon.stub(ds, 'authenticate').yields(null, { id: '501', username: 'johndoe' });
      });
      
      after(function() {
        ds.authenticate.restore();
      });
      
      before(function(done) {
        var verify = factory(ds);
        
        verify('johndoe', 's3cr1t', 'users', function(err, u, i) {
          if (err) { return done(err); }
          user = u;
          info = i;
          done();
        })
      });
      
      it('should authenticate against directory services', function() {
        expect(ds.authenticate.callCount).to.equal(1);
        expect(ds.authenticate.args[0][0]).to.equal('johndoe');
        expect(ds.authenticate.args[0][1]).to.equal('s3cr1t');
        expect(ds.authenticate.args[0][2]).to.equal('users');
      });
      
      it('should yield user', function() {
        expect(user).to.deep.equal({ id: '501', username: 'johndoe' });
      });
      
      it('should yield info', function() {
        expect(info).to.deep.equal({ method: 'password' });
      });
    }); // valid password
    
  }); // verify
  
});
