const dateTimeOptions = {
  hour: 'numeric',
  minute: 'numeric',
  second: 'numeric',
}

function TableOrder() {
  return {
    table: null,
    setTable(d) {
      this.table = d
    },
    people: null,
    setPeople(d) {
      this.people = d
    },
    worker: null,
    setWorker(d) {
      this.worker = d
    },
    note: '',
    setNote(d) {
      this.note = d
    },
  }
}

function Order() {
  const order = {
    timestamp: new Intl.DateTimeFormat('en-US', dateTimeOptions).format(
      new Date(),
    ),
    items: [],
  }

  return {...order, ...TableOrder()}
}

const order = new Order()
order.setWorker('Patrizio')
order.setTable(56)
order.setPeople(4)
order.setNote("It's a birthday")
console.log(order)

const order2 = new Order()
order2.setWorker('Vito')
order2.setTable(99)
order2.setPeople(8)
order2.setNote('Corporate dinner')
console.log(order2)

function pizzaSizes(pizza) {
  return {
    small() {
      console.log(`A small ${pizza.name} pizza`)
    },
    medium() {
      console.log(`A medium ${pizza.name} pizza`)
    },
    large() {
      console.log(`A large ${pizza.name} pizza`)
    },
  }
}

function pizzaModifier(pizza) {
  return {
    add(d) {
      pizza.added.push(d)
    },
    remove(d) {
      pizza.removed.push(d)
    },
  }
}

function destination() {
  const options = {
    hour: 'numeric',
    minute: 'numeric',
  }

  return {
    table(num) {
      console.log(
        `Table: ${num} at ${new Intl.DateTimeFormat('en-US', options).format(
          new Date(),
        )}`,
      )
    },
    delivery() {
      console.log(`To go...`)
    },
    pickup() {
      console.log(`Pick up`)
    },
  }
}

function Pizza(name) {
  const pizza = {
    name,
    added: [],
    removed: [],
    log() {
      const newToppings = pizza.added
      if (newToppings.length !== 0) {
        console.log(`Add: ${newToppings.join(', ')}`)
      }

      const removedToppings = pizza.removed
      if (removedToppings.length !== 0) {
        console.log(`Remove: ${removedToppings.join(', ')}`)
      }
    },
  }

  return {
    ...pizza,
    ...pizzaSizes(pizza),
    ...pizzaModifier(pizza),
    ...destination(),
  }
}
const marinara = new Pizza('Marinara')
marinara.table(14)
marinara.small()
marinara.add('olives')
marinara.add('peperoni')
marinara.remove('oregano')
console.log(marinara.log())
