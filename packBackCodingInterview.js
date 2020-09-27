// Reverse strings in an array
    // I accidentally thought this meant reverse the array AND the strings in the array

// Fibonacci sequence JavaScript
    // Was not sure about the expected outcome here

// Tell if a string is a palindrome

process.stdin.on('end', function () {
    //do your processing here.
    let stringArr = input.split("\n");
    let returnArr = []
    
    for (let i=0;i<stringArr.length;i++) {
      let unpairedChar = new Set();
      
      for (let char of stringArr[i]) {
        if (unpairedChar.has(char)) {
          unpairedChar.delete(char);
        } else {
          unpairedChar.add(char)
        }
        if (unpairedChar <=1) {
        returnArr.push("YES")
      } else {
        returnArr.push("NO")
      }
    }
    }
    
    console.log(returnArr.join("\n"));
  });