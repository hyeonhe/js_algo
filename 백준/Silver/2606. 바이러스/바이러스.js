const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const n = +input.shift();
input.shift();

const computer = Array.from({ length: n + 1 }, () => []);
const visited = new Array(n + 1).fill(0);

for (const item of input) {
  const [a, b] = item.split(" ").map(Number);
  computer[a].push(b);
  computer[b].push(a);
}

function bfs(start) {
  const queue = [];
  queue.push(start);
  visited[start] = 1;
  let cnt = 0;

  while (queue.length > 0) {
    const node = queue.shift();

    for (const i of computer[node]) {
      if (!visited[i]) {
        queue.push(i);
        visited[i] = 1;
        cnt++;
      }
    }
  }

  return cnt;
}

console.log(bfs(1));