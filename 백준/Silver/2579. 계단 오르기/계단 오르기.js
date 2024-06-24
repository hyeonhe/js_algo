const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map(Number);

const n = input.shift();
const dp = Array.from({ length: 301 }).fill(0);

dp[0] = input[0];
dp[1] = input[0] + input[1];
dp[2] = Math.max(input[0] + input[2], input[1] + input[2]);

for (let i = 3; i < input.length; i++) {
  dp[i] = Math.max(input[i] + input[i - 1] + dp[i - 3], input[i] + dp[i - 2]);
}

console.log(dp[n - 1]);