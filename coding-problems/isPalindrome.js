/**
 * @param {number} x
 * @return {boolean}
 */
function isPalindrome(x) {
  const s = x.toString()
  if (s.length === 1) return true

  const first = s[0]
  const last = s[s.length - 1]
  if (first !== last) return false

  if (s.length === 2) return true

  const subString = s.substring(1, s.length - 1)
  return isPalindrome(subString)
}

console.log(isPalindrome(12321))
console.log(isPalindrome(-121))
console.log(isPalindrome(10))
console.log(isPalindrome(11))

console.time('isPalindrome')
isPalindrome(1234567654321)
console.timeEnd('isPalindrome')
