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

  set(index, val) {
    const found = this.get(index)
    if (found) {
      found.data = val
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
