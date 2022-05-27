'use strict'

const counts = [
  ['900, google.com'],
  ['60, yayoo.com'],
  ['30, email.yahoo.com'],
  ['10, com.com'],
  ['2, rom.google.com'],
]

function x(arr) {
  const [n, s] = arr[0].split(',')
  const w = s.split('.')
  const filtered = w.filter(d => d[0] !== ' ')
  return [n, s.slice(1), ...filtered]
}

function Counter(counts) {
  let res = {}

  counts.forEach(arr => {
    let aa = x(arr)
    const m = Number(aa[0])
    const words = aa.slice(1)
    words.forEach(word => {
      if (res[word]) {
        res[word] += m
      } else {
        res[word] = m
      }
    })
  })
  return res
}

console.log(Counter(counts))

function User(name, title) {
  this.name = name
  this.title = title

  this.greet = function () {
    console.log(`${this.name} and ${this.title}`)
  }
}

const a = new User('Anna', 'Karenina')
console.log(a)
const bGreet = a.greet
bGreet()
