function isValid(s: string): boolean {
    let stack: string[] = [];
    if(s.length % 2 !==0) return false;
    for(let i = 0; i < s.length; i++){
        if(s[i]=='(') stack.push(')');
        else if(s[i]=='[') stack.push(']');
        else if(s[i]=='{') stack.push('}');
        else if(stack.pop()!==s[i]) return false;
    }
    return stack.length === 0;
};