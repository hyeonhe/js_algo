function solution(participant, completion) {
    var answer = '';
    
    
    const obj = {}
    for(const name of completion) {
        if (obj[name]) {
            obj[name] += 1
        } else {
            obj[name] = 1
        }
    }
    
    for (const name of participant) {
        if (obj[name] === 0 || !obj[name]) return name
        else obj[name]--
    }
}