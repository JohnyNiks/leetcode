// https://leetcode.com/problems/3sum-closest
// 16. 3Sum Closest

// Description:
// Given an integer array nums of length n and an integer target,
// find three integers in nums such that the sum is closest to target.
//
// Return the sum of the three integers.
//
// You may assume that each input would have exactly one solution.

// Questions:
// 1. What is minimal length of `nums`? 3?
// 2. What are restrictions for `target`?
// 3. Can we have more than one solution?
// 4. Is `nums` sorted array?

// Examples:
// console.log(threeSumClosest([2,3,3], 5)) // 8
// console.log(threeSumClosest([2,3,3,0,-2], 5)) // 5

// Rough solution:
// using tree loops and saving intermediate result of closest for target O(n^3)

// Time log: 1h 20m (didn't solve by myself), 1h (didn't solve again), 55m (solve with help)

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
  nums.sort((a,b) => a - b)

  let closest = Infinity

  for (let i = 0; i < nums.length - 2; i++) {
    let left = i + 1
    let right = nums.length - 1

    while (left < right) {
      const sum = nums[left] + nums[i] + nums[right]

      if (sum === target) return sum

      if (Math.abs(sum - target) < Math.abs(closest - target)) {
        closest = sum
      }

      if (sum > target) {
        right--
        continue
      }

      left++
    }
  }

  return closest
};
console.log(threeSumClosest([2,3,3], 5)) // 8
console.log(threeSumClosest([2,3,3,0,-2], 5)) // 5
console.log(threeSumClosest([-1,2,1,-4], 1)) // 2