var expect = require('chai').expect;
var DoublyLinkedList = require('../lib/linked_list.js');

describe('Doubly-linked list', function() {
  var list = null;

  beforeEach(function() {
    list = new DoublyLinkedList();
    list.add(2);
    list.add(4);
    list.add(7);
  });

  it('should store new values at the head', function() {
    list.add(5);
    expect(list.first()).to.equal(5);
  });

  it('should return the correct node when a value is searched', function() {
    expect(list.search(2).value).to.equal(2);
  });
  it('returns null when searching for a non-existent value', function() {
    expect(list.search(3)).to.equal(null);
  });

  it('correctly removes values', function() {
    list.remove(4);
    expect(list.to_s()).to.equal("7, 2");
  });
  it('returns a value when it removes it from the list', function() {
    expect(list.remove(2)).to.equal(2);
  });
  it('returns null when removing a value that is not present', function() {
    expect(list.remove(3)).to.equal(null)
  });

  it('creates a comma-separated string when the to_s function is called', function() {
    expect(list.to_s()).to.equal("7, 4, 2");
  });
});
