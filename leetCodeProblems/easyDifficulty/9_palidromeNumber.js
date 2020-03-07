// 9. Palindrome Number

// Determine whether an integer is a palindrome. An integer is a palindrome when it reads the same backward as forward.

// Example 1:

// Input: 121
// Output: true
// Example 2:

// Input: -121
// Output: false
// Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.
// Example 3:

// Input: 10
// Output: false
// Explanation: Reads 01 from right to left. Therefore it is not a palindrome.
// Follow up:

// Coud you solve it without converting the integer to a string?

// https://www.youtube.com/watch?v=gnwFjlUXN1o


// Reverse the number and then check if it matches the original

//Easier way is to do this as a string or we can use math

// Math Version - Keeps it as an integer
var isPalindrome = function(x) {
    if (x<0) return false

    return x === reversedInteger(x);
};

var reversedInteger = function(x) {
    let reversed = 0;

    while (x>0) {
        reversed = (reversed * 10) + (x % 10);
        x = Math.floor(x/10);
    }

    return reversed;
};

// String version
var isPalindrome = function(x) {
    if (x<0) return false
    if (x.length === 1) return true

    return String(x) === reversedString(x);
};

var reversedString = function(x) {
    var xString = String(x);
    return xString.split("").reverse().join("");
}