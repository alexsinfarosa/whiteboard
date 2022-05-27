/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

function twoSum(nums, target) {
  let map = {}

  for (let i = 0; i < nums.length; i++) {
    const n = target - nums[i]

    if (n in map) {
      return [map[n], i]
    }

    map[nums[i]] = i
  }

  return null
}

console.time('twoSum')
twoSum([2, 7, 11, 15], 9)
console.timeEnd('twoSum')

// twoSum([3, 2, 4], 6)
// twoSum([3, 3], 6)
