const fs = require("fs");
const arr = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map(Number)
  .sort((a, b) => a - b);

const sum = arr.reduce((a, b) => a + b, 0);
const rest = sum - 100;

for (const [i, v] of arr.entries()) {
  const otherIndex = arr.findIndex((value) => value === rest - v);

  if (otherIndex > 0) {
    arr.splice(otherIndex, 1);
    arr.splice(i, 1);
    break;
  }
}

console.log(arr.join("\n"));