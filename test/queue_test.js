var expect = require('chai').expect;
var Queue = require('../lib/queue.js');

describe('Queue', function() {
  var queue;

  beforeEach(function() {
    queue = new Queue();
  });

  it('reports size correctly', function() {
    // expect('queue').to.have.property('size').that.equals(0);
    expect(queue.size).to.equal(0)
    queue.enqueue(2);
    // expect('queue').to.have.property('size').that.equals(1);
    expect(queue.size).to.equal(1)
    queue.dequeue();
    // expect('queue').to.have.property('size').that.equals(0);
    expect(queue.size).to.equal(0)
  });
});
