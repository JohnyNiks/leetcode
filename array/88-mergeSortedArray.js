// https://leetcode.com/problems/merge-sorted-array/submissions/
// 88. Merge Sorted Array

// Description:
// You are given two integer arrays nums1 and nums2, sorted in non-decreasing order, and two
// integers m and n, representing the number of elements in nums1 and nums2 respectively.
//
// Merge nums1 and nums2 into a single array sorted in non-decreasing order.
//
// The final sorted array should not be returned by the function, but instead be stored
// inside the array nums1. To accommodate this, nums1 has a length of m + n, where the first m
// elements denote the elements that should be merged, and the last n elements are set to 0 and
// should be ignored. nums2 has a length of n.

// Questions:
// 1. Can arguments `nums1` and `nums2` be an empty array?
// 2. Can `m` and `n` be an 0?
// 3. Can `nums2` be filled with 0?

// Examples:
// merge([1,2,3,0,0,0,0], 3, [2,3,5,6], 4) // nums1 = [1,2,2,3,3,5,6]
// merge([1], 1, [], 0) // nums1 = [1]
// merge([0], 0, [1], 1 // nums1 = [1]

// Rough solution:
// var merge1 = function(nums1, m, nums2, n) {
//   for (let i = m, j = 0; j < n; i++, j++) {
//     nums1[i] = nums2[j]
//   }
//
//   nums1.sort((a,b) => a - b)
// }

// Time log: 1h 50m

/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
  let i = m - 1
  let j = n - 1
  let k = m + n - 1

  while (j >= 0) {
    if (i >= 0 && nums1[i] > nums2[j]) {
      nums1[k] = nums1[i]
      i--
    } else {
      nums1[k] = nums2[j]
      j--
    }
    k--
  }
}