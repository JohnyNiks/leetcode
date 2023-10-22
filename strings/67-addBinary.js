// https://leetcode.com/problems/add-binary
// 67. Add Binary

// Description:
// Given two binary strings a and b, return their sum as a binary string.

// Questions:
// 1. What minimal length can have `a` and `b`?
// 2.
// 3.

// Examples:
// console.log(addBinary('11', '1')) // '100'
// console.log(addBinary('1010', '1011')) // '10101'
// console.log(addBinary('0', '10')) // '10'

// Rough solution: O(n) - time, O(n) - memory
// Find max length of a and b
// Loop with max length
// if sum of elements are 2 in loop then set 0 and save 1 for sum in next iteration

// Time log: 38m

/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
  let result = []
  let maxLength = Math.max(a.length, b.length)
  let extra = 0

  const s = a.padStart(maxLength, '0')
  const t = b.padStart(maxLength, '0')

  for (let i = maxLength - 1; i >= 0; i--) {
    const sum  = +s[i] + +t[i] + extra

    if (sum > 1) {
      result[i+1] = String(sum - 2)
      extra = 1
      if (i === 0) result[i] = '1'
      continue
    }

    result[i+1] = String(sum)
    extra = 0
  }

  return result.join('')
};

console.log(addBinary('11', '1')) // '100'
console.log(addBinary('1010', '1011')) // '10101'
console.log(addBinary('0', '10')) // '10'