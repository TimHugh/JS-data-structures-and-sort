var expect = require('chai').expect;
var LinkedList = require('../lib/linked_list.js');

describe('Linked list', function() {
  it('should store new values at the head', function(){
    var list = new LinkedList();

    list.add(2);
    expect(list.first()).to.equal(2);

    list.add(5);
    expect(list.first()).to.equal(5);
  });

  it('should return the correct node when a value is searched', function(){
    var list = new LinkedList();

    list.add(2);
    expect(list.search(2).value).to.equal(2);
  });
});
