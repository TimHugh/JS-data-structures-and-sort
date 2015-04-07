# JavaScript Data Structures and Algorithms

## Intro

Examples of classic data structures and algorithms written in JavaScript.

Check out the tests for examples of usage.

## Algorithms

## Data Structures

### [Linked List](http://en.wikipedia.org/wiki/Linked_list) : `lib/linked_list.js`

The linked list is a lightweight storage object that stores data linearly in the order it was added. Adding is a `O( 1 )` time operation, but searching and removal are both `O( n )` (or some fraction of n).

### [Doubly-Linked List](http://en.wikipedia.org/wiki/Doubly_linked_list) : `lib/doubly_linked_list.js`

The doubly linked list is identical to a linked list, but can be traversed in both directions.

### [Stack](http://en.wikipedia.org/wiki/Stack_%28abstract_data_type%29) : `src/stack.coffee`, `lib/stack.js`

The stack is a very lightweight, efficient structure. It stores data using the FIFO method, using `push(value)` and `pop()` functions to add and remove elements. Both operations are done in `O( 1 )` time.
