/**
 * @param {number[]} digits
 * @return {number[]}
 */

const digits = [6, 1, 4, 5, 3, 9, 0, 1, 9, 5, 1, 8, 6, 7, 0, 5, 5, 4, 3]
// expected:   [6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,4]
function plusOne(digits) {
  for (let i = digits.length - 1; i >= 0; i--) {
    if (digits[i] !== 9) {
      digits[i]++
      return digits
    }

    digits[i] = 0

    if (i === 0) {
      digits.unshift(1)
      return digits
    }
  }
}

console.log(plusOne(digits))
