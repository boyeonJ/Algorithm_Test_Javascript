function solution(price, money, count) {
    let totalPrice = 0;
    
    for(let i=0; i<count; i++){
        totalPrice += price*(i+1);
    }
    
    return money-totalPrice < 0 ? -(money-totalPrice) : 0;
}
