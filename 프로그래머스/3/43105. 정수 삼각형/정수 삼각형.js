function solution(triangle) {
    let parentIndex = triangle.length-2;
    let maxArray = getMax(triangle[parentIndex], triangle[parentIndex+1]);
    while(parentIndex>0){
        parentIndex = parentIndex-1;
        maxArray = getMax(triangle[parentIndex], maxArray);
    }
    return maxArray[0];
}

const getMax = (parent, child) => {
    let max = [];
    parent.map((v, index)=>{
        max.push(Math.max(v+child[index], v+child[index+1]));
    })
    return max;
}
