const filePath = process.platform === 'linux' ? 
'/dev/stdin' : 'input.txt';

const dfs = (queue, end, l) => {
    const direction = [
        [0, 0],
        [-1, -2],
        [1, -2],
        [-2, -1],
        [2, -1],
        [-2, 1],
        [2, 1],
        [-1, 2],
        [1, 2]
    ];

    // let deeps = new Array(l).fill(new Array(l).fill(0));
    let deeps = Array.from({
        length: l
    }, () => Array(l).fill(0));


    while (queue.length) {
        const [curX, curY] = queue.shift();

        for (let [x, y] of direction) {
            const nextX = curX + x
            const nextY = curY + y;

            if (nextX < 0 || nextX > l - 1 || nextY < 0 || nextY > l - 1) continue;

            if (nextX === end[0] && nextY === end[1]) return deeps[curX][curY];

            if (deeps[nextX][nextY] === 0) {
                queue.push([nextX, nextY]);
                deeps[nextX][nextY] = deeps[curX][curY] + 1;
            }
        }
    }


    return deeps;
}

const solution = () => {
    const [n, ...inputs] = require('fs').readFileSync(filePath).toString().trim().split('\n');


    for(let i=0; i<n; i++){
        const [l, start, end] = inputs.slice(i*3, i*3+3);
        let queue = [];
        queue.push(start.split(' ').map(Number));
        console.log(dfs(queue, end.split(' ').map(Number), Number(l)));
    }
}

solution();