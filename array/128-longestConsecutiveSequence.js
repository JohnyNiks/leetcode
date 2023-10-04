// https://leetcode.com/problems/longest-consecutive-sequence
// 128. Longest Consecutive Sequence

// Description:
// Given an unsorted array of integers nums, return the length of the longest consecutive elements
// sequence.
//
// You must write an algorithm that runs in O(n) time.
// Questions:
// 1. Can `nums` be empty?
// 2. Can `nums` contain negative numbers?

// Examples:
// console.log(longestConsecutive([1, 100, 10, 12, 3, 4, 2])) // 4
// console.log(longestConsecutive([])) // 0
// console.log(longestConsecutive([10, 8, 3, 2, 0])) // 2

// Rough solution: O(nlog(n)) - time, O(1) - memory
// /**
//  * @param {number[]} nums
//  * @return {number}
//  */
// function longestConsecutive( nums) {
//   nums.sort((a,b) => a - b)
//
//   let sequenceLength = 0
//
//   for (let i = 0; i < nums.length; i++) {
//     if (i === 0) {
//       sequenceLength++
//       continue
//     }
//
//     if (nums[i] === nums[i-1] + 1) {
//       sequenceLength++
//     }
//   }
//
//   return sequenceLength
// };
//
// console.log(longestConsecutive([1, 100, 10, 12, 3, 4, 2])) // 4

// Time log: 45m (didn't solved)

/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
  // Solution after explanation and code examples
  let seq = 0
  let map = new Map()

  for (let i = 0; i < nums.length; i++) {
    const currNum = nums[i]
    if (!map.has(currNum)) {
      const left = map.has(currNum - 1) ? map.get(currNum - 1) : 0
      const right = map.has(currNum + 1) ? map.get(currNum + 1) : 0

      let sum = left + right + 1

      seq = Math.max(seq, sum)

      map.set(currNum - left, sum)
      map.set(currNum + right, sum)
    }
  }

  return seq
}
console.log(longestConsecutive([1, 100, 10, 12, 3, 4, 2])) // 4