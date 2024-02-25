const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const dp = Array(101).fill(1);
const answer = [];
for (let i = 4; i <= 100; i++) {
  dp[i] = dp[i - 2] + dp[i - 3];
}

input.shift();
for (let i in input) {
  answer.push(dp[+input[i]]);
}

console.log(answer.join("\n"));