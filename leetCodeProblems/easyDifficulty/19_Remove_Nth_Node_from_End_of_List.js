// 19. Remove Nth Node From End of List
// Medium

// Given a linked list, remove the n-th node from the end of list and return its head.

// Example:

// Given linked list: 1->2->3->4->5, and n = 2.

// After removing the second node from the end, the linked list becomes 1->2->3->5.
// Note:

// Given n will always be valid.

// Follow up:

// Could you do this in one pass?


/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    if (head.next == null) {
        head.val = null
        return head.val
    }
    
    let fastNode = head
    let slowNode = head
    
    let i = 0 
    
    while (fastNode) {
        fastNode = fastNode.next
        if (i>n-1) {
            slowNode = slowNode.next
        }
        
        i++
//         if (fastNode.next == null) {
//             slowNode = slowNode.next
//             slowNode.val = slowNode.next.val
//             let tempNext = slowNode.next.next
//             slowNode.next.next = null
//             slowNode.next = tempNext
            
//             //slowNode.next.next = null
//         }
        
    }
    slowNode.val = slowNode.next.val
    let tempNext = slowNode.next.next
    slowNode.next.next = null
    slowNode.next = tempNext
    return head
    
    
//     // Find how many nodes are in the list
//     let currentNode = head
//     let counter = 1
//     while (currentNode.next) {
//         currentNode = currentNode.next
//         counter++
//     }
//     console.log("counter", counter)
//     if (counter ===1) {
//         head.val = null
//         return head.val
//     }
//     let newCurrentNode = head
//     let placeToRemove = counter -n
    
//     let i = 0
//     while (i<placeToRemove) {
//         if (i===placeToRemove-1) {
//             let tempNext = newCurrentNode.next.next
//             newCurrentNode.next.next = null
//             newCurrentNode.next = tempNext
//             break
//         } else {
//             newCurrentNode = newCurrentNode.next
//         } 
//         i++    
//     }
    
//     return head
};