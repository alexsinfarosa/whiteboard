function add(num1: number, num2: number): number {
  return num1 + num2
}

console.log(add(1, 2))

let x: string[] = ['hello', 'world']
// variable declaration of array that contains strings and numbers
let y: (string | number)[] = [1, 'hello']

// tuples
let z: [string, number] = ['hello', 1]

// union types
let a: string | number = 1

// type alias - type alias is a way to name a type and assign it to a name that can be used later (custom type)
type ID = string
interface Person {
  id: ID
  name: string
  age: number
}

// enum type
enum Color {
  Red,
  Green,
  Blue,
} // enum type

// object type
let user: {
  name: string
  age: number
} = {
  name: 'John',
  age: 30,
}

// or
type User = {
  name: string
  age: number
}
let user2: User = {
  name: 'John',
  age: 30,
}

// type assertion
let someValue: any = 'this is a string'
let strLength: number = someValue as number
let anotherValue: unknown = 'this is another string'
let anotherStrLength: number = anotherValue as number
// or
let strLength2: number = <number>someValue
