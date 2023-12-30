function minSubArrayLen(target: number, nums: number[]): number {
    let sum = 0;
    let result = Number.MAX_VALUE;
    let i = 0;
    for(let j = 0; j< nums.length; j++){
        sum = sum + nums[j];
        while(sum>=target){
            let len = j - i + 1;
            result = len < result? len: result;
            sum = sum - nums[i];
            i++;
        }
    }
    return result === Number.MAX_VALUE? 0: result;
};