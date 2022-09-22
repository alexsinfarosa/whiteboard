// eslint-disable-next-line no-undef
const promises = [
  Promise.resolve(2),
  Promise.resolve(3),
  Promise.reject('Ciccio'),
]

function promiseAll(promises) {
  let res = []

  let counter = 0
  // eslint-disable-next-line no-undef
  return new Promise((resolve, reject) => {
    promises.forEach((p, i) => {
      p.then(value => {
        res[i] = value
        counter++
        if (counter === promises.length) {
          resolve(res)
        }
      }).catch(() => reject('No se...'))
    })
  })
}

promiseAll(promises)
  .then(d => console.log(d))
  .catch(err => console.log(err))
  .finally(() => console.log('Maledetta Primavera'))

//------------------------------------------------------------------------------
function add(x, y) {
  return x + y
}

const five = add(2, 3)
console.log(five)

// function higherOrderFunction(x, callback) {
//   return callback(5, x)
// }
function addSeven(x, add) {
  return add(7, x)
}

const x1 = addSeven(10, add)
console.log(x1)

// promise status => pending, fulfilled, rejected

// create a Promise
// resolve and reject are callback functions
// if resolve is called, the status of the Promise will change to fullfilled
// if reject is called, the status of the Promise will change to rejected

// How to listed for when the status of a promise changes?
// When the status changes to fulfilled, the static method then will be called
// When the status changes to rejected, the static method catch will be called
// The methods then and catch return a Promise. This allows chaining
const promise = new Promise((resolve, reject) => {
  if (Math.random() > 0.5) {
    resolve('Resolved')
  } else {
    reject(new Error('Rejected'))
  }
})

promise
  .then(data => console.log(data))
  .catch(err => console.log(err))
  .finally(() => console.log('The end!!!'))

async function sub(x, y) {
  return x - y
}

sub(7, 3).then(result => console.log(result))
