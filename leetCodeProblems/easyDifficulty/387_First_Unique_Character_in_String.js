// 387. First Unique Character in a String
// Easy

// Given a string, find the first non-repeating character in it and return its index. If it doesn't exist, return -1.

// Examples:

// s = "leetcode"
// return 0.

// s = "loveleetcode"
// return 2.
 

/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    let map = new Map()
    for (let i=0; i<= s.length-1; i++) {
        if (map.has(s[i])) {
            let tempAmt = map.get(s[i])
            map.set(s[i],tempAmt + 1)
        } else {
            map.set(s[i],1)
        }
    }
    
    console.log(map)
    for (let i=0; i<= s.length-1; i++) {
        if (map.get(s[i]) === 1) {
            return i
        }
    }
    return -1
};