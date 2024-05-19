function solution(number, limit, power) {
    let answer = 0;
    const arr = Array.from(new Array(number), (x, i) => i + 1);
    
    arr.forEach((n) => {
        let count = 0
        for (let i = 1; i * i <= n; i++){
            if (i * i === n) count++;
            else if (n % i === 0) count += 2;
        }
        answer += count <= limit ? count : power
    })

    return answer;
}