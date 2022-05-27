/**
 * Write a function to find the longest common prefix string amongst an array of strings.
 * If there is no common prefix, return an empty string "".
 * Input: strs = ["flower","flow","flight"]
 * Output: "fl"
 *
 * Input: strs = ["dog","racecar","car"]
 * Output: ""
 * Explanation: There is no common prefix among the input strings.
 */

/**
 * @param {string[]} strs
 * @return {string}
 */
function longestCommonPrefix(strs) {
  if (strs.length === 1) return strs[0]
  const firstWord = strs[0]

  let common = ''
  for (let i = 0; i < firstWord.length; i++) {
    const l = firstWord[i]
    if (strs[i + 1] && strs[i + 1].includes(l)) {
      common += l
    }
  }

  return common
}

console.log(longestCommonPrefix(['flower', 'flow', 'flight']))
console.log(longestCommonPrefix(['dog', 'racecar', 'car']))
console.log(longestCommonPrefix(['racecar']))
