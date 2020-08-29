// 1480. Running Sum of 1d Array
// Easy

// Given an array nums. We define a running sum of an array as runningSum[i] = sum(nums[0]…nums[i]).

// Return the running sum of nums.

 

// Example 1:

// Input: nums = [1,2,3,4]
// Output: [1,3,6,10]
// Explanation: Running sum is obtained as follows: [1, 1+2, 1+2+3, 1+2+3+4].
// Example 2:

// Input: nums = [1,1,1,1,1]
// Output: [1,2,3,4,5]
// Explanation: Running sum is obtained as follows: [1, 1+1, 1+1+1, 1+1+1+1, 1+1+1+1+1].
// Example 3:

// Input: nums = [3,1,2,10,1]
// Output: [3,4,6,16,17]
 

// Constraints:

// 1 <= nums.length <= 1000
// -10^6 <= nums[i] <= 10^6


/**
 * @param {number[]} nums
 * @return {number[]}
 */

var runningSum = function(nums) {
    let newArr = []
    for (let i=0; i<nums.length; i++) {
        let tempSum = 0
        for (let j=i; j>=0; j--){
            tempSum += nums[j]
            if (j === 0) {
                newArr[i] = tempSum
            }
        }
    }
    return newArr
};


console.log(animals.slice(2));
// expected output: Array ["camel", "duck", "elephant"]

[1,2,3,4]

[i[0], i[0] + i[1], i[0] + i[1] + i [2] ]

console.log(sum(...numbers));
// expected output: 6


arrSum = function(arr){
    return arr.reduce(function(a,b){
      return a + b
    }, 0);
  }


  var runningSum = function(nums) {
   
    let tempArr = [] 
    for (let i=0; i<nums.length; i++) {
        let sliceArr = nums.slice(0, i+1)
        console.log(sliceArr)
        tempArr[i] = sliceArr.reduce(function(a,b){return a + b}, 0);
    }
    return tempArr
};
