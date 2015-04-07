class Stack
  constructor: ->
    @size = 0

  peek: ->
    @head.value

  push: (value) ->
    node = new Node(value)
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

  class Node
    constructor: (@value) ->
    next: null

module.exports = Stack
