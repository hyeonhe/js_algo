function solution(progresses, speeds) {
    var answer = [];
    const queue = progresses.map((progress, i) => Math.ceil((100 - progress) / speeds[i]))
    
    let cnt = 0
    let maxDay = queue[0]
    
    for (let i = 0; i < queue.length; i++) {
        if (queue[i] <= maxDay) {
            cnt++
        } else {
            answer.push(cnt)
            maxDay = queue[i]
            cnt = 1
        }
    }
    
    answer.push(cnt)
    return answer;
}