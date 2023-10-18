// https://leetcode.com/problems/group-anagrams
// 49. Group Anagrams

// Description:
// Given an array of strings strs, group the anagrams together. You can return the answer in any order.
//
// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase,
// typically using all the original letters exactly once.

// Questions:
// 1. Do strings inside `strs` contain only English letters?
// 2. Can `strs` be empty?
// 3. Can strings inside `strs` be empty string?
// 4. Do all strings have the same length?

// Examples:
// console.log(groupAnagrams([''])) // [['']]
// console.log(groupAnagrams(['a', 'ba'])) // [['a'], ['ba']]
// console.log(groupAnagrams(['eat', 'tan', 'tea', 'nat', 'ant'])) // [['eat', 'tea'], ['tan', 'nat', 'ant']]

// Rough solution: O(n*klog(k)) - time, O(n) - memory
// 1. Variable to save sorted strings and variable to save returned result
// 2. Loop for `strs`
// 3. Sort every string in loop and add in new variable
// 4. New loop with push in `result` indices of the same strings
// 5. New loop to replace insides on strings from `strs`

// Time log: 45m

/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
  let arr = []

  for (let i = 0; i < strs.length; i++) {
    arr.push(strs[i].split('').sort().join(''))
  }

  let map = new Map()

  for (let i = 0; i < arr.length; i++) {
    if (map.has(arr[i])) {
      map.get(arr[i]).push(strs[i])
    } else {
      map.set(arr[i], [strs[i]])
    }
  }

  return Array.from(map.values())
};

console.log(groupAnagrams([''])) // [['']]
console.log(groupAnagrams(['a', 'ba'])) // [['a'], ['ba']]
console.log(groupAnagrams(['eat', 'tan', 'tea', 'nat', 'ant'])) // [['eat', 'tea'], ['tan', 'nat', 'ant']]
