# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next

class Solution:
    def reverseList(self, head: Optional[ListNode]) -> Optional[ListNode]:
        curr = head
        values = []

        while curr:
            values.append(curr.val)
            curr = curr.next

        
        head2 = ListNode(-1)
        curr = head2
        while values:
            val = values.pop()
            curr.next = ListNode(val)
            curr = curr.next

        return head2.next



        