/**
 * @param {number[]} nums
 * @return {number[]}
 */
function findDisappearedNumbers(nums) {
  const map = new Map()
  nums.forEach((num, i) => map.set(num, i))
  console.log(map)

  const result = []
  for (let i = 1; i <= nums.length; i++) {
    if (!map.has(i)) result.push(i)
  }
  return result
}

const nums = [4, 3, 2, 7, 8, 2, 3, 1]
// const nums = [1, 1]

console.log(findDisappearedNumbers(nums))
