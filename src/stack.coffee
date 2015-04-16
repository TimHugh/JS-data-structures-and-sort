class Stack
  constructor: ->
    @size = 0

  peek: ->
    @head.value

  push: (value) ->
    node =
      value: value
    if @head?
      node.next = @head
    @head = node
    @size++

  pop: ->
    return null unless @head?
    node = @head
    @head = @head.next
    @size--
    node.value

module.exports = Stack
