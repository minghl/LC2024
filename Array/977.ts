function sortedSquares(nums: number[]): number[] {
    const newNums = nums.map((i)=> i*i).sort((a,b)=>a-b);
    return newNums
};