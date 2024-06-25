const input = require("fs").readFileSync("/dev/stdin").toString().trim();
const n = +input
const dp = Array.from({ length: 1001 }).fill(0);

dp[0] = 1;
dp[1] = 1;

for (let i = 2; i <= n; i++) {
  dp[i] = (dp[i - 1] + dp[i - 2] * 2) % 10007;
}

console.log(dp[n])