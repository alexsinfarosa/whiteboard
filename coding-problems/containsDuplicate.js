/**
 * @param {number[]} nums
 * @return {boolean}
 */
function containsDuplicate(nums) {
  const obj = {}
  for (let i = 0; i < nums.length; i++) {
    obj[nums[i]] = obj[nums[i]] + 1 || 1
    if (obj[nums[i]] > 1) return true
  }
  return false
}

console.log(containsDuplicate([1, 2, 3, 0, 5, 4, 8, 6, 1, 5, 2]))
