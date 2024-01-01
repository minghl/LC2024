function canConstruct(ransomNote: string, magazine: string): boolean {
    let map1 =new Map();
    if(ransomNote.length>magazine.length) return false;

    for(let i = 0; i <magazine.length; i++) {
        let val = map1.get(magazine[i]);
        map1.set(magazine[i], val?val+1:1);
    }

    for(let i = 0; i <ransomNote.length; i++){
        let ch = ransomNote.charAt(i);
        if(map1.has(ch) && map1.get(ch)>0){
            map1.set(ch, map1.get(ch)-1);
        } else{
            return false;
        }
    }
    return true;
};