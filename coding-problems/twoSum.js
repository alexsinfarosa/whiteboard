/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

// array of integers
const nums = [0, 4, 3, 0]
const target = 0
function twoSum(nums, target) {
  let results = []
  for (let i = 0; i < nums.length; i++) {
    const firstIdx = nums[i]

    for (let j = i + 1; j < nums.length; j++) {
      const secondIdx = nums[j]

      if (firstIdx + secondIdx === target) {
        results.push(i, j)
      }
    }

    return results
  }
}

console.log(twoSum(nums, target))
