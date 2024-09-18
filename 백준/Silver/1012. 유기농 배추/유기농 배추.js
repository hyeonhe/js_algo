const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const T = input.shift();
let pointer = 0;
const dx = [1, -1, 0, 0];
const dy = [0, 0, 1, -1];
const answer = [];

for (let i = 0; i < +T; i++) {
  const [M, N, K] = input[pointer].split(" ").map(Number);

  const graph = Array.from({ length: M }, () => new Array(N).fill(0));

  pointer++;
  for (let j = 0; j < K; j++) {
    const [x, y] = input[pointer + j].split(" ").map(Number);

    graph[x][y] = 1;
  }

  let cnt = 0;
  for (let a = 0; a < graph.length; a++) {
    for (let b = 0; b < graph[0].length; b++) {
      if (graph[a][b]) {
        bfs(a, b, graph);
        cnt++;
      }
    }
  }
  answer.push(cnt);
  pointer += K;
}

console.log(answer.join("\n"));

function bfs(x, y, graph) {
  const queue = [];
  queue.push([x, y]);
  graph[x][y] = 0;

  while (queue.length > 0) {
    const [x, y] = queue.shift();

    for (let i = 0; i < 4; i++) {
      const a = dx[i] + x;
      const b = dy[i] + y;
      if (
        a >= 0 &&
        a < graph.length &&
        b >= 0 &&
        b < graph[0].length &&
        graph[a][b]
      ) {
        queue.push([a, b]);
        graph[a][b] = 0;
      }
    }
  }

  return 1;
}