// https://leetcode-cn.com/explore/featured/card/bytedance/244/linked-list-and-tree/1025/
import { LinkedList } from './utils.js'

const l1 = new LinkedList()
;[1, 4, 5].forEach(i => l1.append(i))

const l2 = new LinkedList()
;[1, 3, 4].forEach(i => l2.append(i))

const l3 = new LinkedList()
;[2, 6].forEach(i => l3.append(i))

function mergeKLists (lists) {
  if (lists.length === 0) return null
  return lists.slice(1).reduce((r, l) => {
    return merge(r, l)
  }, lists[0])
}

function merge (l1, l2) {
  if (l1 === null) return l2
  if (l2 === null) return l1
  if (l1.val < l2.val) {
    l1.next = merge(l1.next, l2)
    return l1
  } else {
    l2.next = merge(l2.next, l1)
    return l2
  }
}

console.log(mergeKLists([]))
