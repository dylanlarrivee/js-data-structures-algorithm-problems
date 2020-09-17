// You have an array of integers, and for each index you want to find the product of every integer except the integer at that index.

// Write a function getProductsOfAllIntsExceptAtIndex() that takes an array of integers and returns an array of the products.

// For example, given:

//   [1, 7, 3, 4]

// JavaScript
// your function would return:

//   [84, 12, 28, 21]

// JavaScript
// by calculating:

//   [7 * 3 * 4,  1 * 3 * 4,  1 * 7 * 4,  1 * 7 * 3]

// JavaScript
// Here's the catch: You can't use division in your solution!

let arr = [1, 2, 6, 5, 9]
         // [1, 3, 3, 6, 30, 180]
         // [540, 270, 90, 108, 60]


const getProductsOfAllIntsExceptAtIndex = function(arr) {
  if (intArray.length < 2) {
    throw new Error('Getting the product of numbers at other indices requires at least 2 numbers');
  }
    let currProduct = 1
    let tempArr = []
    tempArr.push(currProduct)
    for (let i=1; i<arr.length;i++) {
        currProduct = currProduct * arr[i-1]
        tempArr.push(currProduct)
    }
    console.log(tempArr)
    currProduct = 1
    for (i=arr.length-2; i>=0;i--) {
      currProduct = currProduct * arr[i+1]
      finalProduct = currProduct * tempArr[i]
      tempArr[i] = finalProduct
  }
  console.log(tempArr)
    return tempArr
}

console.log(getProductsOfAllIntsExceptAtIndex(arr))