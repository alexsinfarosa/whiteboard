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
