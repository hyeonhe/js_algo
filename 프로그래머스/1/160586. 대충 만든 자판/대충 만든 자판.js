function solution(keymap, targets) {
    var answer = [];
    const map = new Map();
    
    keymap.forEach(item => {
        for (let i=0; i < item.length; i++) {
            if (map.get(item[i])) {
                map.set(item[i], Math.min(map.get(item[i]), i+1))
            } else map.set(item[i], i+1)
        }
    })
    
    targets.forEach(target => {
        let cnt = 0
        for (let i=0; i < target.length; i++) {
            const value = map.get(target[i])
            if (value) cnt += value
            else {
                cnt = -1
                break
            }
        }
        answer.push(cnt)
    })

    return answer;
}