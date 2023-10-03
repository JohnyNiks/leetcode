// https://leetcode.com/problems/remove-element
// 27. Remove Element

// Description:
// Given an integer array nums and an integer val, remove all occurrences of val in nums in-place.
// The order of the elements may be changed. Then return the number of elements in nums which are
// not equal to val.
//
// Consider the number of elements in nums which are not equal to val be k, to get accepted,
// you need to do the following things:
//
// - Change the array nums such that the first k elements of nums contain the elements which are not
// equal to val. The remaining elements of nums are not important as well as the size of nums.
// - Return k.

// Questions:
// 1. Can `nums` be empty array?
// 2. Can `nums` contain repeated values?
// 3. How much `nums` length?
// 4. Can `nums` contain negative numbers?

// Examples:
// removeElement([1,2,3], 3) // => [1,2,_] k = 2
// removeElement([], 3) // => [] k = 0
// removeElement([1,3,4,1,3], 3) // => [1,4,1,_,_] k = 3

// Rough solution: O(nlog(n))
// /**
//  * @param {number[]} nums
//  * @param {number} val
//  * @return {number}
//  */
// var removeElement = function(nums, val) {
//   if (nums.length === 0) return 0

//   let k = nums.length
//
//   for (let i = 0; i < nums.length; i++) {
//     if (nums[i] === val) {
//       nums[i] = -1
//       k--
//     }
//   }
//
//   nums.sort((a,b) => b - a)
//
//   return k
// };
// const nums = [1,3,4,1,3]
// console.log(removeElement(nums, 3)) // => [1,4,1,_,_] k = 3
// console.log(nums)

// Time log: 45m

/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
  if (nums.length === 0) return 0

  let k = nums.length

  for (let i = 0; i <= k; i++) {
    let current = nums[i]

    if (current === val) {
      nums[i] = nums[k-1]
      nums[k-1] = -1
      i--
      k--
    }
  }

  return k
};
const arr = [3,3,1,3,3,2,3,4]
console.log(removeElement(arr, 3)) // k = 3
console.log(arr) // [4,2,1, -1,...]