const STATE = {
  PENDING: 'pending',
  FULFILLED: 'fulfilled',
  REJECTED: 'rejected',
}

function MyPromise(executor) {
  let state = STATE.PENDING
  let value = null
  let handlers = []
  let catches = []

  function resolve(val) {
    if (state !== STATE.PENDING) return
    state = STATE.FULFILLED
    value = val

    handlers.forEach(h => h(value))
  }

  function reject(error) {
    if (state !== STATE.PENDING) return
    state = STATE.REJECTED
    value = error

    catches.forEach(c => c(value))
  }

  this.then = cb => {
    if (state === STATE.FULFILLED) {
      cb(value)
    } else {
      handlers.push(cb)
    }
  }

  this.catch = cb => {
    if (state === STATE.REJECTED) {
      cb(value)
    } else {
      catches.push(cb)
    }
  }

  executor(resolve, reject)
}

const nello = new MyPromise((resolve, reject) => {
  setTimeout(() => {
    reject('The promise rejected')
  }, 2000)
})

nello.catch(d => console.log(d))
