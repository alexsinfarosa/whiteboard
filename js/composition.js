// class Animal {
//   constructor(name, energy) {
//     this.name = name
//     this.energy = energy
//   }

//   eat(amount) {
//     this.energy += amount
//   }

//   play(length) {
//     this.energy -= length
//   }
// }

// class Dog extends Animal {
//   constructor(name, energy, breed) {
//     super(name, energy)
//     this.breed = breed
//   }
//   bark() {
//     console.log(`${this.name} barks`)
//     this.energy -= 1
//   }
// }
// const chiapparo = new Dog('Tobia', 5, 'unkown')
// console.log(chiapparo)
// chiapparo.play(7)
// console.log(chiapparo)
// chiapparo.bark()

// class Cat extends Animal {
//   constructor(name, energy, declawed) {
//     super(name, energy)
//     this.declawed = declawed
//   }
//   meow() {
//     console.log(`${this.name} meows`)
//   }
// }
// const milo = new Cat('Milo', 8, true)
// console.log(milo)
// milo.eat(3)
// console.log(milo)
// milo.meow()

// later on...

// class User {
//   constructor(name, email) {
//     this.name = name
//     this.email = email
//     this.pets = []
//   }
//   adopt(animal) {
//     this.pets.push(animal)
//   }

//   // eat()??
// }
// const alex = new User('Alex', 'xscanna@gmail.com')
// alex.adopt(milo)
// console.log(alex)

// Composition -----------------------------------------------------------------
function eater(state) {
  return {
    eat: amount => {
      state.energy += amount
    },
  }
}

function player(state) {
  return {
    play: length => {
      state.energy -= length
    },
  }
}

function barker(state) {
  return {
    bark: () => {
      console.log(`${state.name} barks`)
      state.energy -= 1
    },
  }
}

function meower(state) {
  return {
    meow: () => {
      console.log(`${state.name} meows`)
      state.energy -= 1
    },
  }
}

function adopter(state) {
  return {
    adopt: animal => {
      state.pets.push(animal)
    },
  }
}

function Dog(name, energy, breed) {
  let dog = {
    name,
    energy,
    breed,
  }

  return Object.assign(dog, barker(dog), player(dog), eater(dog))
}

const chiapparo = new Dog('Tobia', 7, 'Unknow...')
console.log(chiapparo)

function User(name, email) {
  let user = {
    name,
    email,
    pets: [],
  }
  return Object.assign(user, adopter(user), player(user), eater(user))
}

const alex = new User('Alex', 'xscanna@gmail.com')
console.log(alex)
alex.adopt(chiapparo)
console.log(alex)
chiapparo.play(5)
console.log(alex)
