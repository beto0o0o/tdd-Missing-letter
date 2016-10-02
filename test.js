'use strict';
var expect = require('chai').expect;
var missingLetter = require('./missingLetter.js');

describe('missingLetter', function() {
  it('should exist', function() {
    var challengeFile = require('./missingLetter.js');
    expect(challengeFile).to.not.be.undefined;
  });
});

describe('#fearNotLetter', function(){
  it('should return "d" for "abce"', function(){
    var input = "abce";
    var expected = "d";
    var actual = missingLetter.fearNotLetter(input);
    expect(actual).to.eql(expected);
  })
});

describe('#fearNotLetter', function(){
  it('should return "i" for "abcdefghjklmno"', function(){
    var input = "abcdefghjklmno";
    var expected = "i";
    var actual = missingLetter.fearNotLetter(input);
    expect(actual).to.eql(expected);
  })
});

describe('#fearNotLetter', function(){
  it('should return undefined for "bcd"', function(){
    var input = "bcd";
    var expected = undefined;
    var actual = missingLetter.fearNotLetter(input);
    expect(actual).to.eql(expected);
  })
});

describe('#fearNotLetter', function(){
  it('should return undefined for "yz"', function(){
    var input = "yz";
    var expected = undefined;
    var actual = missingLetter.fearNotLetter(input);
    expect(actual).to.eql(expected);
  })
});
