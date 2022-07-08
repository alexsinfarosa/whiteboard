/**
 * @param {string} s
 * @return {boolean}
 */
const s = '()[]{}'
function validParentheses(s) {
  if (s.length % 2 !== 0) return false
  const stack = []

  for (const c of s) {
    switch (c) {
      case '(':
        stack.push(')')
        break
      case '[':
        stack.push(']')
        break
      case '{':
        stack.push('}')
        break
      default:
        if (c !== stack.pop()) return false
    }
  }
  return stack.length === 0
}

console.log(validParentheses(s))
