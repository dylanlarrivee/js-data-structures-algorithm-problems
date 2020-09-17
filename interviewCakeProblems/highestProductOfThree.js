// Given an array of integers, find the highest product you can get from three of the integers.

// The input arrayOfInts will always have at least three integers.

// brute force would be to try all the combinations: O(n3) 

// Better would be to sort and then take the highest 3 numbers? O(nlgn)

// Best would be a greedy approach that keeps track of the highest product Of 3 so far as we walk through the array" O(n)

// If the array could contain 0's you would first need to search the array for the first 3 non zero numbers to start off the funciton variables

let arr = [1,2,3,4]
const arrayOfInts = [1, 10, -5, 1, -100];

const highestProductOf3 = function(arr) {
    let highestNum = Math.max(arr[0], arr[1])
    let lowestNum = Math.min(arr[0], arr[1])
    let highestProductOfTwo = arr[0] * arr[1]
    let lowestProductOfTwo = arr[0] * arr[1]
    let highestProductOfThree = arr[0] * arr[1] * arr[2]

    // need to calculate both the 

    for (let i=2;i<arr;i++) {
        let currentNum = arr[i]

        highestProductOfThree = Math.max(highestProductOfThree, highestProductOfTwo * currentNum, lowestProductOfTwo * currentNum)

        highestProductOfTwo = Math.max(highestProductOfTwo, currentNum * highestNum)

        lowestProductOfTwo = Math.min(lowestProductOfTwo, currentNum * lowestNum)

        highestNum = Math.max(highestNum, currentNum)

        lowestNum = Math.min(highestNum, currentNum)

    }

    return highestProductOfThree
}

console.log(highestProductOf3(arrayOfInts))