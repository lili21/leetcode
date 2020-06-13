export function copy (target) {
  return JSON.parse(JSON.stringify(target))
}

export class ListNode {
  constructor (val) {
    this.val = val
    this.next = null
  }

  toString () {
    let res = this.val.toString()
    if (this.next) {
      res = res + ',' + this.next.toString()
    }
    return res
  }
}

export class LinkedList {
  constructor () {
    this.head = null
    this.tail = null
  }

  append (v) {
    const n = new ListNode(v)
    if (this.head) {
      this.tail.next = n
    } else {
      this.head = n
    }
    this.tail = n
    return this
  }
}

export class TreeNode {
  constructor (v) {
    this.val = v
    this.left = this.right = null
  }
}
