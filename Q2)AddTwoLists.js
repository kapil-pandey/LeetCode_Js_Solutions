/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/** @Question  https://leetcode.com/problems/add-two-numbers/
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  let l3, tail, carry = 0;
  while (l1 || l2 || carry) {
    let node = new ListNode()
    if (!l3) {
      l3 = node
      tail = node
    }
    else {
      tail.next = node
      tail = tail.next
    }
    let num1 = 0, num2 = 0
    if (l1) {
      num1 = l1.val
      l1 = l1.next
    }
    if (l2) {
      num2 = l2.val
      l2 = l2.next
    }
    tail.val = (+num1 + +num2 + carry) % 10
    carry = Math.floor((+num1 + +num2 + carry) / 10)
  }
  return l3
};