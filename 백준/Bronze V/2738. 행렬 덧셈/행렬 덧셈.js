const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");
const [n, m] = input[0].split(" ").map((i) => Number(i));
input.shift();

const A = input
  .splice(0, n)
  .map((item) => item.split(" ").map((i) => Number(i)));
const B = input.map((item) => item.split(" ").map((i) => Number(i)));

for (let i = 0; i < n; i++) {
  let ans = "";
  for (let j = 0; j < m; j++) {
    ans += String(A[i][j] + B[i][j]) + " ";
  }

  console.log(ans);
  ans = "";
}