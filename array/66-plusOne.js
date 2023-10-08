// Link https://leetcode.com/problems/plus-one
// 66. Plus One

// Description:
// You are given a large integer represented as an integer array digits, where each digits[i]
// is the ith digit of the integer. The digits are ordered from most significant to the least
// significant in left-to-right order. The large integer does not contain any leading 0's.
//
// Increment the large integer by one and return the resulting array of digits.

// Questions:
// 1. How much integer can we have?
// 2. What length of digits array do we have?

// Examples:
// plusOne([1,2,3]) => [1,2,4]
// plusOne([1,2,9]) => [1,3,0]
// plusOne([9,9,9]) => [1,0,0,0]
// plusOne([9]) => [1,0]

// Rough solution:
// The same with main solution

// Time log: 45m



/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
  let i = digits.length - 1
  if (digits[0] === 0) return [1]
  while (digits[i] === 9 && i >=0) {
    digits[i] = 0
    i--
  }

  if (digits[0] === 0) {
    digits.unshift(1)
  } else {
    digits[i]++
  }

  return digits
}

// Note: during last solvation I missed corner case [0]