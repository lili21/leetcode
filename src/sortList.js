// https://leetcode-cn.com/explore/featured/card/bytedance/244/linked-list-and-tree/1040/
import { LinkedList } from './utils.js'
const l = new LinkedList()

;[-1, 5, 3, 4, 0].forEach(i => l.append(i))

function sortList (head) {
  if (head === null || head.next === null) return head
  const l = sortList(head.next)
  if (head.val <= l.val) {
    head.next = l
    return head
  } else {
    let prev = l
    let c = l.next
    while (c) {
      if (head.val <= c.val) {
        prev.next = head
        head.next = c
        break
      }
      prev = c
      c = c.next
    }
    if (c === null) {
      prev.next = head
      head.next = null
    }
    return l
  }
  // return l
}

console.log(sortList(l.head))
