// https://leetcode.com/problems/largest-number
// 179. Largest Number

// Description:
// Given a list of non-negative integers nums, arrange them such that they form the largest number and return it.
//
// Since the result may be very large, so you need to return a string instead of an integer.

// Questions:
// 1. Can `nums` be empty?
// 2. Can integer in `nums` be 0?

// Examples:
// console.log(largestNumber([10,2])) // '210'
// console.log(largestNumber([3,30,34,5,9])) // '9534330'

// Rough solution:
// /**
//  * @param {number[]} nums
//  * @return {string}
//  */
// var largestNumber = function(nums) {
//   nums.sort((a,b) => `${b}${a}`- `${a}${b}` )
//
//   if (nums[0] === 0) return '0'
//   return nums.join('')
// };
// console.log(largestNumber([10,2])) // '210'
// console.log(largestNumber([3,30,34,5,9])) // '9534330'
// console.log(largestNumber([])) // ''
// console.log(largestNumber([1,30])) // '301'
// console.log(largestNumber([0,0])) // '0'

// Time log: 40m (didn't solve)

/**
 * @param {number[]} nums
 * @return {string}
 */
var largestNumber = function(nums) {

};