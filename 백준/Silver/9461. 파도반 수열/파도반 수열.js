const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

input.shift();
const dp = Array(101).fill(1);
for (let i = 4; i <= 100; i++) {
  dp[i] = dp[i - 2] + dp[i - 3];
}

for (let i in input) {
  console.log(dp[+input[i]]);
}