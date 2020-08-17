// 67. Add Binary
// Easy

// Given two binary strings, return their sum (also a binary string).

// The input strings are both non-empty and contains only characters 1 or 0.

// Example 1:

// Input: a = "11", b = "1"
// Output: "100"
// Example 2:

// Input: a = "1010", b = "1011"
// Output: "10101"
 

// Constraints:

// Each string consists only of '0' or '1' characters.
// 1 <= a.length, b.length <= 10^4
// Each string is either "0" or doesn't contain any leading zero.


// Starting from the last place of the shorter string, compare the 2 values. If they are both 1 then make zero and add a 


let a = "11"
let b  = "1"

var addBinary = function(a, b) {
    let longestStringSize = Math.max(a.length, b.length);
    let aCurrDigit = a.length - 1;
    let bCurrDigit = b.length - 1;
 
    let sumBinaryString = "";
    let carry = 0;
 
    while (a[aCurrDigit] || b[bCurrDigit] || carry) {
       let numA = isNaN(parseInt(a[aCurrDigit])) ? 0 : parseInt(a[aCurrDigit]);
       let numB = isNaN(parseInt(b[bCurrDigit])) ? 0 : parseInt(b[bCurrDigit]);
       
       if (numA + numB + carry === 2) {
          sumBinaryString =  "0" + sumBinaryString
          carry = 1
          aCurrDigit--
          bCurrDigit--
       } else if (numA + numB + carry === 3) {
          sumBinaryString =  "1" + sumBinaryString
          carry = 1
          aCurrDigit--
          bCurrDigit--
       } else if (numA + numB + carry === 1) {
          sumBinaryString = "1" + sumBinaryString
          carry = 0
          aCurrDigit--
          bCurrDigit--
       } else if (carry === 1){
          sumBinaryString = "1" + sumBinaryString
          carry = 0
          aCurrDigit--
          bCurrDigit--
       } else {
          sumBinaryString = "0" + sumBinaryString
          carry = 0
          aCurrDigit--
          bCurrDigit--
       }
    }  
    return sumBinaryString
 };