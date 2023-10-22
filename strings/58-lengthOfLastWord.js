// https://leetcode.com/problems/length-of-last-word
// 58. Length of Last Word

// Description:
// Given a string s consisting of words and spaces, return the length of the last word in the string.
//
// A word is a maximal substring consisting of non-space characters only.

// Questions:
// 1. What length can `s` have?
// 2. What restrictions do `s` have? English letters only?
// 3. Can `s` contain special symbols?

// Examples:
// console.log(lengthOfLastWord('hello')) // 5
// console.log(lengthOfLastWord('s')) // 1
// console.log(lengthOfLastWord(' say sa')) // 2
// console.log(lengthOfLastWord(' say said     ')) // 4

// Rough solution: O(n) - time, O(n) - memory
// Split string in array of words
// get last element length

// Time log: 15m

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
  let length = 0

  for (let i = s.length - 1; i >= 0; i--) {
    if (length > 0 && s[i] === ' ') return length

    if (s[i] === ' ') continue

    length++
  }

  return length
};
console.log(lengthOfLastWord('hello')) // 5
console.log(lengthOfLastWord('s')) // 1
console.log(lengthOfLastWord(' say sa')) // 2
console.log(lengthOfLastWord(' say said     ')) // 4