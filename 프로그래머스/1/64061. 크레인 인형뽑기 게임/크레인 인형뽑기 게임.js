function solution(board, moves) {
    const stack = []
    let count = 0
    
    for (const move of moves) {
        for (let i = 0; i < board.length; i++) {
            const doll = board[i][move-1]
            if (doll) {
                if (stack.length === 0 || stack[stack.length - 1] !== doll) stack.push(doll)
                else {
                    stack.pop()
                    count += 2
                }
                board[i][move-1] = 0
                break
            }
        }
    }
    
    return count;
}