function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
    let dh = new ListNode(0,head);
    let fastIndex = dh;
    let slowIndex = dh;
    n++;
    while(n--&&fastIndex!=null){
        fastIndex = fastIndex.next;
    }

    while(fastIndex!=null){
        fastIndex = fastIndex.next;
        slowIndex = slowIndex.next;
    }

    slowIndex.next = slowIndex.next.next;
    return dh.next;
};