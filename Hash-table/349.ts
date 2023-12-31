function intersection(nums1: number[], nums2: number[]): number[] {
    let set = new Set(nums1);
    const set2 = new Set([]);
    nums2.map(i=>{
        if(set.has(i)){
            set2.add(i);
        }
    })
    return Array.from(set2) ;
};