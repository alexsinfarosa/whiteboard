/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

function searchInputPosition(nums, target) {
  for (let i = 0; i < nums.length; i++) {
    const n = nums[i]
    if (target === n) return i
    if (target < n) return i + 1
    if (i === nums.length - 1 && target > n) return nums.length
  }
}

const nums = [1, 3, 5, 6]
const target = 7
console.log(searchInputPosition(nums, target))

function binarySearch(array, target, start, end) {
  if (start > end) return start

  const midPoint = Math.floor((start + end) / 2)

  if (array[midPoint] === target) return midPoint

  //search the left side
  if (array[midPoint] > target)
    return binarySearch(array, target, start, midPoint - 1)
  // search the right side
  if (array[midPoint] < target)
    return binarySearch(array, target, midPoint + 1, end)
}

const nums = [1, 3, 5, 6]
const target = 7
console.log(binarySearch(nums, target, 0, nums.length - 1))
