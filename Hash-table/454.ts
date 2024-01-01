function fourSumCount(nums1: number[], nums2: number[], nums3: number[], nums4: number[]): number {
    let map = new Map();
    for(const i of nums1){
        for(const j of nums2){
            let val = map.get(i+j);
            map.set(i+j,val?val++:1);
        }
    }

    let count = 0; 
    for(const i of nums3){
        for(const j of nums4){
            if(map.has(-i-j)){
                count = count + map.get(-i-j);
            }
        }
    }
    return count;

};