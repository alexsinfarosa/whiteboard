class Animal {
  constructor(name, energy) {
    this.name = name
    this.energy = energy
  }

  eat(amount) {
    this.energy += amount
  }

  play(length) {
    this.energy -= length
  }
}

class Dog extends Animal {
  constructor(name, energy, breed) {
    super(name, energy)
    this.breed = breed
  }
  bark() {
    console.log(`${this.name} barks`)
    this.energy -= 1
  }
}
const chiapparo = new Dog('Tobia', 5, 'unkown')
console.log(chiapparo)
chiapparo.play(7)
console.log(chiapparo)
chiapparo.bark()

class Cat extends Animal {
  constructor(name, energy, declawed) {
    super(name, energy)
    this.declawed = declawed
  }
  meow() {
    console.log(`${this.name} meows`)
  }
}
const milo = new Cat('Milo', 8, true)
console.log(milo)
milo.eat(3)
console.log(milo)
milo.meow()

class User {
  constructor(name, email) {
    this.name = name
    this.email = email
    this.pets = []
  }
  adopt(animal) {
    this.pets.push(animal)
  }

  // eat()??
}
const alex = new User('Alex', 'xscanna@gmail.com')
alex.adopt(milo)
console.log(alex)
