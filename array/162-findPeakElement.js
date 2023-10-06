// https://leetcode.com/problems/find-peak-element
// 162. Find Peak Element

// Description:
// A peak element is an element that is strictly greater than its neighbors.
//
// Given a 0-indexed integer array nums, find a peak element, and return its index.
// If the array contains multiple peaks, return the index to any of the peaks.
//
// You may imagine that nums[-1] = nums[n] = -∞. In other words, an element is always considered
// to be strictly greater than a neighbor that is outside the array.
//
// You must write an algorithm that runs in O(log n) time.

// Questions:
// 1. Can `nums` be empty array?
// 2. Can `nums` contain negative numbers?
// 3. What is max/min array length?
// 4. Can `nums` contain repeated integers one by one?

// Examples:
// console.log(findPeakElement([1])) // 0
// console.log(findPeakElement([1,-1,3,2])) // 2

// Rough solution: O(n) - time, O(1) - memory
// /**
//  * @param {number[]} nums
//  * @return {number}
//  */
// var findPeakElement = function(nums) {
//   let result = 0
//   let max = nums[0]
//
//   for (let i = 1; i < nums.length; i++) {
//     if (nums[i] > max) {
//       result = i
//       max = nums[i]
//     }
//   }
//   return result
// };
// console.log(findPeakElement([1])) // 0
// console.log(findPeakElement([1,-1,3,2])) // 2

// Time log: 1h (solve after read solution explanation)

/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function(nums) {
  let left = 0
  let right = nums.length - 1

  while (left <= right) {
    const mid = Math.floor((left + right) / 2)

    const cur = nums[mid]
    const prev = nums[mid - 1] ?? -Infinity
    const next = nums[mid + 1] ?? -Infinity

    if (cur > prev && cur > next) return mid

    if (cur < prev) {
      right = mid - 1
      continue
    }

    if (cur < next) {
      left = mid + 1
    }
  }

  return -1
};

console.log(findPeakElement([1])) // 0
console.log(findPeakElement([1,-1,3,2])) // 2
console.log(findPeakElement([1,2,3,1])) // 2
