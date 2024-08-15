function solution(board, moves) {
    const stack = []
    const lanes = [...Array(board[0].length)].map(() => [])
    
    for (let i = board.length - 1; i >= 0; i--) {
        for (let j = 0; j < board[0].length; j++) {
            if(board[i][j]) lanes[j].push(board[i][j])
        }
    }
    
    let count = 0
    for (const move of moves) {
        if (lanes[move-1].length > 0) {
            const doll = lanes[move-1].pop()    
            
            if (stack.length > 0 && stack[stack.length - 1] === doll) {
                stack.pop()
                count += 2
            } else stack.push(doll)
        }
    }
    
    return count;
}