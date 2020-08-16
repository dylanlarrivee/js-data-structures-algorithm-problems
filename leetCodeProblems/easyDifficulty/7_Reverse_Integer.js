// Given a 32-bit signed integer, reverse digits of an integer.

// Example 1:

// Input: 123
// Output: 321
// Example 2:

// Input: -123
// Output: -321
// Example 3:

// Input: 120
// Output: 21
// Note:
// Assume we are dealing with an environment which could only store integers within the 32-bit signed integer range: [−231,  231 − 1]. For the purpose of this problem, assume that your function returns 0 when the reversed integer overflows.

/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let int = parseFloat(
        x
          .toString()
          .split('')
          .reverse()
          .join('')
      ) * Math.sign(x)
   let limit = Math.pow(2, 31);
   return (int > limit || (int< 0-limit) ? 0 : int)    
};
