# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, x):
#         self.val = x
#         self.next = None

class Solution:
    def addTwoNumbers(self, l1: ListNode, l2: ListNode) -> ListNode:

    # Solution 1 - O(n), space O(n + m)
        # save str variables for n1 and n2
        # iterate through 1st LL for 1st num
        # variable for cur node
        # traverse l1 to get 1st num - loop while current node is not none
            # add cur value to front of string
            # change cur node to be next
        # traverse l2 to get 2nd num
            # add cur value to front of string
            # change cur node to be next
        # coerce nums to int and add
        # create new LL and return
        
#         n1 = str(l1.val)
#         n2 = str(l2.val)
        
#         cur = l1
#         while cur.next != None: # iterate for l1
#             n1 = str(cur.next.val) + n1 # add next val to front of n1
#             cur = cur.next
        
#         cur = l2
#         while cur.next != None: # iterate for l2
#             n2 = str(cur.next.val) + n2 # add next val to front of n2
#             cur = cur.next
#         sum = int(n1) + int(n2) # coerce to int and add
#         sum = str(sum)
        
#         cur_node = ListNode(sum[0])
#         for i in range(len(sum)-1):
#             new_node = ListNode(sum[i+1])
#             new_node.next = cur_node
#             cur_node = new_node
#         return cur_node
    
    # Solution 2 - O(n)
    # traverse l1 and l2 at the same time, go to end of longer LL
        # add the two values and create a new node
        # if the values are greater than 10,
            # find the remainder and make that the value
            # subtract the remainder from the total to get the carry over amount
            # keep that value and add it to the next traversal
            
        l1_val = l1.val
        l2_val = l2.val
        # sum_val = l1_val + l2_val
        sum_val = 11
        print('sum:', sum_val)
        
        while l1.next != None or l2.next != None:
            
            if sum_val < 10:
                new_node = ListNode(sum_val)
            else:
                remainder = sum_val % 10
                print(remainder)
            
        return