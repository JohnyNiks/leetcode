// https://leetcode.com/problems/word-pattern
// 290. Word Pattern

// Description:
// Given a pattern and a string s, find if s follows the same pattern.
//
// Here follow means a full match, such that there is a bijection between a letter in pattern and
// a non-empty word in s.

// Questions:
// 1. Is 'pattern' contain only english lower-case letters?
// 2. Is 's' contain only english letters and spaces?
// 3. Can 'pattern' be empty?
// 4. Can 's' start with space?

// Examples:
// console.log(wordPattern('abba', 'dog cat cat dog')) // true
// console.log(wordPattern('abba', 'dog cat tiger dog')) // false
// console.log(wordPattern('a', 'd')) // true
// console.log(wordPattern('abba', 'dog dog dog dog')) // false

// Rough solution:
// Miss

// Time log: 35m (corner case)

/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function(pattern, s) {
  const arr = s.split(' ') // dog dog dog dog

  if (arr.length !== pattern.length) return false

  const hash = {} // a: dog

  for (let i = 0; i < pattern.length; i++) {
    const val = hash[pattern[i]] // undefined

    if (val) {
      if (val !== arr[i]) return false
    } else {
      if (Object.values(hash).includes(arr[i])) return false
      hash[pattern[i]] = arr[i]
    }
  }

  return true
};

console.log(wordPattern('abba', 'dog cat cat dog')) // true
console.log(wordPattern('abba', 'dog cat tiger dog')) // false
console.log(wordPattern('a', 'd')) // true
console.log(wordPattern('abba', 'dog dog dog dog')) // false