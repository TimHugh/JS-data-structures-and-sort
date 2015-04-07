var expect = require('chai').expect;
var Stack = require('../lib/stack.js');

describe('Stack', function() {
  var stack;

  beforeEach(function(){
    stack = new Stack();
  });

  it('reports size correctly', function() {
    expect(stack.size).to.equal(0);
    stack.push(2);
    expect(stack.size).to.equal(1);
    stack.pop();
    expect(stack.size).to.equal(0);
  });

  it('adds new values to the front of the list', function() {
    stack.push(2);
    expect(stack.peek()).to.equal(2);
  });

  it('removes values from the front of the list', function() {
    stack.push(2);
    stack.push(3);

    expect(stack.pop()).to.equal(3);
  });
});
