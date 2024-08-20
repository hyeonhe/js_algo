function solution(participant, completion) {
    const obj = {}
    
    for(const name of participant) {
        if (obj[name]) {
            obj[name] += 1
        } else {
            obj[name] = 1
        }
    }
    
    for (const name of completion) {
        obj[name]--
    }
    
    for (const name of participant) {
        if (obj[name] > 0) return name
    }
}