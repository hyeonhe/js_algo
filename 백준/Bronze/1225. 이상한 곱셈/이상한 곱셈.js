const fs = require("fs");
const [a, b] = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ")
  .map((i) => i.split("").map(Number));

console.log(a.reduce((i, j) => i + j, 0) * b.reduce((i, j) => i + j, 0));