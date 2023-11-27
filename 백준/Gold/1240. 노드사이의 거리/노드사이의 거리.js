const filePath = process.platform === 'linux' ? 
'/dev/stdin' : 'input.txt';

const [info, ...rest] = require('fs').readFileSync(filePath).toString().trim().split('\n');

const [node, m] = info.split(' ');
const edges = rest.slice(0, node-1).map((edge)=>edge.split(' '));
const questions = rest.slice(node-1);

let graph = new Array(Number(node)+1).fill([]);
for(let edge of edges){
    graph[edge[0]] = [...graph[edge[0]], {node: edge[1], weight: edge[2]}];
    graph[edge[1]] = [...graph[edge[1]], {node: edge[0], weight: edge[2]}];
}

let visited = new Array(Number(node)+1).fill(false);
let distance = new Array(Number(node)+1).fill(0);
let sum = 0;

const dfs = (node, dist) => {
    visited[node] = true;
    distance[node] = dist;

    for(let n of graph[node]){
        if(!visited[n.node]){
            dfs(n.node, dist+Number(n.weight));
        }
    }
}

for(let question of questions){
    const [start, end] = question.split(' ').map(Number);
    dfs(start, 0);
    console.log(distance[end]);
    distance.fill(0);
    visited.fill(false);
}



