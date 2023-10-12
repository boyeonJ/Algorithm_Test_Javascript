const countMatchingCharacters = (prev, next) => {
  let count = 0;
  for(let i=0; i<prev.length; i++){
      if(prev[i]!==next[i]){
        count++;
      }
  }

  return count;
}

const dfs = (word, graph, target) => {
  let stack = [word];
  let visit = new Set();
  let count = 0;

  while(stack.length>0){
    word = stack.pop();

    //방문을 했던 적이 있는지?
    if(!visit.has(word)){
      //target이랑 같으면 return
      if(word === target) return count;
      visit.add(word);
      count++;

      for(let neighbor of graph[word]){
        stack.push(neighbor);
        console.log(stack);
      }
    }
  }

  return count;
}

function solution(begin, target, words) {
    let graph = {};
    
    if(!words.some((word)=>word===target)) return 0;
    
    words.map((prev)=>{
      graph[prev] = [];
      words.map((next)=>{
        if(countMatchingCharacters(prev, next) === 1){
            graph[prev].push(next); 
        }
      });
    });


    const beginArray = words.filter((word)=>countMatchingCharacters(begin, word)===1); 

    let minArray = [];

    beginArray.map((word)=>{
        minArray.push(dfs(word, graph, target)+1);
    })

    return Math.min(...minArray);
}