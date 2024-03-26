function solution(triangle) {
    let parentIndex = triangle.length-1;
    while(parentIndex>0){
        parentIndex = parentIndex-1;
        triangle[parentIndex] = getMax(triangle[parentIndex], triangle[parentIndex+1]);
    }
    return triangle[0][0];
}

const getMax = (parent, child) => {
    return parent.map((v, index)=>{
        return v+Math.max(child[index], child[index+1]);
    })
}