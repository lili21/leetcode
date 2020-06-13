// https://leetcode-cn.com/explore/featured/card/bytedance/244/linked-list-and-tree/1022/
import { ListNode, LinkedList } from './utils.js'

const l1 = new LinkedList()
;[1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1].forEach(i => l1.append(i))

const l2 = new LinkedList()
;[5, 6, 4].forEach(i => l2.append(i))

function addTwoNumbers (l1, l2) {
  const res = new ListNode(0)
  let node = res
  let c = 0

  while (l1 !== null || l2 !== null) {
    const v1 = l1 === null ? 0 : l1.val
    const v2 = l2 === null ? 0 : l2.val
    const sum = v1 + v2 + c

    c = Math.floor(sum / 10)
    const v = Math.floor(sum % 10)
    node.next = new ListNode(v)
    node = node.next
    if (l1 !== null) {
      l1 = l1.next
    }
    if (l2 !== null) {
      l2 = l2.next
    }
  }

  if (c) {
    node.next = new ListNode(c)
  }

  return res.next
}

console.log(addTwoNumbers(l1.head, l2.head).toString())
