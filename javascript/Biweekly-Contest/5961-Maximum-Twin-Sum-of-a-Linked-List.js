/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {number}
 */
var pairSum = function (head) {
  const list = [];
  let currentNode = head;
  while (currentNode) {
    list.push(currentNode?.val);
    currentNode = currentNode?.next;
  }
  const len = list.length;
  let max_sum = 0;
  for (let i = 0; i < len / 2; i++) {
    max_sum = Math.max(list[i] + list[len - 1 - i], max_sum);
  }
  return max_sum;
};
