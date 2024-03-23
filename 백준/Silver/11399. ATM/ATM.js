const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const n = input.shift();
const arr = input.shift().split(" ").map(Number);
arr.sort((a, b) => a - b);
let answer = 0;
let cumulativeSum = 0;

for (let i = 0; i < arr.length; i++) {
  cumulativeSum += arr[i];
  answer += cumulativeSum;
}

console.log(answer);