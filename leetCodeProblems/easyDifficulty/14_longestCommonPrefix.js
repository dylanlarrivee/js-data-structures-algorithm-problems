// 14. Longest Common Prefix

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

//https://youtu.be/g5kH8EX4l-U

/**
 * @param {string[]} strs
 * @return {string}
 */

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
    longest += currentLetter;
  }
  return longest;
};

var longestCommonPrefix = function(strs) {
  var commonPrefix = "";

  for (let i = 0; i < strs.length; i++) {
    var maxStringLength = 0;
    if (strs[i].length > maxStringLength) {
      maxStringLength = strs[i].length;
    }
    for (let j = 0; j < maxStringLength; j++) {
      var map = new Map();
      let currVal = strs[i].split("")[j];
      console.log(currVal);
      if (map.has(currVal)) {
        commonPrefix += map.get(currVal);
      }
      map.set(currVal, j);
    }
    console.log(map);
  }
  return commonPrefix;
};

longestCommonPrefix(["flower", "flow", "flight"]);

var getFirstLetter = function(strs) {
  for (var i = 0; i < strs.length; i++) {
    for (var j = 0; j < 6; j++) {
      var firstLetter = strs[i].split("")[j];
      console.log(firstLetter);
    }
  }
};
getFirstLetter(["flower", "flow", "flight"]);
