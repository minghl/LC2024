/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function swapPairs(head: ListNode | null): ListNode | null {
    let dummy = new ListNode(0,head);
    let cur = dummy;
    while(cur.next!=null&&cur.next.next!=null){
        let temp = cur.next;
        let temp1 = cur.next.next.next;
        cur.next = cur.next.next;
        cur.next.next=temp;
        temp.next = temp1;
        cur = cur.next.next;
    }
    return dummy.next;
};