function reverseList(head: ListNode | null): ListNode | null {
    let pre = null;
    let cur = head;
    let temp;
    while(cur){
        temp = cur.next;
        cur.next = pre;
        pre = cur;
        cur = temp;
    }
    return pre;
};