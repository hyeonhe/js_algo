const fs = require("fs");
const input = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");
input.shift();

for (const pw of input) {
  console.log(pw.length >= 6 && pw.length <= 9 ? "yes" : "no");
}