function solution(park, routes) {
    const answer = [];
    let dx = 0;
    let dy = 0;
    
    for (let i = 0; i <park.length; i++) {
        for (let j = 0; j < park[i].length; j++) {
            if (park[i][j] === 'S') {
                dx = i
                dy = j
            }
        }
    }
    
    routes.forEach(item => {
        const [route, cnt] = item.split(' ')

        let tmpX = 0;
        let tmpY = 0;
        
        for (let i = 0; i < Number(cnt); i++) {
            if (route === 'S') tmpX++
            else if (route === 'N') tmpX--
            else if (route === 'W') tmpY--
            else if (route === 'E') tmpY++
            
            const nx = dx + tmpX
            const ny = dy + tmpY
            
            if ((nx >= park.length) || (nx < 0) || (ny >= park[0].length) || (ny < 0) || park[nx][ny] === 'X') {
                tmpX = 0
                tmpY = 0
                break
            }

        }
        
        dx += tmpX
        dy += tmpY
    })
    
    return [dx, dy];
}