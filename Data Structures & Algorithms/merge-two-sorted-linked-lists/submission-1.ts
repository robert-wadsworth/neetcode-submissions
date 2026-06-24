/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} list1
     * @param {ListNode} list2
     * @return {ListNode}
     */
    mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode {
        const newHead = new ListNode(-1);
        let curr1 = list1;
        let curr2 = list2;
        let currNew = newHead;

        while(curr1 || curr2) {
            if (curr1 && curr2) {
                if (curr1.val <= curr2.val) {
                    currNew.next = curr1;
                    curr1 = curr1.next;
                } else {
                    currNew.next = curr2;
                    curr2 = curr2.next;
                }
            } else if (curr1) {
                currNew.next = curr1;
                curr1 = curr1.next;
            } else {
                currNew.next = curr2;
                curr2 = curr2.next;
            }
            currNew = currNew.next;
        }

        return newHead.next;
    }
}
