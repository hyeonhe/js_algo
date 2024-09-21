const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const n = +input[0];
const arr = input[1].split(" ").map(Number);
const ans = arr.map((i) => Math.min(n, i)).reduce((a, b) => a + b, 0);

console.log(ans);