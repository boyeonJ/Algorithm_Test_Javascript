const filePath = process.platform === 'linux' ? 
'/dev/stdin' : 'input.txt';


const MAX = 100001;

const bfs = (end, deeps, queue) => {
    while(queue.length){
        const curNode = queue.shift();

        if(curNode===end) {
            return deeps[curNode];
        }

        for(let nextNode of [curNode+1, curNode-1, curNode*2]){
            if(nextNode < 0 || nextNode > MAX) continue;
            
            if(deeps[nextNode]===0){
                queue.push(nextNode);
                deeps[nextNode] = deeps[curNode] + 1;
            }
        }
    }
}

const sol = () => {
    const [start, end] = require('fs').readFileSync(filePath).toString().trim().split(' ').map(Number);
    
    let deeps = new Array(MAX).fill(0);
    let queue = [];
    queue.push(start);
    console.log(bfs(end, deeps, queue));
}

sol();