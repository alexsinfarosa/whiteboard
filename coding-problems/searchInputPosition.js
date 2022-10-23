/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

function searchInputPosition(nums, target) {
  for (let i = 0; i < nums.length; i++) {
    const n = nums[i]
    console.log({i, n, target})
    if (target === n) return i
    if (target < n) return i + 1
    if (i === nums.length - 1 && target > n) return nums.length
  }
}

const nums = [1, 3, 5, 6]
const target = 7
console.log(searchInputPosition(nums, target))
