function solution(answers) {
    const answer = [];
    const patterns = [[1,2,3,4,5], [2,1,2,3,2,4,2,5], [3,3,1,1,2,2,4,4,5,5]]
    const count = [0,0,0]
    
    for (const [i, answer] of answers.entries()) {
        for (const [j, pattern] of patterns.entries()) {
            if (pattern[i % pattern.length] === answer) count[j] += 1
        }
    }
    
    const maxCount = Math.max(...count)
    for (let i = 0; i < count.length; i++) {
        if (count[i] === maxCount) answer.push(i + 1)
    }
        
    return answer;
}