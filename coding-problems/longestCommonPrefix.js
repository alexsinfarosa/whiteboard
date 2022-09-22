/**
 * @param {string[]} strs
 * @return {string}
 */
const strs = ['flower', 'flow', 'flight']
function longestCommonPrefix(strs) {
  return strs.reduce((prev, next) => {
    let i = 0
    while (prev[i] && next[i] && prev[i] === next[i]) i++
    return prev.slice(0, i)
  })
}

console.log(longestCommonPrefix(strs))
