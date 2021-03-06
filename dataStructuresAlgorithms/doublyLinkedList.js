// Singly Linked list
class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  push(val) {
    var newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }
  pop() {
    if (!this.head) return undefined;
    var tempTail = this.tail;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = tempTail.prev;
      this.tail.next = null;
      tempTail.prev = null;
    }
    this.length--;
    return tempTail;
  }
  shift() {
    if (!this.head) return undefined;
    var oldHead = this.head;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = oldHead.next;
      this.head.prev = null;
      oldHead.prev = null;
    }
    this.length--;
    return oldHead;
  }
  unshift(val) {
    var newNode = new Node(val);
    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.head.prev = newNode;
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return list;
  }
  get(index) {
    if (index < 0 || index > this.length - 1) return null;
    var middlePoint = (this.length / 2);
    if (index <= middlePoint) {
      var counter = 0;
      var currentNode = this.head;
      while (counter < index) {
        currentNode = currentNode.next;
        counter++;
      }
    } else {
      var counter = this.length - 1;
      var currentNode = this.tail;
      while (counter < index) {
        currentNode = currentNode.prev;
        counter--;
      }
    }
    return currentNode;
  }
  set(index, val) {
    var newNode = new Node(val);
    var replacedNode = this.get(index);
    if (replacedNode){
      replaced.val = newNode;  
      return true
    }
    return false
  }
  insert(index,val){
    if (index<0 || index>this.length) return false
    if (index === 0) return this.unshift(val)
    if(index === this.length) return this.push(val)
    var newNode = new Node(val);
    var nodeAfter = this.get(index);
    var nodeBefore = nodeAfter.prev;
    nodeBefore.next = newNode;
    newNode.prev = nodeBefore;
    nodeAfter.prev = newNode;
    newNode.next =nodeAfter;
    this.length++;
    return true
  }
  remove(index) {
    if (index<0 || index > this.length) return undefined
    if (index === 0) return this.shift();
    if (index === this.length-1) return this.pop();
    var nodeRemoved = this.get(index);
    var nextNode = nodeRemoved.next;
    var prevNode = nodeRemoved.prev;
    prevNode.next = nextNode;
    nextNode.prev = prevNode;
    nodeRemoved.next = null;
    nodeRemoved.prev = null;
    this.length--;
    return nodeRemoved
  }
}

var list = new DoublyLinkedList();
list.push(0);
list.push(1);
list.push(2);
list.push(3);
list.push(4);
list.push(5);
list.remove(1)
