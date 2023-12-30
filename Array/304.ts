// function search(nums: number[], target: number): number {
//     let result = -1;
//     nums.map((item, index) => {
//         if (item == target) {
//             console.log(item, target,index);
//             result = index;
//         }
//     })
//     return result;
// };

function search(nums: number[], target: number): number {
    let left = 0;
    let right = nums.length - 1;
    while(left<=right){
        let mid = Math.floor(left+ ((right-left))/2);
        if (nums[mid] > target) {
            right = mid -1;
        }else if (nums[mid] < target) {
            left = mid + 1;
        }else{
            return mid;
        }
    }
    return -1;
};

const nums = [-1, 0, 3, 5, 9, 12];
const target = 9;

const ans = search(nums, target);
console.log(ans, 'sadads');
