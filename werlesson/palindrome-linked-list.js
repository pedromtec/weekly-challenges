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
function linkedListToArray(head) {
    const result = [];
    let current = head;

    while (current !== null) {
        result.push(current.val);
        current = current.next;
    }

    return result;
}

var isPalindrome = function(head) {
    return JSON.stringify(linkedListToArray(head)) === JSON.stringify(linkedListToArray(head).reverse())
};
