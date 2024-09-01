const fs = require("fs");
const arr = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map(Number);

const n = arr.shift();
const dp = new Array(10000).fill(0);
dp[0] = arr[0];
dp[1] = arr[0] + arr[1];
dp[2] = Math.max(dp[1], arr[2] + arr[1], arr[2] + arr[0]);

for (let i = 3; i < n; i++) {
  dp[i] = Math.max(dp[i - 1], arr[i] + arr[i - 1] + dp[i - 3], arr[i] + dp[i - 2]);
}

console.log(dp[n - 1]);