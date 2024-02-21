const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const n = +input[0];
const nums = input[1].split(" ").map((i) => +i);
const m = Math.max(...nums);
const sum = nums.reduce((a, b) => a + b, 0);

console.log((sum / n / m) * 100);