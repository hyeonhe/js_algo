const fs = require("fs");
const input = fs.readFileSync("/dev/stdin", "utf8");
const [t, ...tc] = input.trim().split("\n");
const dp = Array(11).fill(0);

dp[1] = 1;
dp[2] = 2;
dp[3] = 4;

for (i = 4; i <= 10; i++) {
  dp[i] = dp[i - 1] + dp[i - 2] + dp[i - 3];
}

tc.forEach((i) => console.log(dp[+i]));