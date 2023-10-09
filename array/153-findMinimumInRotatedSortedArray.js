// https://leetcode.com/problems/find-minimum-in-rotated-sorted-array
// 153. Find Minimum in Rotated Sorted Array

// Description:
// Suppose an array of length n sorted in ascending order is rotated between 1 and n times. For example, the array nums = [0,1,2,4,5,6,7] might become:
//
// [4,5,6,7,0,1,2] if it was rotated 4 times.
// [0,1,2,4,5,6,7] if it was rotated 7 times.
// Notice that rotating an array [a[0], a[1], a[2], ..., a[n-1]] 1 time results in the array [a[n-1], a[0], a[1], a[2], ..., a[n-2]].
//
// Given the sorted rotated array nums of unique elements, return the minimum element of this array.
//
// You must write an algorithm that runs in O(log n) time.

// Questions:
// 1. Can `nums` contain  negative numbers?
// 2. Can `nums` be empty?
// 3.

// Examples:
// console.log(findMin([3,4,5,0,1,2])) // 0
// console.log(findMin([1])) // 1

// Rough solution: O(nlog(n)) - time, O(1) - memory
// /**
//  * @param {number[]} nums
//  * @return {number}
//  */
// var findMin = function(nums) {
//   nums.sort((a,b) => a - b)
//   return nums[0]
// };
// console.log(findMin([3,4,5,0,1,2])) // 0
// console.log(findMin([1])) // 1
// console.log(findMin([11,13,15,17])) // 11

// Time log: 1h 30m (didn't solve)

/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {

};

console.log(findMin([3,4,5,0,1,2])) // 0
console.log(findMin([3,4,5,1,2])) // 1
console.log(findMin([1])) // 1
console.log(findMin([11,13,15,17])) // 11
console.log(findMin([1,2,3,4])) // 1
console.log(findMin([2,-1,0,1])) // -1