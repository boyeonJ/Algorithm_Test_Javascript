// const BONUS = {
//     S : 1,
//     D : 2,
//     T : 3
// }

// function solution(dartResult) {
//     let culrArray = [];
//     let powArray = [];
    
//     dartResult = dartResult.replaceAll('S', '@S@').replaceAll('D', '@D@').replace('T', '@T@').replaceAll('*', '*@').replaceAll('#', '#@').split('@').filter(v=>v!=='');
    
//     for(let value of dartResult){
//         if(isNumeric(value)){
//             culrArray.push(value);
//         }else if(value==='*'){
//             powArray[powArray.length-1] = powArray[powArray.length-1]*2
//             if(powArray.length > 1){
//                 powArray[powArray.length-2] = powArray[powArray.length-2]*2
//             }
//         }else if(value==='#'){
//             powArray[powArray.length-1] = -powArray[powArray.length-1]
//         }else{
//             powArray.push(Math.pow(culrArray[culrArray.length-1], BONUS[value]))
//         }
//     }
    
//     return powArray.reduce((a,b)=>a+b,0);
// }

// function isNumeric(inputString) {
//   const regex = /^\d+$/;
//   return regex.test(inputString);
// }



function parseDartResult(dartResult) {
    const regex = /(\d+)([SDT])([*#]?)/g;
    const matches = [...dartResult.matchAll(regex)];
    return matches.map(match => ({
        score: parseInt(match[1]),
        bonus: match[2],
        option: match[3]
    }));
}

function calculateScore(parsedResults) {
    let totalScore = 0;
    let prevScore = 0;

    for (const result of parsedResults) {
        let score = Math.pow(result.score, BONUS[result.bonus]);

        if (result.option === '*') {
            score *= 2;
            totalScore += prevScore; // Previous score gets doubled
        } else if (result.option === '#') {
            score = -score;
        }

        totalScore += score;
        prevScore = score;
    }

    return totalScore;
}
const BONUS = {
    S: 1,
    D: 2,
    T: 3
};

function solution(dartResult) {
    const parsedResults = parseDartResult(dartResult);
    return calculateScore(parsedResults);
}

// 예시 사용법
console.log(solution("1S2D*3T")); // 출력: 37
