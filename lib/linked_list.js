var LinkedList = (function() {
  var Node = (function(value) {
    this.value = value;
  });

  var head = null;

  return function(){
    // add a new node
    this.add = function(value) {
      node = new Node(value);
      if(this.head) {
        this.head.prev = node;
        node.next = this.head;
      }
      this.head = node;
    };

    // get the first node containing a value
    this.search = function(value) {
      node = this.head;
      while(node.value != value) {
        if(node.next == null)
          return null;

        node = node.next;
      }
      return node;
    };

    // remove first node containing a value
    this.remove = function(value) {
      node = this.search(value);

      if(node == null)
        return null;

      if( node.prev )
        node.prev.next = node.next;
      if( node.next )
        node.next.prev = node.prev;
      return node.value;
    }

    // get the value of the first node
    this.first = function() {
      if(this.head)
        return this.head.value;
      else
        return null;
    };

    this.to_s = function() {
      string = "";
      node = this.head;

      while(node) {
        string += node.value;
        if(node.next)
          string += ", ";
        node = node.next;
      }

      return string;
    };
  };
})();

module.exports = LinkedList;
