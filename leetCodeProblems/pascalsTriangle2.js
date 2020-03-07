
// Given a non-negative index k where k <= 33, return the kth index row of the Pascal's triangle. Note that the row index starts from 0.
// To save time, you can pre size your array if you know how big it will be ahead of time.
// terate through the rows and then add the digits of the row before to get the new row

Better:

let getRow = function(rowIndex) {
    let row = [1];
    for (let i = 1; i <= rowIndex; ++i) {
        row[row.length] = 1;
        for (let j = i - 1; j >= 1; --j) {
            row[j] = row[j - 1] + row[j];
        }
    }
    return row;
};

Good:
let getRow = function(rowIndex) {
    let row = [1];
    for (let i = 0; i < rowIndex; ++i) {
        row[row.length] = row[i] * (rowIndex - i) / (i + 1);
    }
    return row;
};


Better for larger numbers:
let getRow = function(rowIndex) {
    let row = [1];
    if (rowIndex === 0) return row;
    for (let i = 0; i < Math.floor(rowIndex / 2); ++i) {
        row[row.length] = row[i] * (rowIndex - i) / (i + 1);
    }
    for (let i = Math.floor((rowIndex - 1) / 2); i >= 0; --i) {
        row.push(row[i]);
    }
    return row;
};

// var getItem = function(row, j) {
//     if (j < 0 || j >= row.length) {
//         return 0;
//     }
//     return row[j]
// }

// var getRow = function(rowIndex) {
//     var row = [1];
//     for (var i=0; i < rowIndex; ++i) {
//         var newRow = new Array(i+1);
//         for (var j = 0; j <=i +1; ++j) {
//             var digit = getItem(row, j-1) + getItem(row, j);
//             newRow[j] = digit;
//         }
//         row = newRow;
//     }
// }



