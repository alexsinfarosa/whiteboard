// An arrow function is a shorter syntax for a function expression and does not have its own this, arguments. These functions are best suited for non-method functions, and they cannot be used as constructors.

const fn1 = () => {
  console.log(this)
}

// fn1()

function fn2() {
  console.log(this)
  const secret = '2134us03'

  function regFunction() {
    console.log(this)
    console.log(secret)
  }

  const arrowFunction = () => {
    console.log(this)
  }

  return {
    regFunction,
    arrowFunction,
  }
}

fn2().regFunction()
