/**
 * Determines the length of the smallest possible string that can be concatenated
 * to itself many times and for which the input string is a substring of.
 *
 * @param {string} s - The input string which is a substring of the cyclic string.
 * @returns {number} The cyclic string length.
 */

const cyclicString = s => {
  let i = 1
  let j = 0
  let p = new Array(s.length + 1).fill(0)
  console.log(p)
  while (i < s.length) {
    if (s[i] === s[j]) {
      p[i + 1] = j + 1
      i++
      j++
    } else if (j > 0) {
      j = p[j]
    } else {
      i++
    }
  }
  return s.length - p[s.length]
}

const s1 = 'aadddaaa'
console.log(cyclicString(s1)) // should return 6
const s2 = 'ababa'
console.log(cyclicString(s2)) // should return 2
