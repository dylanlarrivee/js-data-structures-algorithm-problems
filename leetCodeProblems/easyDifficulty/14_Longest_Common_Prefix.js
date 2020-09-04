
// 14. Longest Common Prefix
// Easy

// 2876

// 1941

// Add to List

// Share
// Write a function to find the longest common prefix string amongst an array of strings.

// If there is no common prefix, return an empty string "".

// Example 1:

// Input: ["flower","flow","flight"]
// Output: "fl"
// Example 2:

// Input: ["dog","racecar","car"]
// Output: ""
// Explanation: There is no common prefix among the input strings.
// Note:

// All given inputs are in lowercase letters a-z.

var longestCommonPrefix = function(strs) {
    let longestCommonPrefix = ""  
    if (strs.length === 0 ) return longestCommonPrefix
    
    
    for (let i=0;i<strs.length;i++) {
        let j=0
        let tempLetter = strs[j][i]
        for (j=0;j<strs.length-1;j++) {
            console.log("strs[j][i]", strs[j][i])
            console.log("tempLetter", tempLetter)
            if (strs[j][i] === strs[j+1][i]) {
                tempLetter = strs[j][i]
            } else if (j > strs.length) {
                break
            }
            else {
                tempLetter = ""
                break
            }
        }
        // if (tempLetter = "" ) break
        longestCommonPrefix = longestCommonPrefix + tempLetter
    }
    
    return longestCommonPrefix 
};




// ["flower","flow","flight"]

// compare str[1][1],str[2][1], str[3][1]

// loop 1 


var longestCommonPrefix = function(strs) {
  let longest = "";

  if (strs.length === 0) return longest;

  // get the first word in the array to start comparing
  let comparisonWord = strs[0];
  let comparisonIndex = 0;

  for (let comparisonLetter of comparisonWord) {
    for (let i = 1; i < strs.length; i++) {
      let currentWord = strs[i];
      let currentLetter = currentWord[comparisonIndex];

      if (
        comparisonLetter !== currentLetter ||
        comparisonIndex > currentWord.length
      ) {
        return longest;
      }
    }
    comparisonIndex++;
    longest += comparisonLetter;
  }
  return longest;
};