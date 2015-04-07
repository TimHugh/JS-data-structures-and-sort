var expect = require('chai').expect;
var Queue = require('../lib/queue.js');

describe('Queue', function() {
  var queue;

  beforeEach(function() {
    queue = new Queue();
  });

  it('reports size correctly', function() {
    expect(queue.size).to.equal(0)
    queue.enqueue(2);
    expect(queue.size).to.equal(1)
    queue.dequeue();
    expect(queue.size).to.equal(0)
  });

  it('gets elements back in the same order they were entered', function() {
    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(3);
    expect(queue.dequeue()).to.equal(1);
    expect(queue.dequeue()).to.equal(2);
    expect(queue.dequeue()).to.equal(3);
  });
});
