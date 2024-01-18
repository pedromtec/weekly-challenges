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
var isPalindrome = function (head) {
    let list = head
    let nums = []

    while (list.next !== null) {
        nums.push(list.val)

        list = list.next

        if (list.next === null) {
            nums.push(list.val)
        }
    }

    if (nums.length === 1) return true

    for (let i = 0; i < nums.length - 1; i++) {
        if (i === nums.length - 1 - i) return true

        if (nums[i] !== nums[nums.length - 1 - i]) {
            return false
        }
    }

    return true
};