// https://leetcode.com/problems/valid-anagram
// 242. Valid Anagram

// Description:
// Given two strings s and t, return true if t is an anagram of s, and false otherwise.
//
// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase,
// typically using all the original letters exactly once.

// Questions:
// 1. Do the arguments contain only letters? Spaces, numbers, special symbols?
// 2. How much length do the strings have?
// 3. Can letter be in uppercase?

// Examples:
// console.log(isAnagram('moloko', 'kolomo')) // true
// console.log(isAnagram('moloko', 'sd')) // false
// console.log(isAnagram('moloko', '')) // false

// Rough solution: O(nlog(n)) - time, O(1) - memory
// 1. sort strings in place
// 2. compare letters in loop

// Time log: 15m

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) { // O(n) - time, O(1) - memory
  if (s.length !== t.length) return false

  const map = {}

  for (const letter of s) {
    if (map[letter]) {
      map[letter]++
    } else {
      map[letter] = 1
    }
  }

  for (const letter of t) {
    if (map[letter]) {
      --map[letter]

      if (map[letter] === 0) delete map[letter]
      continue
    }

    return false
  }

  return true
};

console.log(isAnagram('moloko', 'kolomo')) // true
console.log(isAnagram('moloko', 'sd')) // false
console.log(isAnagram('moloko', '')) // false