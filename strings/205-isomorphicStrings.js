// https://leetcode.com/problems/isomorphic-strings
// 205. Isomorphic Strings

// Description:
// Given two strings s and t, determine if they are isomorphic.
//
// Two strings s and t are isomorphic if the characters in s can be replaced to get t.
//
// All occurrences of a character must be replaced with another character while preserving the
// order of characters. No two characters may map to the same character, but a character may map to itself.

// Questions:
// 1. What is the min/max length of `s` and `t`?
// 2. What symbols can `s` and `t` contain?

// Examples:
// console.log(isIsomorphic('add', 'egg')) // true
// console.log(isIsomorphic('get', 'dad')) // false
// console.log(isIsomorphic('e', 'f')) // true

// Rough solution:
// Miss

// Time log: 25m

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) { // O(n) - time, O(n) - memory
  const map = new Map()

  for (let i = 0; i < s.length; i++) {
    const sCode = s.charCodeAt(i)
    const tCode = t.charCodeAt(i)

    if (map.has(sCode)) {
      if (map.get(sCode) !== tCode) return false
    } else {
      if (Array.from(map.values()).includes(tCode)) return false
      map.set(sCode, tCode)
    }
  }

  return true
};

console.log(isIsomorphic('add', 'egg')) // true
console.log(isIsomorphic('get', 'dad')) // false
console.log(isIsomorphic('e', 'f')) // true