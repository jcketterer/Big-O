/** Node: node for a singly linked list. */

class Node {
  constructor(val) {
    this.val = val
    this.next = null
  }
}

/** LinkedList: chained together nodes. */

class LinkedList {
  constructor(vals = []) {
    this.head = null
    this.tail = null
    this.length = 0

    for (let val of vals) this.push(val)
  }

  /** push(val): add new value to end of list. */

  push(val) {
    if (this.length > 0) {
      const newNode = new Node(val)
      this.tail.next = newNode
      this.tail = newNode
      this.length += 1
      return newNode
    } else {
      const newNode = new Node(val)
      this.head = newNode
      this.tail = newNode
      this.length += 1
      return newNode
    }
  }

  /** unshift(val): add new value to start of list. */

  unshift(val) {
    const newNode = new Node(val)

    if (!this.length) {
      this.tail = newNode
    } else {
      newNode.next = this.head
    }

    this.head = newNode

    this.length += 1

    return newNode
  }

  /** pop(): return & remove last item. */

  pop() {
    if (!this.length) {
      return null
    } else {
      let currentNode = this.head
      let secondToLastNode = this.head
      while (currentNode.next) {
        secondToLastNode = currentNode
        currentNode = currentNode.next
      }
      secondToLastNode.next = null

      this.tail = secondToLastNode

      this.length -= 1

      if (!this.length) {
        this.head = null
        this.tail = null
      }
      return currentNode.val
    }
  }

  /** shift(): return & remove first item. */

  shift() {
    if (!this.length) {
      return null
    } else {
      let nodeToRemove = this.head
      this.head = this.head.next
      this.length -= 1

      if (!this.length) {
        this.tail = null
      }

      return nodeToRemove.val
    }
  }

  /** getAt(idx): get val at idx. */

  _get(idx) {
    let currentNode = this.head
    let count = 0

    while (currentNode !== null && count != idx) {
      count++
      currentNode = currentNode.next
    }
    return currentNode
  }

  getAt(idx) {
    if (idx >= this.length || idx < 0) {
      throw new Error('Invalid index!')
    }

    return this._get(idx).val
  }

  /** setAt(idx, val): set val at idx to val */

  setAt(idx, val) {
    if (idx >= this.length || idx < 0) {
      throw new Error('Invalid index!')
    }
    let foundNode = this._get(idx)
    foundNode.val = val
  }

  /** insertAt(idx, val): add node w/val before idx. */

  insertAt(idx, val) {
    if (idx > this.length || idx < 0) {
      throw new Error('Invalid index!')
    }
    if (idx === this.length) return this.push(val)
    if (idx === 0) return this.unshift(val)

    let prev = this._get(idx - 1)
    let newNode = new Node(val)

    newNode.next = prev.next
    prev.next = newNode

    this.length += 1
  }

  /** removeAt(idx): return & remove item at idx, */

  removeAt(idx) {
    if (idx >= this.length || idx < 0) {
      throw new Error('Invalid index!')
    }
    //removing head node
    if (idx === 0) {
      let val = this.head.val
      this.head = this.head.next
      this.length -= 1
      if (this.length < 2) this.tail = this.head
      return val
    }

    let prev = this._get(idx - 1)

    //removing tail node
    if (idx === this.length - 1) {
      let val = prev.next.val
      prev.next = null
      this.tail = prev
      this.length -= 1
      return val
    }

    //removing val that is not at the head or the tail
    let val = prev.next.val
    prev.next = prev.next.next
    this.length -= 1
    return val
  }

  /** average(): return an average of all values in the list */

  average() {
    if (this.length === 0) return 0

    let total = 0
    let currentNode = this.head

    while (currentNode) {
      total += currentNode.val
      currentNode = currentNode.next
    }

    return total / this.length
  }
}

module.exports = LinkedList
