const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const [n, m, v] = input.shift().split(" ").map(Number);

const graph = Array.from({ length: n + 1 }, () => []);

input.forEach((item) => {
  const [a, b] = item.split(" ").map(Number);
  graph[a].push(b);
  graph[b].push(a);
});

graph.forEach((item) => {
  item.sort((a, b) => a - b);
});

let visited = Array(n + 1).fill(0);
const dfsArr = [];
const bfsArr = [];

function dfs(v) {
  visited[v] = 1;
  dfsArr.push(v);

  graph[v].forEach((i) => {
    if (!visited[i]) {
      dfs(i);
    }
  });
}

function bfs(v) {
  const queue = [];
  queue.push(v);
  visited[v] = 1;

  while (queue.length > 0) {
    let node = queue.shift();
    bfsArr.push(node);

    graph[node].forEach((i) => {
      if (!visited[i]) {
        queue.push(i);
        visited[i] = 1;
      }
    });
  }
}

dfs(v);
visited = Array(n + 1).fill(0);
bfs(v);

console.log(dfsArr.join(" "));
console.log(bfsArr.join(" "));