class Circle {
  #secret

  constructor(value) {
    this.#secret = value
  }

  get square() {
    return Math.pow(this.#secret, 2)
  }
}

const ring = new Circle(5)
// console.log(ring.square)

function CircleFn(value) {
  const secret = value

  function getSquare() {
    return Math.pow(secret, 2)
  }

  return {getSquare}
}

const cake = new CircleFn(3)
console.log(cake.getSquare())
