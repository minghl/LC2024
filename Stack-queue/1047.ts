function removeDuplicates(s: string): string {
    let stack: string[] = [];
    for(let i = 0; i<s.length; i++){
        if(i>0&&stack[stack.length-1]==s[i]){
            stack.pop();
        }else{
            stack.push(s[i]);
        }
    }
    return stack.join('');
};