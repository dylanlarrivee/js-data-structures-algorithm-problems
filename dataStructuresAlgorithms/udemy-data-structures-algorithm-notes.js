// Recursive funciton
function factorial(num) {
  if (num === 1) return 1;
  return num * factorial(num - 1);
}

// Linear search
function arrayLinearSearch(arrayToSearch, valueToFind) {
  for (i = 0; i < arrayToSearch.length; i++) {
    if (arrayToSearch[i] === valueToFind) {
      return i;
    }
  }
  return "-1";
}

// Binary Search - Perform the search on the indecise in the array and no need to modify the actual array
function binarySearch(sortedArray, valueToFind) {
  // For the start, middle and end pointers we need to use the index number and not the actual values for that spot in the array
  var start = 0;
  var end = sortedArray.length - 1;
  var middleSpot = Math.floor((start + end) / 2);
  // Loop through as long as we have not found the correct answer and the start index is less than or equal to the end index
  while (sortedArray[middleSpot] !== valueToFind && start <= end) {
    if (valueToFind < sortedArray[middleSpot]) {
      end = middleSpot - 1;
    } else {
      start = middleSpot + 1;
    }
    middleSpot = Math.floor((start + end) / 2);
  }
  if (sortedArray[middleSpot] == valueToFind) {
    return middleSpot;
  }
  return -1;
}

// Naive String Search
function naiveStringSearch(longString, shortString) {
  var matchCounter = 0;
  for (var i = 0; i < longString.length; i++) {
    for (var ii = 0; ii < shortString.length; ii++) {
      if (longString[i + ii] !== shortString[ii]) {
        break;
      }
      if (ii === shortString.length - 1) {
        matchCounter++;
      }
    }
  }
  return matchCounter;
}

naiveStringSearch("wowzzerswow", "wow");

// .sort comparator function
function numberCompare(num1, num2) {
  return num2 - num1;
}
[6, 4, 15, 10].sort(numberCompare);

function compareByLen(str1, str2) {
  return str2.length - str1.length;
}

// Swapping function for bubble sort
function swap(arr, idx1, idx2) {
  var temp = arr[idx1];
  arr[idx1] = arr[idx2];
  arr[idx2] = temp;
}

//Or this way that is shorter but less easier to understand by reading
const swap = (arr, idx1, idx2) => {
  [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
};

// Bubble sort function - Naive version
function bubbleSort(arr) {
  for (var i = arr.length; i > 0; i--) {
    noSwaps = true;
    for (var j = 0; j < i - 1; j++) {
      console.log(arr);
      if (arr[j] > arr[j + 1]) {
        //swap(arr,arr[j],arr[j+1])
        var temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        noSwaps = false;
      }
    }
    if (noSwaps) break;
  }
  return arr;
}
bubbleSort([9, 8, 7, 6, 5, 4, 3]);

// Bubble sort function - Condensed version
// ES2015 Version
function bubbleSort(arr) {
  const swap = (arr, idx1, idx2) => {
    [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
  };

  for (let i = arr.length; i > 0; i--) {
    for (let j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1);
      }
    }
  }
  return arr;
}

bubbleSort([8, 1, 2, 3, 4, 5, 6, 7]);

// Selection sort code
function selectionSort(arr) {
  for (i = 0; i < arr.length; i++) {
    var minVal = i;
    for (j = i + 1; j < arr.length; j++) {
      if (arr[minVal] > arr[j]) {
        var temp = arr[j];
        arr[j] = arr[minVal];
        arr[minVal] = temp;
      }
    }
  }
  return arr;
}
selectionSort([8, 1, 2, 3, 4, 5, 6, 7]);

// Insertion Sort code
// Better solution
function instertionSort(arr) {
  for (var i = 1; i < arr.length; I++) {
    var currentVal = arr[i];
    for (var j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
      arr[j + 1] = arr[j];
    }
    arr[j + 1] = currentVal;
  }
  return arr;
}
insertionSort([3, 2, 5, 6, 1, 8]);

// My solution
function insertionSort(arr) {
  for (var i = 1; i < arr.length; i++) {
    for (var j = i + 1; j < arr.length; j++) {
      var minVal = j;
      for (var k = 0; k < j; k++) {
        if (arr[minVal] < arr[k]) {
          var temp = arr[k];
          arr[k] = arr[minVal];
          arr[minVal] = temp;
        }
      }
      console.log(arr);
    }
  }
  return arr;
}

insertionSort([3, 2, 5, 6, 1, 8]);

// Merging arrays function
function mergeArray(arr1, arr2) {
  var i = 0;
  var j = 0;
  var mergedArray = [];
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      mergedArray.push(arr1[i]);
      i++;
    } else {
      mergedArray.push(arr2[j]);
      j++;
    }
    console.log(mergedArray);
  }
  while (i < arr1.length) {
    mergedArray.push(arr1[i]);
    i++;
  }
  while (j < arr2.length) {
    mergedArray.push(arr2[j]);
    j++;
  }
  return mergedArray;
}
// var arr1 = [1, 10, 50];
// var arr2 = [2, 14, 99, 100];
// mergeArray(arr1, arr2);

// Merge sort function
function mergeSort(arr) {
  if (arr.length <= 1) return arr;
  let mid = Math.floor(arr.length / 2);
  let left = mergeSort(arr.slice(0, mid));
  let right = mergeSort(arr.slice(mid));
  return mergeArray(left, right);
}

