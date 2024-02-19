const fs = require("fs");
const input = fs
  .readFileSync("/dev/stdin", "utf8")
  .toString()
  .trim()
  .split("\n")
  .map((i) => Number(i));

input.shift();

console.log(input.sort((a, b) => b - a).join('\n'));