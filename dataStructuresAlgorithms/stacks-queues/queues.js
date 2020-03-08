// Can use array if needed
// Or use this buit queue based off of a linked list

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }
  enqueue(val){
    var newNode = new Node(val);
    if (!this.first){
        this.first = newNode;
        this.last = newNode;
    } else {
        this.last.next = newNode;
        this.last = newNode;
    }
    this.size++;
    return this.size;
  }
  dequeue(val){
    if(!this.first) return null;
    var tempFirst = this.first;
    if(this.size === 1) {
        this.first = null;
        this.last = null;
    } else {
        this.first = tempFirst.next;
        this.first.next = null;
    }
    this.size--;
    return tempFirst.val
  }
}

queue = new Queue
queue.enqueue("first");
queue.dequeue();