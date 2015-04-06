var expect = require('chai').expect;
var LinkedList = require('../lib/linked_list.js');

describe('Linked list', function() {
  var list = new LinkedList();

  beforeEach(function() {
    list = new LinkedList();
    list.add(2);
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

  it('returns a value when it removes it from the list', function() {
    expect(list.remove(2)).to.equal(2);
  });
  it('returns null when removing a value that is not present', function() {
    expect(list.remove(3)).to.equal(null)
  });
});
