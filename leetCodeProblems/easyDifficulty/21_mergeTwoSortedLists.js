// 21. Merge Two Sorted Lists

// Merge two sorted linked lists and return it as a new list. 
// The new list should be made by splicing together the nodes of the first two lists.

// Example:

// Input: 1->2->4, 1->3->4
// Output: 1->1->2->3->4->4


//https://www.youtube.com/watch?v=orCMI6WjoIw

// Create a dummy node and then start adding the nodes from other list added in the order of lowsest it finds until one list runs out. Once that list runs out then you link the last node on that list to the next node on the remaining list. At the end return the dummyNode.next to skip that dummy value you have in place.

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
var mergeTwoLists = function(l1, l2) {
    let dummy = new ListNode(-1);
    let head = dummy;

    while (l1 !== null && l2 !== null) {
        if (l1.val <= l2.val) {
            dummy.next = l1;
            l1 = l1.next;
        } else {
            dummy.next = l2;
            l2 = l2.next;
        }
        dummy = dummy.next;
    }
    if (l1 !== null) {
        dummy.next = l1;
    } else {
        dummy.next = l2;
    }

    return head.next;
};

function ListNode(val) {
    this.val = val;
    this.next = null;
}

