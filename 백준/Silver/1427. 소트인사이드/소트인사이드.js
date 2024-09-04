const fs = require("fs");
const ans = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("")
  .sort((a, b) => b - a)
  .join("");

console.log(ans);