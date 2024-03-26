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
    return parent.map((v, index)=>{
        return v+Math.max(child[index], child[index+1]);
    })
}