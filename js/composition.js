// The function is a verb, an ability, it explains what it does...

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
console.log({chiapparo})

function Cat(name, energy, breed) {
  let cat = {
    name,
    energy,
    breed,
  }

  return {...cat, ...meower(cat), ...eater(cat)}
}

const milo = new Cat('milo', 8, 'Siamese')
milo.meow()
console.log({milo})

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
alex.adopt(milo)
console.log(alex)
