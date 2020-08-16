
// let arr = [0,1,2,3]
// console.log(arr);
// arr.splice(1,0,99);
// console.log(arr);


let nums = [-2,1,-3,4,-1,2,1,-5,4]

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let maxSum = -Infinity;
    let maxArr = [];
    if (nums.length == 1) return nums[0];
    for (let i=0; i<nums.length; i++) {
        let tempArr = [nums[i]];
        let tempSum = nums[i];
        for (let j=i+1; j<nums.length; j++) {
            console.log(tempArr);
            console.log(tempSum);
            tempSum += nums[j];
            if (tempSum > maxSum) {
                maxSum = tempSum
                maxArr = tempArr
            } 
            tempArr.push(nums[j]);
        }
    }
    return maxSum
};


maxSubArray(nums)