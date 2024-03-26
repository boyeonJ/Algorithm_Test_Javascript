const filePath = process.platform === 'linux' ?
    '/dev/stdin' : 'input.txt';

const solution = () => {
    let [n, ...array] = require('fs').readFileSync(filePath).toString().trim().split('\n');
    const powers = array[0].split(' ').map(Number).reverse();
    const d = new Array(parseInt(n)).fill(1);

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < i; j++) {
            if (powers[j] < powers[i]) {
                d[i] = Math.max(d[i], d[j] + 1);
            }
        }
    }

    console.log(n - Math.max(...d));
}


solution();