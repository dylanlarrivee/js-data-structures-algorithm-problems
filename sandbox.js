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

debugger;
let x = 8;
var climbStairs = function(n) {
   let stepsArr = [...Array(n).keys()]
   stepsArr[0] = 1
   stepsArr[1] = 1
   stepsArr[2] = 2
   
   for (let i=0; i<stepsArr.length; i++) {
      // Fibonacci sequence.
      // F(i) = F(i-1) + F(i-2)
      stepsArr[i] = stepsArr[i-1] + stepsArr[i-2]
   }
   return stepsArr[n]
};

climbStairs(n)