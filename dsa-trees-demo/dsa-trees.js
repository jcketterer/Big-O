class Node {
  constructor(val, children = []) {
    this.val = val
    this.children = children
  }
  //depth frist search
  findDepth(val) {
    const toVisitStack = [this]
    while (toVisitStack.length) {
      const current = toVisitStack.pop()
      console.log('VISITING', current.val)
      if (current.val === val) {
        return current
      }
      for (let child of current.children) {
        toVisitStack.push(child)
      }
    }
  }
  findBreath(val) {
    const toVisitQueue = [this]
    while (toVisitQueue.length) {
      const current = toVisitQueue.shift()
      console.log('VISITING', current.val)
      if (current.val === val) {
        return current
      }
      for (let child of current.children) {
        toVisitQueue.push(child)
      }
    }
  }
}

class Tree {
  constructor(root) {
    this.root = root
  }
  findInTreeDepth(val) {
    return this.root.findDepth(val)
  }
  findInTreeBreath(val) {
    return this.root.findBreath(val)
  }
}

// let amy = new Node('amy', [new Node('Bob'), new Node('Barb'), new Node('Barry')])

let htmlEl = new Node('html', [
  new Node('head', [new Node('title')]),
  new Node('body', [new Node('ul', [new Node('li'), new Node('li2')])]),
])

// let amy = new Node('Amy')
// let bob = new Node('Bob')
// let barb = new Node('Barb')
// let barry = new Node('Barry')

// amy.children.push(bob)
// amy.children.push(barb)
// amy.children.push(barry)

const newTree = new Tree(htmlEl)
// console.log(newTree.root)
console.log(newTree.findInTreeBreath('ul'))
console.log(newTree.findInTreeDepth('li'))
