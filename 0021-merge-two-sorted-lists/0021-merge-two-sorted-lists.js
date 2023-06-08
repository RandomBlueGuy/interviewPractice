/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
    const list1Arr = linkedListToArray(list1)
    const list2Arr = linkedListToArray(list2)
    const newArr = [].concat(list1Arr, list2Arr)
    if (newArr.length === 0) {
        return null;
    }
    newArr.sort((a,b) => a-b)
    return arrayToLinkedList(newArr);
};

function arrayToLinkedList(arr){
    const head = new ListNode(arr[0]);
    let current = head;

    for (let i = 1; i < arr.length; i++) {
        const newNode = new ListNode(arr[i]);
        current.next = newNode;
        current = newNode;
    }

    return head;
}


function linkedListToArray(head) {
  const arr = [];
  let current = head;

  while (current !== null) {
    arr.push(current.val);
    current = current.next;
  }

  return arr;
}
