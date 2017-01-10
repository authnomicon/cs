/* global describe, it */

var pkg = require('..');
var expect = require('chai').expect;


describe('@authnomicon/mfa', function() {
  
  it('should export manifest', function() {
    expect(pkg).to.be.an('object');
  });
  
});
