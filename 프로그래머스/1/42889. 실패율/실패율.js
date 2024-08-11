function solution(N, stages) {
    const challenger = new Array(N + 2).fill(0)
    let people = stages.length;
    const failPercent = []
    for (const stage of stages) {
        challenger[stage]++
    }

    for (let i = 1; i <= N; i++) {
        failPercent.push([i, challenger[i] / people])
        people -= challenger[i]
    }
    
    const answer = failPercent.sort((a, b) => b[1] - a[1])
    return answer.map(v => v[0]);
}