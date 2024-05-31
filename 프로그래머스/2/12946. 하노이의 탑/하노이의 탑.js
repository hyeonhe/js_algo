function solution(n) {
    var answer = [];
    
    function hanoi(num, from, to, by) {
        if (num === 1) {
            answer.push([from, to])
            return;
        }
        else {
            hanoi(num - 1, from, by, to)
            answer.push([from, to])
            hanoi(num - 1, by, to, from);
        }
    }
    
    hanoi(n, 1, 3, 2)
    return answer;
}