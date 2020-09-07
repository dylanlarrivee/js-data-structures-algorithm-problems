
const myArray = [3, 4, 6, 10, 11, 15];
const alicesArray = [1, 5, 8, 12, 14, 19];

const mergeArrays = function (myArray, alicesArray) {
  let totalength = (myArray.length + alicesArray.length) - 1;

  let myArrayPointer = 0;
  let alicesArrayPointer = 0;
  let combinedArr = [];

  for (let i = 0; i <= totalength; i++) {
     if (alicesArrayPointer > alicesArray.length ||  myArray[myArrayPointer] <= alicesArray[alicesArrayPointer]) {
      combinedArr.push(myArray[myArrayPointer]);
      myArrayPointer++;
    } else {
      combinedArr.push(alicesArray[alicesArrayPointer]);
      alicesArrayPointer++;
    }
  }

  return combinedArr;
};

// const mergeArrays = function (myArray, alicesArray) {
//     let longest

//     if (myArray.length>alicesArray.length) {
//         longest=myArray.length 
//     } else {
//         longest=alicesArray.length
//     }

//     let i = 0
//     let j =0 
//     let combinedArr = []
    
//     for (i=0;i<longest;i++) {
//         if (!alicesArray[j]) {
//             combinedArr.push(myArray[i])
//         }
//         else if (myArray[i] <= alicesArray[j]) {
//             combinedArr.push(myArray[i])
//         } else {
//             combinedArr.push(alicesArray[j])
//             j++
//             i--
//         }
//     }
//     return combinedArr
// }



console.log(mergeArrays(myArray, alicesArray));
// logs [1, 3, 4, 5, 6, 8, 10, 11, 12, 14, 15, 19]