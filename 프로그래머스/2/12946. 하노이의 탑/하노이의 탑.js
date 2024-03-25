function solution(n) {
    const array = [];
    return hanoi(n, 1, 3, 2, array);
}

const hanoi = (target, start, end, helper, array) => {
    if(target===1) return array.push([start,end]);
    
    hanoi(target-1, start, helper, end, array);
    array.push([start, end]);
    hanoi(target-1, helper, end, start, array);
    
    return array;
}