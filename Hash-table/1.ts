function twoSum(nums: number[], target: number): number[] {
    let map = new Map<number, number>();
    for (let i = 0; i < nums.length; i++){
        let s = target - nums[i];
        if(map.has(s)){
            let item = map.get(s);
            return [item, i]
        }
        map.set(nums[i],i);
    }
    
};