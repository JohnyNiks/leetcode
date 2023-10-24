// https://leetcode.com/problems/find-the-index-of-the-first-occurrence-in-a-string
// 28. Find the Index of the First Occurrence in a String

// Description:
// Given two strings needle and haystack, return the index of the first occurrence of needle
// in haystack, or -1 if needle is not part of haystack.

// Questions:
// 1. What min and max length do needle and haystack have?
// 2. Which symbols needle and haystack can have?

// Examples:
// console.log(strStr('sad', 'sosadbutsad')) // 2
// console.log(strStr('s', 'rangers')) // 6
// console.log(strStr('s', 'dad')) // -1

// Rough solution: O(n) - time, O(1) - memory
// var strStr = function(haystack, needle) {
//   return haystack.indexOf(needle)
// };

// Time log: 8m (25m new implementation without indexOf)

/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) { // O(n) - time, O(1) - memory
  if (haystack.length < needle.length) return - 1

  let curIndex = 0

  for (let i = 0; i < haystack.length; i++) {
    if (haystack[i] !== needle[i - curIndex]) {
      i = curIndex
      curIndex = i + 1
      continue
    }

    if (i - curIndex === needle.length - 1) return curIndex
  }

  return -1
};

console.log(strStr('sosadbutsad', 'sad' )) // 2
console.log(strStr( 'rangers', 's')) // 6
console.log(strStr('dad', 's')) // -1
console.log(strStr('s', 's')) // 0
console.log(strStr('aaa', 'aaa')) // 0
console.log(strStr('aaa', 'aaaa')) // -1
console.log(strStr('mississippi', 'issip')) // 4