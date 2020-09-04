const stringToReverse = "hello"

const reverseString = function(stringToReverse) {
    let splitStringArr = stringToReverse.split("");
    let reversedArr = splitStringArr.reverse();
    let reversedString = reversedArr.join("");
    // console.log(reversedString)
    return reversedString
}


reverseString(stringToReverse)
