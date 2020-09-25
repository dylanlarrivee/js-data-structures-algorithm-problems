
// const decksOfCards = function(cardsArr) {
//     // 
//     let map = new Map()

//     for (let i=0; i<cardsArr.length; i++) {
//         if (map.has(cardsArr[i])) {
//             let cardAmount = map.get(cardsArr[i])
//             map.set(cardsArr[i], cardAmount + 1)            
//         } else {
//             map.set(cardsArr[i], 1)
//         }
//     }

//     if (map.size !== 52) return 0

// let   words = ['k', 'v', 'a', 'b', 'c', 'd', 'e', 'g', 'i'];

// const findRotationPoint = function (arr) {
//   let arrLength = arr.arrLength;
//   let halfway = Math.floor(arrLength / 2);
//   let lowerIndex = 0;
//   let higherIndex = arrLength;

//   while (lowerIndex  < higherIndex) {
//     if (arr[halfway] < arr[halfway - 1]) return arr[halfway];

//     if (arr[halfway] < arr[lowerIndex]) {
//       higherIndex = halfway;
//       halfway = Math.floor((halfway - lowerIndex) / 2);
//     } else {
//       lowerIndex = halfway;
//       halfway = Math.floor((higherIndex - halfway) / 2);
//     }
//   }
//   return -1;
// };


// console.lo

// let numbers = [1,3,3,4,4,4]

// function countDuplicate(numbers) {
//   // Write your code here
//   let map = new Map()
//   let numberOfNonUniqueValues = 0

//   for (let i=0;i<numbers.length; i++) {
//       if (map.has(numbers[i])) {
//           let currNumCount = map.get(numbers[i])
//           map.set(numbers[i], currNumCount + 1)
//       } else {
//           map.set(numbers[i], 1)
//       }
//   }
// map.forEach( (value,key,map) => {
//   if (value >1) {
//       numberOfNonUniqueValues++
//   }
// })
// return numberOfNonUniqueValues

// }

// console.log(countDuplicate(numbers))

// // let boxes = [1,2,3]
// // let unitsPerBox = [3,2,1]
// // let truckSize = 3

// let boxes = [1,2,3]
// let unitsPerBox = [2,4,6]
// let truckSize = 12113268179724504



// function getMaxUnits(boxes, unitsPerBox, truckSize) {
//   // Write your code here
//   let map = new Map()
//   let boxesUsed = 0;
//   let boxesRemaining = truckSize - boxesUsed;
//   let maxNumberUnits = 0;
//   for (let i=0; i<boxes.length; i++) {
//       map.set(unitsPerBox[i], boxes[i])
//   }
//   unitsPerBox.sort((a,b) => b-a);
//   console.log("unitsPerBox", unitsPerBox)
//   for (let j=0;j<unitsPerBox.length;j++) {
//       let currQuantity = map.get(unitsPerBox[j])
//       console.log("boxesRemaining", boxesRemaining)
//       if (currQuantity >= boxesRemaining) {
//           maxNumberUnits = maxNumberUnits + (boxesRemaining * unitsPerBox[j])
//           break
//       } else {
//           maxNumberUnits = maxNumberUnits + (currQuantity * unitsPerBox[j])
//           boxesUsed = boxesUsed + currQuantity
//           boxesRemaining = truckSize - boxesUsed
//       }
//   }
//   return maxNumberUnits
// }
// console.log(getMaxUnits(boxes, unitsPerBox, truckSize))


//         // if (map.get(unitsPerBox[i]) !== 0) {  
//         // }


//         'use strict';

// const fs = require('fs');

// process.stdin.resume();
// process.stdin.setEncoding('utf-8');

// let inputString = '';
// let currentLine = 0;

// process.stdin.on('data', function(inputStdin) {
//     inputString += inputStdin;
// });

// process.stdin.on('end', function() {
//     inputString = inputString.split('\n');

//     main();
// });

// function readLine() {
//     return inputString[currentLine++];
// }

let domains = "google.mail.com"
let domainsNum = domains.split(".").length
console.log(domainsNum)

for (let i=0;i<domainsNum;i++) {
  console.log("domains", domains)
  domains = domains.slice(domains.indexOf(".") +1, domains.length)
}

