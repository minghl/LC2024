// function removeElement(nums: number[], val: number): number {
//     let k = 0
//     for(let i = 0; i<nums.length;i++){
//         while(nums[i]===val){
//             k++;
//             for(let j = i;j<nums.length;j++){
                
//                 nums[j] = nums[j+1];
//             }
//         }
//     }
//     return nums.length - k;
// };

function removeElement(nums: number[], val: number): number {
    let slowIndex = 0;
    for(let fastIndex = 0; fastIndex < nums.length; fastIndex++){
        if(val != nums[fastIndex]){
            nums[slowIndex] = nums[fastIndex];
            slowIndex++;
        }
    }
    return slowIndex;
};
