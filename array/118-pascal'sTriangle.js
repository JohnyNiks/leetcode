// https://leetcode.com/problems/pascals-triangle
// 118. Pascal's Triangle

// Description:
// Given an integer `numRows`, return the first `numRows` of Pascal's triangle.
//
// In Pascal's triangle, each number is the sum of the two numbers directly above it as shown:
//     1
//    1 1
//   1 2 1
//  1 3 3 1
// 1 4 6 4 1

// Questions:
// 1. Can `numRows` be less than 1? 0 or negative number?

// Examples:
// console.log(generate(1)) // [[1]]
// console.log(generate(5)) // [[1], [1,1], [1,2,1], [1,3,3,1], [1,4,6,4,1]]

// Rough solution:
// /**
//  * @param {number} numRows
//  * @return {number[][]}
//  */
// var generate = function(numRows) {
// };
//
// console.log(generate(5)) // [[1], [1,1], [1,2,1], [1,3,3,1], [1,4,6,4,1]]

// Time log: 50m (didn't solve) 40m (solved, but need attention)

/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
  if (numRows === 1) return [[1]]

  let matrix = generate(numRows - 1)
  let lastArray = matrix.at(-1)
  let array = [1]

  for (let i = 1; i < lastArray.length; i++) {
    const num = lastArray[i-1] + lastArray[i]
    array.push(num)
  }

  array.push(1)
  matrix.push(array)

  return matrix
};

console.log(generate(5)) // [[1], [1,1], [1,2,1], [1,3,3,1], [1,4,6,4,1]]