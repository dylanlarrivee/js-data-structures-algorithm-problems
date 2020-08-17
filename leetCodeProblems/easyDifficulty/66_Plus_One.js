// 66. Plus One
// Easy

// Given a non-empty array of digits representing a non-negative integer, increment one to the integer.

// The digits are stored such that the most significant digit is at the head of the list, and each element in the array contains a single digit.

// You may assume the integer does not contain any leading zero, except the number 0 itself.

// Example 1:

// Input: [1,2,3]
// Output: [1,2,4]
// Explanation: The array represents the integer 123.
// Example 2:

// Input: [4,3,2,1]
// Output: [4,3,2,2]
// Explanation: The array represents the integer 4321.

/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    let lastSpot = digits.length -1;
    let allNineCheck = false;
    if (digits[lastSpot] < 9) {
        digits[lastSpot] += 1
    } else {
        for (let i=lastSpot; i>=0; i--){
            if (digits[i] < 9) {
                digits[i] += 1
                allNineCheck = true;
                break
            } else {
                digits[i] = 0
            }
        }
        if (!allNineCheck) {
            digits.unshift(1);
        }
    }
    return digits
};
