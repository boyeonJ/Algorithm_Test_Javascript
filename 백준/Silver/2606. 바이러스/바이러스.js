const filePath = process.platform === 'linux' ? 
'/dev/stdin' : 'input.txt';

let [node, edge, ...graph] = require('fs').readFileSync(filePath).toString().trim().split('\n');
let visited = new Array(Number(node)).fill(false);
graph = graph.map((number)=>number.split(' ').map((val)=>Number(val)));

const newGraph = new Array(Number(node)).fill([]);

graph.forEach(element => {
    newGraph[element[0]-1] = [...newGraph[element[0]-1], element[1]-1];
    newGraph[element[1]-1] = [...newGraph[element[1]-1], element[0]-1];
});

const dfs = (graph, node, visited) => {
    visited[node] = true;

    for(let n of graph[node]){
        if(!visited[n]){
            dfs(newGraph, n, visited);
        }
    }
    
}

dfs(newGraph, 0, visited);

let count=0;
visited.map((val)=>count+=val);

console.log(count-1);