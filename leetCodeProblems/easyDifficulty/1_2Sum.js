
let nums = [2, 7, 11, 15],
    target = 9

var twoSum = function(nums, target) {
    const map = new Map();
    for (let i =0; i< nums.length; i++) {
        let currVal = nums[i];
        if (map.has(currVal)) {
            return [map.get(currVal), i ];
        } 
        let diff = target - currVal;
        map.set(diff, i);
    }
};
twoSum(nums, target);