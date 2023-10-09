// https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array
// 34. Find First and Last Position of Element in Sorted Array

// Description:
// Given an array of integers `nums` sorted in non-decreasing order,
// find the starting and ending position of a given `target` value.
//
// If target is not found in the array, return [-1, -1].
//
// You must write an algorithm with O(log n) runtime complexity.

// Questions:
// 1. Can `nums` be empty?
// 2. Starting and ending position is indices? Or number when start is 1?
// 3. What is max `length` of `nums`?

// Examples:
// console.log(searchRange([1,2,3,4], 3)) // [2,2]
// console.log(searchRange([], 3)) // [-1,-1]
// console.log(searchRange([1,2,3,4,4,4,5], 4)) // [3,5]

// Rough solution: O(n) - time, O(1) - memory
// /**
//  * @param {number[]} nums
//  * @param {number} target
//  * @return {number[]}
//  */
// var searchRange = function(nums, target) {
//   const start = nums.findIndex((num) => num === target)
//
//   if (!start) return [-1,-1]
//
//   let end = start
//
//   for (let i = start + 1; i < nums.length; i++) {
//     if (nums[i] === target) end = i
//   }
//
//   return [start, end]
// };
// console.log(searchRange([1,2,3,4], 3)) // [2,2]
// console.log(searchRange([], 3)) // [-1,-1]
// console.log(searchRange([1,2,3,4,4,4,5], 4)) // [3,5]

// Time log: 1h 20m

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
  if (nums.length === 0) return [-1,-1]

  let start = 0
  let end = nums.length - 1

  while (start <= end) {
    const mid = Math.floor((start+end)/2)
    const midNum = nums[mid]

    if (midNum === target) {
      let i = mid - 1
      let j = mid + 1

      while (nums[i] === target) {
        i--
      }

      while (nums[j] === target) {
        j++
      }

      return [i+1, j-1]
    }

    if (midNum > target) {
      end = mid - 1
      continue
    }

    start = mid + 1
  }

  return [-1,-1]
};

console.log(searchRange([1,2,3,4], 3)) // [2,2]
console.log(searchRange([], 3)) // [-1,-1]
console.log(searchRange([1,2,3,4,4,4,5], 4)) // [3,5]
console.log(searchRange([2,2,2,2,2], 2)) // [0,4]
console.log(searchRange([5,7,7,8,8,10], 6)) // [-1,-1]
console.log(searchRange([1], 1)) // [-1,-1]