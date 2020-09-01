// 217. Contains Duplicate
// Easy

// Given an array of integers, find if the array contains any duplicates.

// Your function should return true if any value appears at least twice in the array, and it should return false if every element is distinct.

// Example 1:

// Input: [1,2,3,1]
// Output: true
// Example 2:

// Input: [1,2,3,4]
// Output: false
// Example 3:

// Input: [1,1,1,3,3,4,3,2,4,2]
// Output: true

/**
 * @param {number[]} nums
 * @return {boolean}
 */

 //  Hash map example
 
var singleNumber = function(nums) {
    let map = new Map();
    for (i=0; i<nums.length; i++) {
        if (map.has(nums[i])) {
            let newAmt = map.get(nums[i]) + 1
            map.set(nums[i], newAmt)
        } else {
            map.set(nums[i], 1)
        }  
    }
    console.log(map)
    for (let [key, val] of map) {
        if (val === 1) {
            return key;
        }
    }
};