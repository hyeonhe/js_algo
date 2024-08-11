function solution(N, stages) {
    const answer = [];
    const failPercent = [];
    let people = stages.length
    for (let i = 0; i < N; i++) {
        let failPerson = 0;
        for (let j = 0; j < stages.length; j++) {
            if (i+1 === stages[j]) {
                failPerson++;                
            }
        }
        
        failPercent.push([i+1, failPerson / people])
        people -= failPerson
    }
    failPercent.sort((a, b) => b[1] - a[1]).forEach(x => answer.push(x[0]))
    
    return answer;
}