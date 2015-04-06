var DoublyLinkedList = (function() {
  var next = null;
  var prev = null;
  var value = null;

  var remove_node(node) {
    node.prev.next = node.next;
    node.next.prev = node.prev;
  }

  return function(){
    this.add = function(value) {
      node = new LinkedList();
      node.value = value;
      node.prev = this;

      if(this.next) {
        this.next.prev = node;
        node.next = this.next;
      }

      this.next = node;
    };

    this.first = function() {
      return this.next.value;
    };

    this.search = function(value) {
      if(this.value == value)
        return this;
      if(!this.next)
        return null;
      return this.next.search(value);
    };

    this.remove = function(value) {
      if(this.value == value) {
        remove_node(this);
        return this.value;
      }
      if(!this.next)
        return null;

      return this.next.remove(value);
    };

    this.to_s = function() {
      string = "";
      if(this.value) {
        string += this.value;
      }
      if(this.value && this.next) {
        string += ", "
      }
      if(this.next) {
        string += this.next.to_s();
      }
      return string;
    }
  };
})();

module.exports = LinkedList
