/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var middleNode = function(head) {
    let current = head;
    const arr =[];

    while(current !== null){
        arr.push(current.val);
        current = current.next
    }

    let newArr = arr.slice(arr.length % 2 === 0 ? (arr.length / 2) : (arr.length / 2) - 0.5 );
    if (newArr.length === 0) {
        return null;
    }

    let newHead = new ListNode(newArr[0]);
    let currentNode = newHead;

    for (let i = 1; i < newArr.length; i++) {
        let newNode = new ListNode(newArr[i]);
        currentNode.next = newNode;
        currentNode = newNode;
    }

    return newHead;
};