function solution(fees, records) {
    const answer = [];
    const basicTime = fees[0], basicPrice = fees[1], unitTime = fees[2], unitPrice = fees[3];
    const temp = new Map();
    const totalTime = new Map();
    
    records.map((record)=>{
        const arr = record.split(' ');
        if(arr[2]==='IN'){
            temp.set(arr[1],arr[0])
        } else{
            const calTime =  calculateTime(arr[0]) - calculateTime(temp.get(arr[1]));
            totalTime.set(arr[1], totalTime.get(arr[1]) ? totalTime.get(arr[1]) + calTime : calTime);
            temp.delete(arr[1]);
        }
    })
    
    for(let [key, value] of temp){
        const calTime =  calculateTime('23:59') - calculateTime(value);
        totalTime.set(key, totalTime.get(key) ? totalTime.get(key) + calTime : calTime);
    }
    
    for(let [key, value] of totalTime){
        if(value<=basicTime){
            totalTime.set(key, basicPrice);
        } else {
            totalTime.set(key, basicPrice + Math.ceil((value-basicTime)/unitTime)*unitPrice);
        }
    }
    
    
    for(let [key, value] of new Map([...totalTime].sort())){
        answer.push(value);
    }
    
    return answer;
}

function calculateTime(time) {
    var timeArr = time.split(":");
    return parseInt(timeArr[0]) * 60 + parseInt(timeArr[1]);
}