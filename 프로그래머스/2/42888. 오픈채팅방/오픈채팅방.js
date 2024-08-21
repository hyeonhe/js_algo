function solution(record) {
    const users = {}
    const answer = []
    
    for (const item of record) {
        const [cmd, id, name] = item.split(' ')
        if (cmd !== 'Leave') {
            users[id] = name        
        }
    }
    
    for (const item of record) {
        const [cmd, id, name] = item.split(' ')
        
        if (cmd === 'Leave') {
            answer.push(`${users[id]}님이 나갔습니다.`)
        } else if (cmd === 'Enter') {
            answer.push(`${users[id]}님이 들어왔습니다.`)
        }
    }
    
    return answer
}