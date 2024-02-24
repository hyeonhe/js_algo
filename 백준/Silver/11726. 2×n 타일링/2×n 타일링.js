const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim();

const n = +input;

const dp = Array.from(1001).fill(0);
dp[1] = 1;
dp[2] = 2;

for (let i = 3; i <= n; i++) {
  dp[i] = (dp[i - 1] + dp[i - 2]) % 10007;
}

console.log(dp[n]);