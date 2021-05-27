/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

function addTwoNumbers(l1, l2) {
  const _ = l1.length >= l2.length ? l1 : l2;
  let addOne = false;
  let result = root = {};

  for (let i = 0; i <= _.length; i++) {
    let x = l1[i] ? l1[i] : 0;
    let y = l2[i] ? l2[i] : 0;
    let count = x + y;

    if (addOne) {
      count = count + 1;
      addOne = false;
    }
    if (count >= 10) {
      addOne = true;
      count = count - 10;
    }

    result.next = new ListNode(count);
    result = result.next;
  }

  return root.next;
}

console.log(addTwoNumbers([2,4,3],[5,6,4])); // Output: [7,0,8]
//console.log(addTwoNumbers([0],[0])); Output: [0]
//console.log(addTwoNumbers([9,9,9,9,9,9,9],[9,9,9,9])); Output: [8,9,9,9,0,0,0,1]