function solution(number, limit, power) {
    var answer = 0;
    const arr = Array.from(new Array(number), (x, i) => i + 1);
    
    const weapon = []
    let count = 0
    arr.forEach((n) => {
        for (let i = 1; i * i <= n; i++){
            if (i * i === n) count++;
            else if (n % i === 0) count += 2;
        }
        weapon.push(count)
        count = 0
    })
    
    weapon.forEach((n) => {
        answer += n <= limit ? n : power
    })
    
    return answer;
}