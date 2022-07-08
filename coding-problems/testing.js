/**
 * @param {number} x
 * @return {boolean}
 */
const x = 31213
function isPalindrome(x) {
  if (x < 0) return false
  const str = String(x)
  const strReversed = str.split('').reverse().join('')
  return strReversed === str
}

console.log(isPalindrome(x))
