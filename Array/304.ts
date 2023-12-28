function search(nums: number[], target: number): number {
    let result = -1;
    nums.map((item, index) => {
        if (item == target) {
            console.log(item, target,index);
            result = index;
        }
    })
    return result;
};

const nums = [-1, 0, 3, 5, 9, 12];
const target = 9;

const ans = search(nums, target);
console.log(ans, 'sadads');
