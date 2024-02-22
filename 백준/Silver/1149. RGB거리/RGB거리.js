const fs = require("fs");
const input = fs.readFileSync("/dev/stdin", "utf8").toString().trim().split("\n");

const n = input.shift();
let dp = input
  .shift()
  .split(" ")
  .map((i) => +i);

input.forEach((value) => {
  const arr = value.split(" ").map((i) => +i);
  const a = arr[0] + Math.min(dp[1], dp[2]);
  const b = arr[1] + Math.min(dp[0], dp[2]);
  const c = arr[2] + Math.min(dp[1], dp[0]);

  dp = [a, b, c];
});

console.log(Math.min(...dp));