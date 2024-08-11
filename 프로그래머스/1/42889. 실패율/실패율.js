function solution(N, stages) {
    const challenger = new Array(N + 2).fill(0)
    for (const stage of stages) {
        challenger[stage]++
    }

    const failPercent = {};
    let people = stages.length;
    for (let i = 1; i <= N; i++) {
        failPercent[i] = challenger[i] / people
        people -= challenger[i]
    }
    
    const answer = Object.entries(failPercent).sort((a, b) => b[1] - a[1])
    return answer.map(v => Number(v[0]));
}