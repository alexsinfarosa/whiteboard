// Object literal
const obj = {}
console.log({obj})

// -----------------------------------------------------------------------------
// Object constructor
const obj2 = new Object()
obj2.name = 'ciccio'
console.log({obj2})

// -----------------------------------------------------------------------------
// Object.create ==> static method on the Object class.
// This method creates a new object, using an existing object as the prototype of the
// newly created object.
const pizza = {
  type: 'margherita',
}

const obj3 = Object.create(pizza)
obj3.size = 'medium' // "size" is a property set on obj3 only.
obj3.type = 'capricciosa' // "type" is a property inherited from the pizza object. It can be overwritten.
console.log({obj3})

// -----------------------------------------------------------------------------
// Add a property on an object using Object.defineProperty static method
// By default, properties added using Object.defineProperty() are not writable, not enumerable, and not configurable.
Object.defineProperty(obj3, 'cottura', {
  value: 'Ben cotta',
})

obj3.cottura = 'media' // by default writable is set to false
console.log({obj3})
