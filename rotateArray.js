// Rotate Array





/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */

var rotate = function(nums, k) {
    // Split the array into 2 seperate arrays and then add them back together.
    // Take the first (n-k)+1 spots add them to the end of the rest
    let reverseAmount = (nums.length - k)
    var first = nums.slice(0, reverseAmount);
    var second = nums.slice(reverseAmount);
    
    let arr1 = nums.slice(0,reverseAmount)
    let arr2 = nums.slice(reverseAmount)
    console.log("arr1", arr1)
    console.log("arr2", arr2)
    
    let arrFinal = arr2.concat(arr1)
    console.log(arrFinal)
    nums.splice(0,nums.length)
    nums.push(...arrFinal)
};




var rotate = function(nums, k) {
    let pushSpot = k -1 
    let currSpot = 0
    let tempNum = nums[pushSpot]
    let lastSpot = nums.length-1

    for (let i=0; i<nums.length; i++) {
        if (i>nums.length - k) {
            pushSpot = k - (lastSpot - i)
        } else {
            pushSpot = currSpot + k
        }
        tempNum = nums[pushSpot]
        nums[pushSpot] = nums[currSpot]
        currSpot = pushSpot
    } 

};


Input: nums = [1,2,3,4,5,6,7], k = 3
Output: [5,6,7,1,2,3,4]



[1,2,3,4,5,6,7]

tempNum 6
put 7 where 6 is

tempNum 5
put 


[1,2,3,4,5,6,7]

tempNum 2
[1,1,2]

if (i>nums.length - k) {
    pushSpot = k - ((nums.length-1) - 1)
}

if (i==nums.length - k) {
    pushSpot = 0
}

if (i==nums.length - k) {
    pushSpot = 0
} 