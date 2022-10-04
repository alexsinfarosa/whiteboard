const person = {
  name: 'Kaiser Sosa',
  greet: function (param) {
    console.log(`${this.name} says ${param}!`)
  },
}
person.greet('hello')

// *call*
// change what *this* refers to using *call*. The function is executed immediately.
// ---------------{------this--------}
person.greet.call({name: 'John Rambo'}, 'Yoo')

// *apply*
// change what *this* refers to using *apply*. The function is executed immediately.
// ----------------{------this-----------}
person.greet.apply({name: 'Martin Reeves'}, ['never mind'])

// *bind*
// change what *this* refers to using *bind*. It returns a function.
// --------------------------------------{------this-------------}
const monicaGreeting = person.greet.bind({name: 'Monica Bellucci'}, 'hi')
monicaGreeting()
