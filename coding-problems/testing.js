/**
 * @param {string} s
 * @return {boolean}
 */
const s = '()[]{}'
function validParentheses(s) {
  const matches = ['()', '[]', '{}']
  console.log([...s])
  return [...s].reduce((prev, next) => {
    let i = 0
    console.log({p: prev[i], n: next[i], c: `${prev[i]}${next[i]}`})
    while (prev[i] && next[i] && matches.includes(`${prev[i]}${next[i]}`))
      i = i + 2
    return i === s.length - 1 ? true : false
  })
}

console.log(validParentheses(s))
