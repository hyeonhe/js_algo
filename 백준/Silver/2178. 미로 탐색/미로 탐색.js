const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [n, m] = input
  .shift()
  .split(" ")
  .map((i) => +i);

const map = input.map((item) => item.split("").map((i) => +i));

const dx = [0, 0, 1, -1];
const dy = [1, -1, 0, 0];
let cnt = 0;

const visited = Array(n)
  .fill(0)
  .map(() => new Array(m).fill(0));
const queue = [];

function bfs(x, y) {
  visited[x][y] = 1;
  queue.push([x, y]);

  while (queue.length) {
    const [x, y] = queue.shift();
    for (let i = 0; i < 4; i++) {
      const a = x + dx[i];
      const b = y + dy[i];
      if (a < n && a >= 0 && b < m && b >= 0) {
        if (visited[a][b] === 0 && map[a][b] === 1) {
          visited[a][b] = visited[x][y] + 1;
          queue.push([a, b]);
        }
      }
    }
  }
}

bfs(0, 0);
console.log(visited[n - 1][m - 1]);