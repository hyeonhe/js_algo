const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim();
const n = Number(input);

console.log(n * 0.78, n * (1 - 0.2 * 0.22));