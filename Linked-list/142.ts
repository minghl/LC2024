var detectCycle = function(head) {
    let fast = head;
    let slow = head;
    while(fast!=null&fast.next!=null){
        fast = fast.next.next;
        slow = slow.next;
        if(slow == fast){
            let index1 = head;
            let index2 = slow;
            while(index2!=index1){
                index1 = index1.next;
                index2 = index2.next;
            }
            return index1;
        }
    }
    return null;
};