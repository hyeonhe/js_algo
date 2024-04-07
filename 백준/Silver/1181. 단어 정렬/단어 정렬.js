const input = require("fs")
  .readFileSync("/dev/stdin", "utf8")
  .toString()
  .trim()
  .split("\n");

input.shift();
const arr = [...new Set(input)].sort().sort((a, b) => a.length - b.length);

console.log(arr.join("\n"));