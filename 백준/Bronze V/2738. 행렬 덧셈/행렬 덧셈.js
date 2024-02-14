const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");
const [n, m] = input.shift().split(" ").map((i) => Number(i));

const A = input.splice(0, n).map((item) => item.split(" ").map((i) => Number(i)));
const B = input.map((item) => item.split(" ").map((i) => Number(i)));

for (let i = 0; i < n; i++) {
  console.log(A[i].map((a, j) => a + B[i][j]).join(" "));
}