var arr = [9, 8, 3, 4, 5, 2, 7, 10];
mergeSort(arr);

// Pivot helper function
function pivot(arr, start = 0, end = arr.length + 1) {
  function swap(arr, idx1, idx2) {
    let temp = arr[idx1];
    arr[idx1] = arr[idx2];
    arr[idx2] = temp;
  }
  let pivot = arr[start];
  let swapIdx = start;

  for (let i = start + 1; i <= end; i++) {
    if (pivot > arr[i]) {
      swapIdx++;
      swap(arr, swapIdx, i);
    }
  }
  swap(arr, start, swapIdx);
  return swapIdx;
}

let arr = [9, 8, 3, 4, 5, 2, 7, 10];
// let startIndex = 0;
// let endIndex = 7;
// pivot(arr);

// Quick sort function

function quickSort(arr, left = 0, right = arr.length - 1) {
  if (left < right) {
    let pivotIndex = pivot(arr, left, right);
    //left
    quickSort(arr, left, pivotIndex - 1);
    //right
    quickSort(arr, pivotIndex + 1, right);
  }
  return arr;
}

quickSort(arr);

// Radix Sort - helper functions
// getDigit function - My version:
function getDigit(num, place) {
  let strNum = num.toString();
  let numArray = [];
  for (i = strNum.length - 1; i > 0; i--) {
    numArray.push(strNum[i]);
  }
  if (numArray[place] === undefined) {
    return 0;
  }
  return numArray[place];
}
// getDigit(1234,0);

// getDigit() function - Math version:
function getDigit(num, i) {
  return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
}

//digitCount() function - Math version
function digitCount(num) {
  if (num === 0) return 1;
  return Math.floor(Math.log10(Math.abs(num))) + 1;
}

// mostDigits() functions
function mostDigits(nums) {
  let maxDigits = 1;
  for (i = 0; i < nums.length - 1; i++) {
    maxDigits = Math.max(maxDigits, digitCount(nums[i]));
  }
  return maxDigits;
}

// Radix Sort
function radixSort(arr) {
  let maxDigit = mostDigits(arr);
  for (let i = 0; i < maxDigit; i++) {
    let tempArray = Array.from({ length: 10 }, () => []);
    console.log("new loop");
    for (let j = 0; j < arr.length; j++) {
      let wholeNum = arr[j];
      let digitPlace = getDigit(wholeNum, i);
      console.log("digitPlace:" + digitPlace);
      tempArray[digitPlace].push(wholeNum);
      console.log(tempArray);

      // console.log("wholeNum:" + wholeNum)
      // console.log("digitPlace:" + digitPlace)
      //tempArray[].push()
    }
    // arr = [].concat(...tempArray);
    // arr = tempArray[0].concat(tempArray[1],tempArray[2],tempArray[3],tempArray[4],tempArray[5],tempArray[6],tempArray[7],tempArray[8],tempArray[9]);
  }
  return arr;
}
// j is the whole number
// i is the digit place
radixSort([344, 23, 999, 219]);

// The class syntax
class Student {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
}

// Then you can create new students like this:
let firstStudent = new Student("Dylan", "Larrivee");
let secondStudent = new Student("Jane", "Larrivee");

// Singly Linked list
class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  push(val) {
    var newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }
  traverse() {
    var current = this.head;
    while (current) {
      console.log(current.val);
      current = current.next;
    }
  }
  pop() {
    if (!this.head) {
      return undefined;
    } else {
      var current = this.head;
      var newTail = current;
      while (current.next) {
        newTail = current;
        console.log(newTail);
        current = current.next;
      }
      this.tail = newTail;
      newTail.next = null;
      this.length--;
      if (this.length === 0) {
        this.head = null;
        this.tail = null;
      }
      return this;
    }
  }
  shift() {
    if (!this.head) {
      return undefined;
    } else {
      var oldHead = this.head;
      this.head = oldHead.next;
      this.length--;
      if (this.length === 0) {
        this.head = null;
        this.tail = null;
      }
      return oldHead;
    }
  }
  unshift(val) {
    var newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      var oldHead = this.head;
      this.head = newNode;
      this.head.next = oldHead;
    }
    this.length++;
    return this;
  }
  get(index) {
    if (index < 0 || index >= this.length) return null;
    var counter = 0;
    var current = this.head;
    while (counter !== index) {
      current = current.next;
      counter++;
    }
    return current;
  }
  set(index, val) {
    var foundNode = this.get(index);
    if (foundNode) {
      foundNode.val = val;
      return true;
    }
    return false;
  }
  insert(index, val) {
    if (index < 0 || index > this.length) return false;
    if (index === 0) return !!this.unshift(val);
    if (index === this.length) return !!this.push(val);
    
    var newNode = new Node(val);
    var nodeBefore = this.get(index - 1);
    var temp = nodeBefore.next;
    nodeBefore.next = newNode;
    newNode.next = temp;

    this.length++;
    return true;
  }
  remove(index) {
    if (index < 0 || index >= this.length) return false;
    if (index ===0) return !!this.shift()
    if (index === length -1) return !!this.pop()

    var nodeBefore = this.get(index-1);
    var removed = nodeBefore.next;
    nodeBefore.next = nodeBefore.next.next;
    this.length--;
    return removed

  }
}

var list = new SinglyLinkedList();
list.push("HELLO");
list.push("Middle");
list.push("GOODBYE");