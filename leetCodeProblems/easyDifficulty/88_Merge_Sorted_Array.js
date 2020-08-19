// 88. Merge Sorted Array

// Given two sorted integer arrays nums1 and nums2, merge nums2 into nums1 as one sorted array.

// Note:

// The number of elements initialized in nums1 and nums2 are m and n respectively.
// You may assume that nums1 has enough space (size that is equal to m + n) to hold additional elements from nums2.
// Example:

// Input:
// nums1 = [1,2,3,0,0,0], m = 3
// nums2 = [2,5,6],       n = 3

// Output: [1,2,2,3,5,6]
 

// Constraints:

// -10^9 <= nums1[i], nums2[i] <= 10^9
// nums1.length == m + n
// nums2.length == n
// Accepted


var merge = function(nums1, m, nums2, n) {
    let currNums1 = m-1
    let currNums2 = n-1
    for(i=nums1.length-1;i>=0;i--) {
        if (currNums1 < 0) {
            nums1[i] = nums2[currNums2]
            currNums2--
        }
        else if (nums1[currNums1] >= nums2[currNums2]) {
            nums1[i] = nums1[currNums1];
            currNums1--
        } else  if (nums1[currNums1] < nums2[currNums2]) {
            nums1[i] = nums2[currNums2];
            currNums2--
        }
        console.log(currNums2)
    }
    return nums1
};