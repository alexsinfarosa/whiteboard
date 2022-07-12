/**
 * @param {number[]} nums
 * @return {number}
 */
const nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4]
function removeDuplicates(nums) {
  let i = 0
  for (let j = 0; j < nums.length; j++) {
    // console.log({i, j})
    // console.log(`nums[${j}]: ${nums[j]} !== nums[${i}]: ${nums[i]}`)
    if (nums[j] !== nums[i]) {
      // console.log(`nums[${++i}]: ${nums[++i]} = nums[${j}]: ${nums[j]} `)
      nums[++i] = nums[j]
    }
  }
  return ++i
}

console.log(removeDuplicates(nums))
