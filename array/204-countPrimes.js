// https://leetcode.com/problems/count-primes
// 204. Count Primes

// Description:
// Given an integer n, return the number of prime numbers that are strictly less than n.

// Questions:
// 1. What restrictions do `n` have?
// 2.
// 3.

// Examples:
// console.log(countPrimes(10)) // 4
// console.log(countPrimes(0)) // 0
// console.log(countPrimes(1)) // 0

// Rough solution: O(n) - time, O(1) - memory
// 1. Loop from 2 to n
// 2. Check if number divided on one of 2,3,5 or 7 hasn't a remainder
// 3. If yes it's not prime, and is prime otherwise

// Time log: 1h 40m (didn't solve)

/**
 * @param {number} n
 * @return {number}
 */
var countPrimes = function(n) {
  if (n <= 1) return 0

  let count = 0

  let notPrimes = [true, true] // [true, true, -, -, true, -, true, -, true]

  for (let i = 2; i < Math.sqrt(n); i++) {
    if (!notPrimes[i]) {
      for (let j = 2; i*j < n; j++) {
        notPrimes[i*j] = true
      }
    }
  }

  for (let i = 2; i < notPrimes.length; i++) {
    if (!notPrimes[i]) count++
  }

  return count
};

console.log(countPrimes(10000)) // 1229
console.log(countPrimes(0)) // 0
console.log(countPrimes(1)) // 0