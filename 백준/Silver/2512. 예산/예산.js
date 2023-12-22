const filePath = process.platform === 'linux' ?
    '/dev/stdin' : 'input.txt';

const binarySearch = (start, end, array, target) => {
    let mid = 0;
    let result = 0;

    while (start <= end) {
        let total = 0;
        mid = Math.floor((start + end) / 2);

        for (let v of array) {
            total += Math.min(mid, v);
        }

        // start mid(total) target end
        // start target mid(total) end
        if (target >= total) {
            result = mid;
            start = mid + 1
        } else end = mid - 1;
    }

    return result;
}

const solution = () => {
    const [n, input, max] = require('fs').readFileSync(filePath).toString().trim().split('\n');
    const requestArray = input.split(' ').map(Number).sort((a, b) => a - b);

    return requestArray.reduce((a, b) => a + b) <= max ? Math.max(...requestArray) : binarySearch(1, Math.max(...requestArray) * n, requestArray, max);
}

console.log(solution());