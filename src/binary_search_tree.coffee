class BinarySearchTree
  constructor: ->
    @size = 0
    @depth = 0
    @root_node = null
    @balance = 0

  insert: (value) ->
    if @root_node?
      cur_depth = 1
      cur_node = @root_node
      while cur_node.value != value
        if value < cur_node.value
          unless cur_node.left?
            cur_node.left = {value: value}
            @balance--
          cur_node = cur_node.left
          cur_depth++
        else
          unless cur_node.right?
            cur_node.right = {value: value}
            @balance++
          cur_node = cur_node.right
          cur_depth++
      @depth = cur_depth if cur_depth > @depth
    else
      @root_node = {value: value}
      @depth = 1
    @size++

module.exports = BinarySearchTree
