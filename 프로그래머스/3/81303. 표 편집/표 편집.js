function solution(n, k, cmd) {
    const up = [...Array(n + 2)].map((_, i) => i - 1)
    const down = [...Array(n + 2)].map((_, i) => i + 1)
    const stack = []
    k++
    
    for (const item of cmd) {
        if (item === 'C') {
            up[down[k]] = up[k]
            down[up[k]] = down[k]
            stack.push(k)
            k = n < down[k] ? up[k] : down[k]
        }
        else if (item === 'Z') {
            const undo = stack.pop()
            up[down[undo]] = undo
            down[up[undo]] = undo
            
        }
        else {
            const [arrow, num] = item.split(' ')
            if (arrow === 'U') {
                for (let i = 0; i < num; i++) {
                    k = up[k]
                }
            } else {
                for (let i = 0; i < num; i++) {
                    k = down[k]
                }
            }
        }
    }
    
    const answer = new Array(n).fill('O')
    for (const num of stack) {
        answer[num - 1] = 'X'
    }
    
    return answer.join('');
}