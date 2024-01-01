function threeSum(nums: number[]): number[][] {
    let arr: number[][] = [];
    nums.sort((a,b)=>a-b);
    for(let i=0; i<nums.length; i++){
        if(nums[i]>0) return arr;
        if(i>0 && nums[i]==nums[i-1]) continue;
        let left = i+1;
        let right = nums.length - 1;
        while(right>left){
            if((nums[i]+nums[left]+nums[right])>0){
                right--;
            }else if((nums[i]+nums[left]+nums[right])<0){
                left++;
            }else{
                arr.push([nums[i],nums[left],nums[right]]);
                while(left<right && nums[right]==nums[right-1]){
                    right--;
                }
                while(left<right && nums[left]==nums[left+1]){
                    left++;
                }
                right--;
                left++;
            }
        }
    }
    return arr;
};