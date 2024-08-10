function solution(answers) {
    const answer = [];
    const patterns = [[1,2,3,4,5], [2,1,2,3,2,4,2,5], [3,3,1,1,2,2,4,4,5,5]]
    const count = [0,0,0]
    
    for (let i = 0; i < answers.length; i++) {
        if(patterns[0][i % 5] === answers[i]) count[0] += 1
        if(patterns[1][i % 8] === answers[i]) count[1] += 1
        if(patterns[2][i % 10] === answers[i]) count[2] += 1
    }
    
    const maxCount = Math.max(...count)
    for (let i = 0; i < count.length; i++) {
        if (count[i] === maxCount) answer.push(i + 1)
    }
        
    return answer.sort((a, b) => a - b);
}