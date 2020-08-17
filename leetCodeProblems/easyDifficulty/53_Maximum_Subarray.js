// 53. Maximum Subarray
// Easy

// Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.

// Example:

// Input: [-2,1,-3,4,-1,2,1,-5,4],
// Output: 6
// Explanation: [4,-1,2,1] has the largest sum = 6.
// Follow up:

// If you have figured out the O(n) solution, try coding another solution using the divide and conquer approach, which is more subtle.

// Input: [-2,1,-3,4,-1,2,1,-5,4],
// Output: 6
// Explanation: [4,-1,2,1] has the largest sum = 6.



/**
 * @param {number[]} nums
 * @return {number}
 */

 // Brute Force
 function findMaxSubArrayBruteForce(arr) { 
    let maxSum = -Infinity;
    let currSum;  
    for (var i = 0; i < nums.length; i++) {  
      currSum = 0;   
      for (var j = i; j < nums.length; j++) {   
        currSum += arr[j];    
        if (maxSum < currSum) {   
          maxSum = currSum;      
        }   
      } 
    } 
    return maxSum;
  }

var maxSubArray = function(nums) {
    let maxSum = -Infinity;
    let currSum;  
    if (nums.length == 1) return nums[0];
    for (let i=0; i<nums.length; i++) {
        currSum = 0;
        for (let j=i; j<nums.length; j++) {
            currSum += nums[j];    
            if (maxSum < currSum) {   
                maxSum = currSum;      
              }   
            } 
        }
    return maxSum
};


maxSubArray(nums)