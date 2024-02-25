const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");
input.shift();

const dp = Array.from(Array(30), () => Array(30).fill(0));

dp[1] = Array.from({ length: 30 }, (_, i) => i);

for (let i = 2; i < 30; i++) {
  for (let j = i; j < 30; j++) {
    if (j === i) {
      dp[i][j] = 1;
    } else {
      dp[i][j] = dp[i][j - 1] + dp[i - 1][j - 1];
    }
  }
}

for (const item of input) {
  const [a, b] = item.split(" ").map(Number);
  console.log(dp[a][b]);
}