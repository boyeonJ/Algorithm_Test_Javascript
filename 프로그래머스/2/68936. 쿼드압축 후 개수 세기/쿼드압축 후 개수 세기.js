function solution(arr) {
    let answer = [];
    answer = division(answer, arr, 0, 0, arr.length);
    return [answer.filter((v)=>v===0).length,answer.filter((v)=>v===1).length];
}

const division = (answer, arr, x, y, size) => {
    const directions = [[x, y], [x+size, y], [x, y+size], [x+size, y+size]];
    directions.map((d)=>{
        const result = compression(arr, d[0], d[1], size);
        if(result!==false){
            answer.push(result);
        } else {
            if(parseInt(size/2)>0){
                division(answer, arr, d[0], d[1], size/2);
            }
        }
    })
    return answer;
}

const compression = (arr, x, y, size) => {
    if(arr.length<=x || arr.length<=y) return false;
    const init = arr[y][x];
    for(let i=x; i<size+x; i++){
        for(let j=y; j<size+y; j++){     
            if(arr[j][i] !== init){
                return false;
            }        
        }
    }
    return init;
}