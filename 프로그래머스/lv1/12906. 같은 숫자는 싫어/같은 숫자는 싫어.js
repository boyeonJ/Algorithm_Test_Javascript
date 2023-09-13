function solution(arr)
{
    return arr.filter((value,index) => {
        if(index!==0 && arr[index-1] === value) return false;
        return true;
    })
}