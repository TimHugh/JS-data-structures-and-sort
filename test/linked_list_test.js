var expect = require('chai').expect;
var LinkedList = require('../lib/linked_list.js');

describe('Linked list', function() {
  it('should have a value after being created', function(){
    var list = new LinkedList(12, null);

    expect('list').has.property('value');
  });
});
