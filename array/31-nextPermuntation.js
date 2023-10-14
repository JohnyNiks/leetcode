// https://leetcode.com/problems/next-permutation
// 31. Next Permutation

// Description:
// A permutation of an array of integers is an arrangement of its members into a sequence or linear order.
//
// For example, for arr = [1,2,3], the following are all the permutations of arr: [1,2,3], [1,3,2],
// [2, 1, 3], [2, 3, 1], [3,1,2], [3,2,1].
// The next permutation of an array of integers is the next lexicographically greater permutation of
// its integer. More formally, if all the permutations of the array are sorted in one container
// according to their lexicographical order, then the next permutation of that array is the permutation
// that follows it in the sorted container. If such arrangement is not possible, the array must be
// rearranged as the lowest possible order (i.e., sorted in ascending order).
//
// For example, the next permutation of arr = [1,2,3] is [1,3,2].
// Similarly, the next permutation of arr = [2,3,1] is [3,1,2].
// While the next permutation of arr = [3,2,1] is [1,2,3] because [3,2,1] does not have a
// lexicographical larger rearrangement.
// Given an array of integers nums, find the next permutation of nums.
//
// The replacement must be in place and use only constant extra memory.

// Questions:
// 1. Can `nums` be empty?
// 2. Can `nums` contain 0?
// 3. What is `nums` max length?
// 4. What is the maximum integer value?

// Examples:
// console.log(nextPermutation([1,2,3])) // [1,3,2]
// console.log(nextPermutation([3,2,1])) // [1,2,3]
// console.log(nextPermutation([1])) // [1]

// Rough solution:
// /**
//  * @param {number[]} nums
//  * @return {void} Do not return anything, modify nums in-place instead.
//  */
// var nextPermutation = function(nums) { // [1,2,3]
//   for (let i = nums.length - 2; i >=0; i--) {
//     if (nums[i] < nums[i+1]) {
//       let largeIndex
//       for (let j = nums.length - 1; j !== i ; j--) {
//         if (nums[j] > nums[i]) {
//           largeIndex = j
//           break
//         }
//       }
//
//       [nums[i], nums[largeIndex]] = [nums[largeIndex], nums[i]]
//
//       for (let j = 0; j < (nums.length - 1 - i) / 2; j++) {
//         nums[i + 1 + j] = nums[nums.length - 1 - j]
//       }
//       return
//     }
//   }
//
//   nums.reverse()
// };
// const f = [1,3,2]
// nextPermutation(f) // [1,3,2]
// console.log(f)
// Time log: 55m (didn't solve)