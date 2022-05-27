/**
  Symbol       Value
  I             1
  V             5
  X             10
  L             50
  C             100
  D             500
  M             1000 
  
  I goes before V, X -> 4 and 9
  X goes before L and C -> 40 and 90
  C goues before D and M => 400 and 900
*/

/**
 * @param {string} s
 * @return {number}
 */

function romanToInt(s) {
  const symbols = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  }

  let value = 0
  for (let i = 0; i < s.length; i++) {
    const e = s[i]

    s[i + 1] && symbols[e] < symbols[s[i + 1]]
      ? (value -= symbols[e])
      : (value += symbols[e])
  }

  return value
}

console.log(romanToInt('III'))
console.log(romanToInt('IV'))
console.log(romanToInt('LVIII'))
console.log(romanToInt('MCMXCIV'))

console.time('romanToInt')
romanToInt('III')
console.timeEnd('romanToInt')
