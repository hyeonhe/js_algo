const input = require("fs")
  .readFileSync("/dev/stdin", "utf8")
  .toString()
  .trim()
  .split("\n");

const [n, m] = input.shift().split(" ").map(Number);

const board = input.slice(0, n).map((str) => str.split(" ").map(Number));
const dp = Array.from(Array(n + 1), () => Array(n + 1).fill(0));
const answer = [];

for (let i = 1; i <= n; i++) {
  for (let j = 1; j <= n; j++) {
    dp[i][j] =
      dp[i][j - 1] + dp[i - 1][j] + board[i - 1][j - 1] - dp[i - 1][j - 1];
  }
}

for (let i = n; i < n + m; i++) {
  const [x1, y1, x2, y2] = input[i].split(" ").map(Number);
  answer.push(
    dp[x2][y2] - dp[x1 - 1][y2] - dp[x2][y1 - 1] + dp[x1 - 1][y1 - 1]
  );
}

console.log(answer.join("\n"));