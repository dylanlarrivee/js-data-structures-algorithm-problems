
// 1512. Number of Good Pairs
// Easy

// Given an array of integers nums.

// A pair (i,j) is called good if nums[i] == nums[j] and i < j.

// Return the number of good pairs.

 

// Example 1:

// Input: nums = [1,2,3,1,1,3]
// Output: 4
// Explanation: There are 4 good pairs (0,3), (0,4), (3,4), (2,5) 0-indexed.
// Example 2:

// Input: nums = [1,1,1,1]
// Output: 6
// Explanation: Each pair in the array are good.
// Example 3:

// Input: nums = [1,2,3]
// Output: 0
 

// Constraints:

// 1 <= nums.length <= 100
1 <= nums[i] <= 100
/**
 * @param {number[]} nums
 * @return {number}
 */

var numIdenticalPairs = function(nums) {
    let map = new Map()
    let totalMatches = 0;
    for (let i=0; i<nums.length; i++) {
        // for (let j=i+1; j<nums.length; j++ ) {
        //     if (nums[i] === nums[j]) {
        //         map.set(nums[i], nums[j])
        //         totalMatches++
        //     }
        // }
        if (map.get(nums[i]) >=0) {
            let freq = map.get(nums[i]);
            if (freq === 0) freq +=1
            freq +=1
            map.set(nums[i], freq)
        } else {
            map.set(nums[i], 0)
        }
        
    } 
    for (let frequency of map.values()) {
        let pairs = 0
        pairs = frequency * (frequency - 1) / 2
        totalMatches += pairs
    }
    console.log(map)
    return totalMatches
};