function fourSum(nums: number[], target: number): number[][] {
    let arr: number[][] = [];
    nums.sort((a, b) => a-b);
    for(let k = 0; k < nums.length; k++) {
        if(nums[k]>target && nums[k]>=0){
            return arr;
        } 

        if(k>0&&nums[k] == nums[k-1]){
            continue;
        }

        for(let i = k+1; i < nums.length; i++){
            if(nums[k]+nums[i] > target && nums[k]+nums[i]>=0){
                return arr;
            }
            if(i>k+1&& nums[i]===nums[i-1]){
                continue;
            }
            let left = i+1;
            let right = nums.length-1;

            while(left<right){
                if(nums[k] + nums[i] + nums[left] + nums[right] > target){
                    right--;
                } else if (nums[k] + nums[i] + nums[left] + nums[right] < target){
                    left++;
                }else{
                    arr.push([nums[k] , nums[i] , nums[left] , nums[right]])
                    while(right>left && nums[right] == nums[right-1]) right--;
                    while(right>left && nums[left] == nums[left+1]) left++;
                    right--;
                    left++;
                }

            }
        }
    }

    return arr;
};