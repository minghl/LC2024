function isHappy(n: number): boolean {
    let set = new Set([]);

    while(1){
        let sum = getSum(n);
        if(sum===1){
            return true;
        }
        if(set.has(sum)){
            return false;
        }else{
            set.add(sum);
        }
        n = sum;
    }
};

const getSum = (n)=>{
    let sum = 0;
    while(n){
        sum+=(n%10)**2;
        n=Math.floor(n/10);
    }
    return sum;
}