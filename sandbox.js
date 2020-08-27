// https://leetcode.com/problemset/all/?difficulty=Easy


// let arr = [0,1,2,3]
// console.log(arr);
// arr.splice(1,0,99);
// console.log(arr);`

// Starting from the last place of the shorter string, compare the 2 values. If they are both 1 then make zero and add a 

let digits = [6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,3]

/**
 * @param {number[]} nums
 * @return {number}
 */

let a =       "11"
let b  =      "1"
let answer = "10101"
let n = 2 
let nums = [0,0,1,1,1,2,2,3,3,4]

// debugger;
var removeDuplicates = function(nums) {
   for (let i=1; i<nums.length; i++) {
       console.log(nums[i])
       if (nums[i] === nums[i-1]) {
           nums.splice(i,1);
           i--
       }
       return nums.length
   }
};

removeDuplicates(nums)