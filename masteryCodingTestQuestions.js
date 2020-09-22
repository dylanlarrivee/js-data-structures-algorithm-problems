
/*
 * Complete the 'getMaxUnits' function below.
 *
 * The function is expected to return a LONG_INTEGER.
 * The function accepts following parameters:
 *  1. LONG_INTEGER_ARRAY boxes
 *  2. LONG_INTEGER_ARRAY unitsPerBox
 *  3. LONG_INTEGER truckSize
 */

 
// Given an array of boxes, an array of units per box and then truck size of total boxes that can be carries, find the max number of units that can be transported.

let boxes = [1,2,3]
let unitsPerBox = [2,2,2]
let truckSize = 8

function getMaxUnits(boxes, unitsPerBox, truckSize) {
    // Write your code here
    let map = new Map()
    let boxesUsed = 0;
    let boxesRemaining = truckSize - boxesUsed;
    let maxNumberUnits = 0;
    for (let i=0; i<boxes.length; i++) {
        if (map.has(unitsPerBox[i])) {
            let currUnitPerBoxCount = map.get(unitsPerBox[i])
            map.set(unitsPerBox[i], currUnitPerBoxCount + boxes[i])
        } else {
            map.set(unitsPerBox[i], boxes[i])
        }
    }
    unitsPerBox.sort((a,b) => b-a);
    for (let j=0;j<unitsPerBox.length;j++) {
        let currQuantity = map.get(unitsPerBox[j])
        if (currQuantity >= boxesRemaining) {
            maxNumberUnits = maxNumberUnits + (boxesRemaining * unitsPerBox[j])
            break
        } else {
            maxNumberUnits = maxNumberUnits + (currQuantity * unitsPerBox[j])
            boxesUsed = boxesUsed + currQuantity
            boxesRemaining = truckSize - boxesUsed
            map.set(unitsPerBox[j],0)
        }
    }
    return maxNumberUnits
}

console.log(getMaxUnits(boxes, unitsPerBox, truckSize))