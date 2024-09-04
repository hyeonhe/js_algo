const fs = require("fs");
const arr = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map(Number)
  .sort((a, b) => a - b);

console.log(arr.reduce((a, b) => a + b, 0) / 5);
console.log(arr[2]);