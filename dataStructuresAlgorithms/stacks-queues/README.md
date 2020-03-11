# Stacks and Queues

## Stacks
- Abstract data structure. More of a concept on how it needs to work
- A LIFO data structure
- The last element added to a stack will be the first element to be removed.
- Some languages have a built in stack but Javascript does not.
### Where are they used
- Managing function invocations
- Undo / redo functioning
- Routing (the history object) is treated like a stack
- Other data structures
### Create a stack with an Array
- From the end:
	- Arr.push()
	- Arr.pop()
- From the beginning:
    - Arr.unshift()
	- Arr.shift()
### Writing Stack from scratch
- Based on a singly linked list except have push and pop work like shift and unshift.
### Push
- The function should accept a value
- Create a new node with that value
- If there are no ndes in the stack, set the first and the last property to be the newly created node
- If there is at least one node, create a variable that stors the current first property on the stack
- Resent the first property to be the newly created node
- Set the next property on the node to be the previously created variable
- Increment the size of the stack by 1
- Return length of the stack
### Pop
- If there are no nodes in the stack, return null
- Create a temporary variable to store the first poperty on the stack
- If there is only 1 node, set the first and last property to be null
- If there is more than one node, set the first property to be the next property on the current first
- Decrement the size by 1 
- Return the value of the node removed.

### Big 0 of Stacks
- Insertion: O(1)
- Removal: O(1)
- Searching: O(n)
- Access: O(n)

### Recap
- Stacks are LIFO data sructure where the last value in is always the first one out.
- They are not built in for JavaScript but are for other languages.
- Used for things like storing browser history

## Queues
- Data structures where you add data in a FIFO way, first in, first out
- Used in:
	- Background tasks
	- Uploading resources
	- Printing queue
### Queue from array:
Not ideal to use an array
- Add to end, remove from beginning
	- Arr.push()
	- Arr.shift()
- Add to the beginning and removing from end
	- Arr.unshift()
	- Arr.pop()
### Queue from own class
### Made using a singly linked list
- Enqueue: add to the end of the list
- Deque: remove from beginning of the list
### Enqueue
Add to the end of the list
- This function accepts some value
- Create a new node using that value passed to the function
- If there are no nodes in the que, set this node to be the first and last property of the queue
- Otherwise, set the next property on the current last to be that node and then set the last property of the que to be that node
### Dequeue
Remove from beginning of the list
- If there is no fisrt property, return null
- Store the first property in a variable
- See if the first is the same as the last (only 1 node) If so, set the first and the last to be null
- If there is more than 1 node, set the first property to be the next property of the first
- Decrement the size by 1
- Return the value of the node that was dequeued
### Queue Big O
- Insertion: O(1)
- Removal: O(1)
- Searching: O(n)
- Access: O(n)
Only want to use this for insertion and deletion. For searching and access use something else.
### Recap
FIFO data structure. First thing in is the first thing out.


## Code 
`class Node {
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
`