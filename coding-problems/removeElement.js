/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
const nums = [0, 1, 2, 2, 3, 0, 4, 2]
// const res = [0, 1, '_', '_', 3, 0, 4, '_']
// const res2 = [0, 1, 3, 0, 4, '_', '_', '_']
const val = 2

function removeElement(nums, val) {
  let zeroStartIdx = 0
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== val) {
      nums[zeroStartIdx] = nums[i]
      zeroStartIdx++
    }
  }
  return zeroStartIdx
}

console.log(removeElement(nums, val))
