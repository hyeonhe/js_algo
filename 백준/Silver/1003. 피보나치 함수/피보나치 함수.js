const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
input.shift();

const dp = [[1, 0], [0, 1]];

const maxNum = Math.max(...input);
const arr = [];

for (let i = 2; i <= maxNum; i++) {
  dp.push([dp[i - 1][0] + dp[i - 2][0], dp[i - 1][1] + dp[i - 2][1]]);
}

input.forEach((i) => {
  arr.push(dp[+i]);
});

arr.map((i) => console.log(i.join(" ")));