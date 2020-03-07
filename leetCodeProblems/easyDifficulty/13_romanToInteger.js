// Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.

// Symbol       Value
// I             1
// V             5
// X             10
// L             50
// C             100
// D             500
// M             1000
// For example, two is written as II in Roman numeral, just two one's added together. Twelve is written as, XII, which is simply X + II. The number twenty seven is written as XXVII, which is XX + V + II.

// Roman numerals are usually written largest to smallest from left to right. However, the numeral for four is not IIII. Instead, the number four is written as IV. Because the one is before the five we subtract it making four. The same principle applies to the number nine, which is written as IX. There are six instances where subtraction is used:

// I can be placed before V (5) and X (10) to make 4 and 9. 
// X can be placed before L (50) and C (100) to make 40 and 90. 
// C can be placed before D (500) and M (1000) to make 400 and 900.
// Given a roman numeral, convert it to an integer. Input is guaranteed to be within the range from 1 to 3999.

//--------------------------------------------------------------------------------------------------------------------------------------------
// You can add up all the letters excpets when the number on the right is greater than the number on the left, then you need to take the difference if the two. 

// create a map with the roman numaerals and number values to easily lookup
/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    const conversion = {
        'I' : 1,
        'V' : 5,
        'X' : 10,
        'L' : 50,
        'C' : 100,
        'D' : 500,
        'M' : 1000,
        '#' : 10000,
    };

    var totalSum = 0
    
    for (let i =0; i<s.length; i++) {
        let cur = conversion[s.charAt(i)];
        let next = conversion[s.charAt(i+1)];

        // Same as this but runs faster:
        // let cur = conversion[s[i]];
        // let next = conversion[s[i+1]];

        if(next) {
            if (cur >= next) {
                totalSum = totalSum + cur;
            } else {
                totalSum = totalSum + (next - cur);
                i++;
            }      
        } else {
            totalSum = totalSum + cur;
        }
    }
    return totalSum;
};



for (let i = 0; i<s.length; i++) {
    let cur = s[i];
    let next = s[i+1];
    let useNext = false;
        if (next && cur > next && useNext) {
            totalSum = totalSum + cur;
            useNext = true;
        } else {

        }
    