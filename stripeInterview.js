

/* 
Your previous Plain Text content is preserved below:

For this interview, imagine that we are working with a simple database. Each row
associates column names (strings) with integer values (for example: 5, 0, -3,
and so on). Here's a table with three rows:
 
 a   b   c   d
---------------
 1   0   0   0
 0   2   3   0
 0   0   0   4
 
We can choose to represent a database table in JSON as an array of objects. For
example, the previous table could be written as:
 
[ {"a": 1, "b": 0, "c": 0, "d": 0},
  {"a": 0, "b": 2, "c": 3, "d": 0},
  {"a": 0, "b": 0, "c": 0, "d": 4} ]
 
(There is no need to use JSON in your solutions -- the notation is just used to
introduce and explain the problems.)
 
Write a function minByColumn that takes a database table (as above), along with a
column, and returns the row that contains the minimum value for the given column.
If a row doesn't have any value for the column, your function should behave as
though the value for that column was zero.
 
In addition to writing this function, you should use tests to demonstrate that it's
correct, either via an existing testing system or one you create.
 
## Examples
 
table1 = [
  {"a": 1},
  {"a": 2},
  {"a": 3}
]
minByColumn(table1, "a") returns {"a": 1}
 
table2 = [
  {"a": 1, "b": 2},
  {"a": 3, "b": 0}
]
minByColumn(table2, "b") returns {"a": 3, "b": 0}
 
table3 = [
  {"a": 1, "b": -2},
  {"a": 3}
]
minByColumn(table3, "b") returns {"a": 1, "b": -2}
 */

// ["x", "y"]

// let testData = [
//   {"a": 1, "b": 2},
//   {"a": 3}
// ]
// const minByColumn = function(arr,column) {
//   let rowMin
//   let rowMinIndex
  
//   if (arr[0].hasOwnProperty(column)) {
//     rowMin = arr[0][column]
//     rowMinIndex = 0
//   } else {
//     rowMin = 0
//     rowMinIndex = 0
//   }
  
//   for (let i=0; i<arr.length; i++) {
//     if (arr[i].hasOwnProperty(column)) {
//       if (arr[i][column] < rowMin) {
//         rowMin = arr[i][column]
//         rowMinIndex = i
//       }
      
//   } else {
//     if (0 < rowMin) {
//         rowMin = arr[i][column]
//         rowMinIndex = i
//         rowMinIndex = i
//       }    
//     }
//   }
//   return arr[rowMinIndex]
// }

const minByOrder = function(table, orders) {
  let rowMin
  let rowMinIndex
  let rowCounter
  
  for(let i=0; i<orders.length; i++) {
    
    if (arr[0].hasOwnProperty(orders[i])) {
    rowMin = arr[0][orders[i]]
    rowMinIndex = 0
  } else {
    rowMin = 0
    rowMinIndex = 0
  }
  
  for (let j=0; j<arr.length; j++) {
    if (arr[j].hasOwnProperty(orders[j])) {
      if (arr[j][orders[j]] < rowMin) {
        rowMin = arr[j][orders[j]]
        rowMinIndex = j
      } else if (arr[j][orders[j]] == rowMin) {
        rowCounter++
      }
      
  } else {
    if (0 < rowMin) {
        rowMin = arr[j][orders[j]]
        rowMinIndex = j
        rowMinIndex = j
      }    else if (0 == rowMin) {
        rowCounter++
      }
    }
  }
  if (counter == 1) return arr[rowMinIndex]
}




console.log(minByColumn(testData,"b"))
/*
In part 1 you may have noticed that it's possible for two rows to be "tied",
meaning that either would be an acceptable return value from minByColumn.
Consider:
 
table4 = [
  {"a": 1, "b": 2},
  {"a": 1, "b": 3},
  {"a": 1, "b": 4}
]
minByColumn(table4, "a") returns ???
 
Since all three rows have the same value for a, all three rows are acceptable
candidates to be returned by minByColumn(table, "a").
 
In these cases it would be nice if users could specify additional columns (e.g. "b")
to use as tie-breakers. A tie-breaker would only apply in cases where multiple rows
share the same minimum value. In `table4` above, the row {"a": 1, "b": 2} is
tied for the smallest "a" value (1) and of all the tied candidates, it has the
smallest "b" value (2). If two records had equal values for "a" and also for "b" then
another tie-breaker (e.g. "c") could be used. When records are tied with respect to
all columns, either record may be considered the minimum.
 
Write a function minByOrder that takes a database table and a list of columns, and
returns the row with the minimum column values using the tie-breaking logic above.
If only one column is provided, then the behavior of minByOrder is identical to
passing that column to minByColumn:
 
minByOrder(table, [column]) is equal to minByColumn(table, column)
 
As in Part 1, you should use tests to demonstrate that it's correct, either via an
existing testing system or one you create.
 
## Examples
 
table5 = [
  {"x": 1, "y": 3},
  {"x": 1, "y": 0}
]
minByOrder(table5, ["x", "y"]) returns {"x": 1, "y": 0}
 
table6 = [
  {"x": 2, "y": 3},
  {"x": 2, "y": 1},
  {"x": 1, "y": 10}
]
minByOrder(table6, ["x", "y"]) returns {"x": 1, "y": 10}
 
table7 = [
  {"x": 3, "y": -1, "z": 0},
  {"x": 1, "y": 10, "z": 1},
  {"x": 1, "y": 10, "z": 0}
]
minByOrder(table7, ["x", "y", "z"]) returns {"x": 1, "y": 10, "z": 0}
 
table8 = [
  {"x": 1, "y": 2, "z": 3},
  {"x": 2, "y": 2, "z": 2}
]
minByOrder(table8, ["x", "y", "z"]) returns {"x": 1, "y": 2, "z": 3}
*/