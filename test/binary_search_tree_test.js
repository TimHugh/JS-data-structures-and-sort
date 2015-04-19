var expect = require('chai').expect
var BinarySearchTree = require('../lib/binary_search_tree.js')

describe('Binary Search Tree', function(){
  var tree = null;

  beforeEach(function(){
    tree = new BinarySearchTree();
  });

  it('is created empty', function(){
    expect(tree).to.have.property('size').that.equals(0);
  });

  it('increments size when an item is added', function(){
    tree.insert(1);
    expect(tree.size).to.equal(1);
  });

  it('keeps track of the current depth of the tree', function(){
    expect(tree.depth).to.equal(0);
    tree.insert(2);
    expect(tree.depth).to.equal(1);
    tree.insert(1);
    expect(tree.depth).to.equal(2);
    tree.insert(3);
    expect(tree.depth).to.equal(2);
    tree.insert(4);
    expect(tree.depth).to.equal(3);
  });

  it('keeps track of how balanced the tree is', function(){
    tree.insert(2);
    expect(tree.balance).to.equal(0);
    tree.insert(1);
    expect(tree.balance).to.equal(1);
    tree.insert(3);
    expect(tree.balance).to.equal(0);
    tree.insert(4);
    expect(tree.balance).to.equal(-1);
  });

  it('knows if it contains a given value', function(){
    tree.insert(2);
    tree.insert(1);
    tree.insert(3);
    tree.insert(4);

    expect(tree.contains(4)).to.be.true;
    expect(tree.contains(5)).to.be.false;
  });
});
