var getIntersectionNode = function (headA, headB) {
    let curA = headA;
    let curB = headB;
    let lenA = 0;
    let lenB = 0;
    while (curA != null) {
        curA = curA.next;
        lenA++;
    }
    while (curB != null) {
        curB = curB.next;
        lenB++;
    }

    curA = headA;

    curB = headB;

    if (lenB > lenA) {
        [lenA, lenB] = [lenB, lenA];
        [curA, curB] = [curB, curA];
    }
    let gap = lenA - lenB;
    while (gap--) {
        curA = curA.next;
    }
    while (curA != null) {
        if (curA == curB) {
            return curA;
        }
        curA = curA.next;
        curB = curB.next;
    }
    return null;
};