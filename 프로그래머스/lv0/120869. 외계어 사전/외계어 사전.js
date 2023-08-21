// function solution(spell, dic) {
//     var answer = 0;
    
//     for(let word of dic){
//         let temp = word;
        
//         for(const sp of spell){
//             if(temp.indexOf(sp)===-1) break;
//             if(word.length < spell.length) break;
            
//             temp =  temp.slice(0, temp.indexOf(sp)) + temp.slice(temp.indexOf(sp)+1);
//         }
        
//         if(temp.length === 0) return 1;
//         answer = 2;
//     }
    
//     return answer;
// }

function solution(spell, dic) {
    return dic.some(s => 
        [...s].sort().join('') === spell.sort().join('')
    ) ? 1 : 2
}