
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


// not as good way:
var twoSum = function(nums, target) {
    for (let i=0; i<nums.length;i++) {
        for (let j=i+1; j<nums.length;j++) {
        if (nums[i] + nums[j] === target) {
            return [i,j]
        }  
        }
    }
};

let nums = [3,2,4]
let target = 6
twoSum(nums, target)


// Other Map
var twoSum = function(nums, target) {
    let diffMap = new Map();
    for (let i=0; i<nums.length;i++) {
        let diff = target - nums[i];
        if (diffMap.has(diff)) {
            console.log([diffMap.get(diff), i])
            return [diffMap.get(diff), i]
        }
        diffMap.set(nums[i], i)
        console.log(diffMap)    
    }
};

let nums = [3,2,4]
let target = 6
twoSum(nums, target)