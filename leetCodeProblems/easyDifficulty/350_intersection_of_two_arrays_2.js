// 350. Intersection of Two Arrays II
// Easy

// Given two arrays, write a function to compute their intersection.

// Example 1:

// Input: nums1 = [1,2,2,1], nums2 = [2,2]
// Output: [2,2]
// Example 2:

// Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
// Output: [4,9]
// Note:

// Each element in the result should appear as many times as it shows in both arrays.
// The result can be in any order.
// Follow up:

// What if the given array is already sorted? How would you optimize your algorithm?
// What if nums1's size is small compared to nums2's size? Which algorithm is better?
// What if elements of nums2 are stored on disk, and the memory is limited such that you cannot load all elements into the memory at once?

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */

// Sort the arrays and then do a while loop comparing them to each other. If current value of each matched then push that to a new array. If one is lower than the other increase the position in that array.
var intersect = function(nums1, nums2) {
    let nums1Sorted = nums1.sort(function(a, b){return a - b});
    let nums2Sorted = nums2.sort(function(a, b){return a - b});
    let outputArr = []
    
    console.log(nums1Sorted)
    console.log(nums2Sorted)
    let i=0,j=0
    while ((i<nums1.length) && (j<nums2.length))
        if (nums1Sorted[i] === nums2Sorted[j]) {
            outputArr.push(nums1Sorted[i])
            j++
            i++
        } else if (nums1Sorted[i] < nums2Sorted[j]) {
            i++
        } else {
            j++
    
    }
    return outputArr
};

// Use a hash map to store one array with the number of occurances for each value. Then loop through the second array and check if it contains the number and that the number has more than 0 occurances. push that number to a new array and subtract 1 from the occurance of the number in the hash map.

var intersect = function(nums1, nums2) {
    let outputArr = []
    let map = new Map()
    for (let i=0; i<nums1.length; i++) {
        if (!map.has(nums1[i])) {
            map.set(nums1[i], 1)
        } else {
            let tempCount = map.get(nums1[i])
            map.set(nums1[i], tempCount + 1)
        }
        
    }
    console.log(map)
    for (let j=0;j<nums2.length;j++) {
        if (map.has(nums2[j])) {
            if (map.get(nums2[j]) > 0) {
                outputArr.push(nums2[j])
                let tempCount2 = map.get(nums2[j])
                map.set(nums2[j], tempCount2 - 1)   
            }
        }
    }
    
    return outputArr
};



var intersect = function(nums1, nums2) {
    let outputArr = []
    let maxLength
    let minLength
    if (nums1.length > nums2.length) {
         maxLength = nums1.length 
         minLength = nums2.length
    } else {
        maxLength = nums2.length 
        minLength = nums1.length
    }
    for (i=0; i<maxLength; i++) {
        for (j=0; j<minLength; j++) {
            console.log(nums1[i], nums2[j])
            if (nums1[i] === nums2[j]) {
                outputArr.push(nums1[i])
                break
            } 
            
        }
    }
    return outputArr
};

