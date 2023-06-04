/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
    const newArr = [];
    let current = head;

    while(current !== null){
        newArr.push(current.val)
        current = current.next;
    }

    return newArr.join("") === newArr.reverse().join("");
}