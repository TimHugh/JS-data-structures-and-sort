class Queue
  constructor: ->
    @size = 0

  enqueue: (value) ->
    node = new Node(value)
    @head = node unless @head?
    if @tail?
      node.prev = @tail
      @tail.next = node
    @tail = node
    @size++

  dequeue: ->
    node = @head
    @head = @head.next
    if @head?
      @head.prev = null
    @size--
    node.value

  class Node
    constructor: (@value) ->
    next: null
    prev: null

module.exports = Queue
