const filePath = process.platform === 'linux' ? 
'/dev/stdin' : 'input.txt';

let [n,...array] = require('fs').readFileSync(filePath).toString().trim().split('\n');
let dt = [1, 1, 1, 2, 2];
let maxValue = Math.max(...array.map(Number));

for(let i = 4; i<maxValue; i++) {
    dt.push(dt[i]+dt[i-4]);
}

for(let num of array){
    console.log(dt[num-1]);
}