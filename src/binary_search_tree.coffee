class BinarySearchTree
  constructor: ->
    @size = 0
    @root_node = null

  insert: (value) ->
    if @root_node?

    else
      @root_node = {value: value}
    @size++

module.exports = BinarySearchTree
