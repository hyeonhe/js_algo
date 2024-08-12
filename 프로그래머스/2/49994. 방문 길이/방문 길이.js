function direction(dir, x, y) {
    switch (dir) {
        case "U":
            return [x, y + 1]
        case "D":
            return [x, y - 1]
        case "R":
            return [x + 1, y]
        case "L":
            return [x - 1, y]
            
    }
}

function isValidMove(nx, ny) {
    return nx >= -5 && nx <= 5 && ny >= -5 && ny <= 5
}

function solution(dirs) {
    const visited = new Set()
    
    let x = 0;
    let y = 0;
    
    for (const dir of dirs) {
        const [nx, ny] = direction(dir, x, y)
        if (!isValidMove(nx, ny)) {
            continue;
        }
        visited.add(`${x}${y}${nx}${ny}`)
        visited.add(`${nx}${ny}${x}${y}`)
        
        x = nx
        y = ny
    }

    return visited.size / 2;
}