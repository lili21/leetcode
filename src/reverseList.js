// https://leetcode-cn.com/explore/featured/card/bytedance/244/linked-list-and-tree/1038/
import { ListNode } from './utils.js'
// 迭代
// function reverseList (head) {
//   let n = head
//   let prev = null
//   while (n) {
//     const temp = n.next
//     n.next = prev
//     prev = n
//     n = temp
//   }
//   return prev
// }

// 递归
function reverseList (head) {
  if (head === null || head.next === null) return head
  const l = reverseList(head.next)
  head.next.next = head
  head.next = null
  return l
}

const l = new ListNode(1)
l.next = new ListNode(2)
l.next.next = new ListNode(3)
l.next.next.next = new ListNode(4)
l.next.next.next.next = new ListNode(5)

console.log(reverseList(l).toString())
