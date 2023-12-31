function isAnagram(s: string, t: string): boolean {
    const arr = new Array(26).fill(0);
    for(let i=0;i<s.length;i++){
        arr[s[i].charCodeAt(0)-'a'.charCodeAt(0)]++;
    }
    for(let i=0;i<t.length;i++){
        arr[t[i].charCodeAt(0)-'a'.charCodeAt(0)]--;
    }
    for(let i=0;i<26;i++){
        if(arr[i]!=0){
            return false;
        }
    }
    return true;
};