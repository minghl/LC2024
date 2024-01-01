function reverseStr(s: string, k: number): string {
    let arrStr = s.split('');
    for(let i = 0; i < arrStr.length; i+=2*k) {
        let l = i;
        let r = i+k-1>arrStr.length?arrStr.length:i+k-1;
        while(l<r){
            [arrStr[l], arrStr[r]] = [arrStr[r], arrStr[l]];
            l++;
            r--;
        }
    }
    return arrStr.join('');
};