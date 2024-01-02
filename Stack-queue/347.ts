function topKFrequent(nums: number[], k: number): number[] {
    let map = new Map();
    nums.map(i=>{
        map.set(i,map.get(i)?map.get(i)+1:1);
    })
    let arr = Array.from(map);
    arr.sort((a,b)=>b[1]-a[1]);
    let res = arr.slice(0,k);
    const result = []
    res.map(i=>{
        result.push(i[0]);
    })
    return result;
};