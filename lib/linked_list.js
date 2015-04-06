var LinkedList = (function() {
  var next = null;
  var value = null;

  return function(){
    this.add = function(value) {
      node = new LinkedList();
      node.value = value;

      if(this.next)
        node.next = this.next;

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
      if(!this.next)
        return null;
      if(this.next.value == value) {
        node = this.next;
        this.next = this.next.next;
        return node.value;
      }
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
