var expect = require('chai').expect
var BinarySearchTree = require('../lib/binary_search_tree.js')

describe('Binary Search Tree', function(){
  var tree = null;

  before(function(){
    tree = new BinarySearchTree();
  });

  it('is created empty', function(){
    expect(tree).to.have.property('size').that.equals(0);
  });
});
