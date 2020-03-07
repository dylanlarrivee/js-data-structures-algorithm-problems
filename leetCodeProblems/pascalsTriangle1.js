// Given a non-negative integer numRows, generate the first numRows of Pascal's triangle.

// In Pascal's triangle, each number is the sum of the two numbers directly above it.Given a non-negative integer numRows, generate the first numRows of Pascal's triangle.

// In Pascal's triangle, each number is the sum of the two numbers directly above it.

/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    // Array to hold everything
    let pascalArray = new Array(numRows);
        for(let i=0; i<numRows; i++) {
            // Array for each row
            let rowArray = new Array(i+1);
            rowArray[0] = 1;
            rowArray[rowArray.length-1] = 1;
            // Creating the row
            for(let j=1; j<rowArray.length -1; j++) {
                rowArray[j] = pascalArray[i-1][j] + pascalArray[i-1][j-1];
            }
            // Put the row into the rowArray
            pascalArray[i] = rowArray;
        }
        return pascalArray
};