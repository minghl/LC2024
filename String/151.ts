function reverseWords(s: string): string {
    const strArr = Array.from(s);

    removeExtraSpaces(strArr);

    strArr.reverse();

    let start = 0;

    for(let i = 0; i <= strArr.length; i++){
        if(strArr[i]===' ' || i === strArr.length){
            reverse(strArr, start, i-1);
            start = i+1;
        }
    }
    return strArr.join('');
};

function removeExtraSpaces(strArr){
    let slowIndex = 0;
    let fastIndex = 0;

    while(fastIndex <strArr.length) {
        if(strArr[fastIndex] === ' ' && (fastIndex ===0 || strArr[fastIndex-1]===' ')) {
            fastIndex++;
        }else{
            strArr[slowIndex++]= strArr[fastIndex++];
        }
    }

    strArr.length = strArr[slowIndex - 1] === ' ' ? slowIndex - 1 : slowIndex;
}

function reverse(strArr, start, end) {
    let left = start;
    let right = end;
  
    while(left < right) {
      // 交换
      [strArr[left], strArr[right]] = [strArr[right], strArr[left]];
      left++;
      right--;
    }
  }