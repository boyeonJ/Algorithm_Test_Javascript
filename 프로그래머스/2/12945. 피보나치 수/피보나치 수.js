// function solution(n) {
//     let dt = new Array(100000).fill(0);
    
//     const fibonacci = (n) => {
//         //종료
//         if( n===1 || n===2 ){
//             return 1;
//         }
        
//         //중복 계산 방지
//         if(dt[n]!==0){
//             return dt[n];
//         }
        
//         dt[n] = fibonacci(n-1) + fibonacci(n-2);
        
//         return dt[n];
//     }
    
    
//     return fibonacci(n);
// }

//범위 초과
// function solution(n) {
//     let dt = new Array(100000).fill(0);
    
//     const fibonacci = (n) => {
//         //종료
//         if( n===1 || n===2 ){
//             return 1;
//         }
        
//         //중복 계산 방지
//         if(dt[n]!==0){
//             return dt[n];
//         }
        
//         dt[n] = fibonacci(n-1) + fibonacci(n-2);
        
//         return dt[n] % 1234567;
//     }
    
    
//     return fibonacci(n);
// }


//재귀함수 깊이 초과(반복문으로 수정)
function solution(n) {
    let dt = new Array(n).fill(0);
    dt[0], dt[1] = 1;
    
    for(let i=2; i<n+1; i++){
        dt[i] = (dt[i-1] + dt[i-2] % 1234567);
    }
    
    return dt[n] % 1234567;
}