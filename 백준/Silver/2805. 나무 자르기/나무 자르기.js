const filePath = process.platform === 'linux' ?
    '/dev/stdin' : 'input.txt';

const binarySearch = (start, end, array, target) => {
    let answer = 0;
    while (start <= end) {
        const mid = Math.floor((start + end) / 2);
        const sum = array.map((value) => value - mid > 0 ? value - mid : 0).reduce((a, b) => a + b);

        if (sum >= target) {
            answer = mid;
            start = mid + 1;
        } else end = mid - 1;
    }

    return answer;
}

const solution = () => {
    let [input1, input2] = require('fs').readFileSync(filePath).toString().trim().split('\n');
    const [n, target] = input1.split(' ').map(Number);
    input2 = input2.split(' ').map(Number).sort((a, b) => a - b);

    console.log(binarySearch(1, input2[input2.length - 1] - 1, input2, target));
}

solution();