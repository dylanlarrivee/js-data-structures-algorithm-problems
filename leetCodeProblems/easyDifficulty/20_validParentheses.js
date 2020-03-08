// 20. Valid Parentheses
// Given a string containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Note that an empty string is also considered valid.

// Example 1:

// Input: "()"
// Output: true
// Example 2:

// Input: "()[]{}"
// Output: true
// Example 3:

// Input: "(]"
// Output: false
// Example 4:

// Input: "([)]"
// Output: false
// Example 5:

// Input: "{[]}"
// Output: true


// https://terriblewhiteboard.com/valid-parentheses-leetcode-20/
// https://www.youtube.com/watch?v=hUOkKDqVlig

/**
 * @param {string} s
 * @return {boolean}
 */

 // Using an array as a stack
var isValid = function(s) {
  const conversion = {
    "(": ")",
    "{": "}",
    "[": "]",
    ")": "(",
    "}": "{",
    "]": "["
  };
  var stack = [];
  for (let i = 0; i < s.length; i++) {
    if (conversion[s.charAt(i)] === stack[stack.length - 1]) {
      stack.pop();
    } else {
      stack.push(s.charAt(i));
    }
  }
  if (stack.length === 0) {
    return true;
  } else {
    return false;
  }
};


isValid("()[]{}");


// Using a stack class:
var isValid = function(s) {
    const conversion = {
      "(": ")",
      "{": "}",
      "[": "]",
      ")": "(",
      "}": "{",
      "]": "["
    };
    var stack = new Stack;
    for (let i = 0; i < s.length; i++) {
      if (conversion[s.charAt(i)] === stack[stack.length - 1]) {
        stack.pop();
      } else {
        stack.push(s.charAt(i));
      }
    }
    if (stack.count === 0) {
      return true;
    } else {
      return false;
    }
  };
  
  class Stack {
      constructor() {
        this.count = 0;
        this.storage = {};
      }
    
      push(val) {
        this.storage[this.count] = val;
        this.count++;
      }
    
      getCount() {
        return this.count;
      }
    
      pop() {
        if (this.count === 0) {
          return undefined;
        }
    
        this.count--;
        let result = this.storage[this.count];
        delete this.storage[this.count];
        return result;
      }
    
      peek() {
        let result = this.storage[this.count - 1];
        return result;
      }
    
      isEmpty() {
        return this.count === 0;
      }
    }
  
  isValid("()[]{}");
  

  // Better method:
  /**
 * @param {string} s
 * @return {boolean}
 */
let isValid = function(s) {
  let stack = new Stack();

  for (let character of s) {
    if (character === '{' || character === '[' || character === '(') {
      stack.push(character);
    } else if (!stack.isEmpty() && character === '}' && stack.peek() === '{') {
      stack.pop();
    } else if (!stack.isEmpty() && character === ')' && stack.peek() === '(') {
      stack.pop();
    } else if (!stack.isEmpty() && character === ']' && stack.peek() === '[') {
      stack.pop();
    } else {
      return false;
    }
  }

  return stack.isEmpty();
};



class Stack {
  constructor() {
    this.count = 0;
    this.storage = {};
  }

  push(val) {
    this.storage[this.count] = val;
    this.count++;
  }

  getCount() {
    return this.count;
  }

  pop() {
    if (this.count === 0) {
      return undefined;
    }

    this.count--;
    let result = this.storage[this.count];
    delete this.storage[this.count];
    return result;
  }

  peek() {
    let result = this.storage[this.count - 1];
    return result;
  }

  isEmpty() {
    return this.count === 0;
  }
}