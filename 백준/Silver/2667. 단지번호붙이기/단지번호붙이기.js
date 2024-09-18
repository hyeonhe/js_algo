const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const n = +input.shift();
const graph = input.map((item) => item.trim().split("").map(Number));

const dx = [1, -1, 0, 0];
const dy = [0, 0, 1, -1];
const answer = [];

function bfs(x, y) {
  const queue = [];
  queue.push([x, y]);
  graph[x][y] = 0;
  let cnt = 1;

  while (queue.length > 0) {
    const [a, b] = queue.shift();

    for (let i = 0; i < 4; i++) {
      const x = a + dx[i];
      const y = b + dy[i];

      if (x >= 0 && x < n && y >= 0 && y < n && graph[x][y]) {
        graph[x][y] = 0;
        queue.push([x, y]);
        cnt++;
      }
    }
  }

  return cnt;
}

for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    if (graph[i][j]) {
      answer.push(bfs(i, j));
    }
  }
}

answer.sort((a, b) => a - b);
console.log(answer.length);
console.log(answer.join("\n"));