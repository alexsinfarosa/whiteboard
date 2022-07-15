class Node {
  constructor(data) {
    this.data = data
    this.next = null
  }
}

class LinkedList {
  constructor() {
    this.head = null
    this.tail = null
    this.size = 0
  }

  // It removes the tail of the list
  pop() {
    if (this.head === null) return undefined
    let current = this.head
    let newTail = current
    while (current.next) {
      newTail = current
      current = current.next
    }
    this.tail = newTail
    this.tail.next = null
    this.size--
    if (this.size === 0) {
      this.head = null
      this.tail = null
    }
    return current
  }

  // It removes the head of the list
  shift() {
    if (this.head === null) return undefined
    let currentHead = this.head
    this.head = currentHead.next
    this.size--
    if (this.size === 0) this.tail = null
    return currentHead
  }

  // It assigns data params to the head of the list
  unshift(data) {
    const newNode = new Node(data)
    if (this.head === null) {
      this.head = newNode
      this.tail = this.head
    }
    newNode.next = this.head
    this.head = newNode
    this.size++
    return this
  }

  // It assigns the data params to the tail of the list
  push(data) {
    const newNode = new Node(data)
    if (this.head === null) {
      this.head = newNode
      this.tail = newNode
    }
    this.tail.next = newNode
    this.tail = newNode
    this.size++
    return this
  }

  // It returns the node at the specified index
  get(index) {
    let current = this.head
    let counter = 0
    if (index < 0 || index === this.size) return null

    while (counter !== index) {
      current = current.next
      counter++
    }
    return current
  }

  // It assigns the data params to the node at specified index in the list
  set(index, data) {
    const found = this.get(index)
    if (found) {
      found.data = data
      return true
    }
    return false
  }

  printData() {
    let current = this.head
    console.log(JSON.stringify(current))
    while (current) {
      console.log(`data:${current.data}`)
      current = current.next
    }
  }

  reverse() {
    let node = this.head
    this.head = this.tail
    this.tail = node
    let next
    let prev = null
    for (let i = 0; i < this.size; i++) {
      next = node.next
      node.next = prev
      prev = node
      node = next
    }
    return this
  }
}

const ll = new LinkedList()
console.log(ll)

ll.unshift(3)
console.log(ll)

ll.unshift(5)
console.log(ll)

ll.unshift(7)
console.log(ll)

ll.push(11)
console.log(ll)

ll.printData()

const node3 = ll.get(3)
console.log(node3)

ll.set(0, 77)
ll.printData()

ll.reverse()
console.log(ll)

ll.reverse()
console.log(ll)

ll.shift()
console.log(ll)

ll.pop()
console.log(ll)
