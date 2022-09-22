/**
 * @param {number[]} nums
 * @return {number}
 */
function singleNumber(nums) {
  let obj = {}

  for (const n of nums) {
    if (n in obj) {
      obj[n]++
    } else {
      obj[n] = 1
    }
  }

  for (const [key, val] of Object.entries(obj)) {
    if (val === 1) return key
  }
}

const nums = [2, 2, 3, 3, 3, 4, 4, 1]
console.log(singleNumber(nums))
