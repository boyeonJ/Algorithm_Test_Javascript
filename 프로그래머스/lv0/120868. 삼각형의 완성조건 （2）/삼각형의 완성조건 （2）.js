function solution(sides) {
    sides.sort((a,b)=>a-b);
    
    // const noLongest = sides[1] - (sides[1]-sides[0]);
    // const longest = (sides[1]+sides[0]) - sides[1] - 1;
    
    // sides[1] - (sides[1]-sides[0]) +  (sides[1]+sides[0]) - sides[1] - 1 = sides[0]*2 -1
    
    // return noLongest + longest;
    return sides[0]*2 -1
}