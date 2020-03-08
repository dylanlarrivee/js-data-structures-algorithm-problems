// Can use array if needed
// Or use this buit stack based off of a linked list

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class Stack {
    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
    }
    push(val) {
        var newNode = new Node(val);
        if (!this.first) {
            this.first = newNode;
            this.last = newNode;
        } else {
            var tempFirst = this.first;
            this.first = newNode;
            newNode.next = tempFirst;
        }
        this.length++
        return this.size
    }
    pop() {
        if (!this.first) return null;
        var temp = this.first
        if (this.first === this.last) {
            this.last = null;
        } 
        this.first = this.first.next;
        this.size--;
        return temp.val
    }

}