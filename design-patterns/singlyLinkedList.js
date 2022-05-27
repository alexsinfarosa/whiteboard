class Node {
  constructor(value) {
    this.value = value
    this.next = null
  }
}
const node = new Node('A')
console.log(node)

class SinglyLinkedList {
  constructor() {
    this.head = null
    this.tail = null
    this.length = 0
  }

  push(val) {
    const node = new Node(val)
    if (this.head === null) {
      this.head = node
      this.tail = this.head
    } else {
      this.tail.next = node
      this.tail = node
    }
    this.length++
    return this
  }
}

const s = new SinglyLinkedList()
s.push('B')
console.log(s)
s.push('C')
console.log(s)
s.push('D')
console.log(s)
