function solution(k, tangerine) {
    const map = new Map()
    let cnt = 0
    
    tangerine.forEach(i => {
        if (map.has(i)) {
            map.set(i, map.get(i) + 1)
        } else {
            map.set(i, 1)
        }
    })
    
    const array = Array(...map.values()).sort((a, b) => b-a)
    
    for (let i = 0; i < array.length; i++) {
        if (k > 0) {
            k -= array[i]
            cnt++
        }
    }
        
    return cnt
}