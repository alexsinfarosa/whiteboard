// A construction funciton that create an object with properties and methods. Then it returns the object.
function Animal(name, energy) {
  let animal = {}
  animal.name = name
  animal.energy = energy

  animal.eat = function (amount) {
    console.log(`${animal.name} eats`)
    animal.energy += amount
  }

  animal.play = function (length) {
    console.log(`${animal.name} plays`)
    animal.energy -= length
  }
  return animal
}

const milo = Animal('Milo', 11)
console.log(milo)
milo.play(2)
console.log(milo)
milo.eat(3)
console.log(milo)

// First optimization ----------------------------------------------------------
const animalMethods = {
  eat(amount) {
    console.log(`${this.name} eats`)
    this.energy += amount
  },

  play(length) {
    console.log(`${this.name} plays`)
    this.energy -= length
  },
}

function Animal1(name, energy) {
  let res = Object.create(animalMethods)
  res.name = name
  res.energy = energy

  return res
}

const chiapparo = Animal1('Tobia', 13)
console.log(chiapparo)
chiapparo.play(7)
console.log(chiapparo)
chiapparo.eat(3)

// Second optimization ---------------------------------------------------------
Animal2.prototype.eat = function (amount) {
  console.log(`${this.name} eats`)
  this.energy += amount
}
Animal2.prototype.play = function (length) {
  console.log(`${this.name} plays`)
  this.energy -= length
}

function Animal2(name, energy) {
  let res = Object.create(Animal2.prototype)
  res.name = name
  res.energy = energy

  return res
}

const margo = Animal2('Margo', 7)
console.log(margo)
margo.play(7)
console.log(margo)
margo.eat(2)
console.log(margo)

// Third optimization ----------------------------------------------------------
Animal3.prototype.eat = function (amount) {
  console.log(`${this.name} eats`)
  this.energy += amount
}
Animal3.prototype.play = function (length) {
  console.log(`${this.name} plays`)
  this.energy -= length
}

function Animal3(name, energy) {
  this.name = name
  this.energy = energy
}

const lucy = new Animal3('Lucy', 8)
console.log(lucy)

// Fourth optimization ---------------------------------------------------------
class Animal4 {
  constructor(name, energy) {
    this.name = name
    this.energy = energy
  }

  eat(amount) {
    console.log(`${this.name} eats`)
    this.energy += amount
  }

  play(length) {
    console.log(`${this.name} plays`)
    this.energy -= length
  }
}

const bach = new Animal4('Back', 3)
console.log(bach)
bach.eat(4)
console.log(bach)
bach.play(2)
console.log(bach)
