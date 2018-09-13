/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

// Input: 1->2->4, 1->3->4
// Output: 1->1->2->3->4->4
var mergeTwoLists = function (l1, l2) {
    //     We are creating a new list using our two current lists.
    // IF we reached the end of list 1, return list 2
    if (l1 == null)
        return l2;
    //     If we reached the end of list 2, return list 1
    if (l2 == null)
        return l1;
    // IF there are still values in the list, check if the current value of l1 is less than the current value of l2

    if (l1.val < l2.val) {
        // IF it is, traverse through the first list
        l1.next = mergeTwoLists(l1.next, l2);
        return l1;
    } else {
        // IF not traverse through second list            
        l2.next = mergeTwoLists(l1, l2.next);
        return l2;
    }
};
