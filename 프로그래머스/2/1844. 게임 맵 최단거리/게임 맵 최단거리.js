function solution(maps) {
    const queue = []
    const n = maps.length
    const m = maps[0].length
    const visited = Array.from({length: n}, () => new Array(m).fill(false))
    const answer = bfs(maps, 0, 0, visited, n, m)
    
    return answer;
}

const dx = [1, -1, 0, 0]
const dy = [0, 0, 1, -1]

function bfs(maps, x, y, visited, n, m) {
    const queue = []
    queue.push([x, y])
    
    while(queue.length > 0) {
        const [a, b] = queue.shift()
        visited[a][b] = true
        
        for (let i = 0; i < 4; i++) {
            const nx = dx[i] + a
            const ny = dy[i] + b
            if (nx >= 0 && nx < n && ny >= 0 && ny < m && maps[nx][ny] === 1 && !visited[nx][ny]) {
                queue.push([nx, ny])
                maps[nx][ny] = maps[a][b] + 1
            }
        }
    }

    return maps[n-1][m-1] > 1 ? maps[n-1][m-1] : -1
}