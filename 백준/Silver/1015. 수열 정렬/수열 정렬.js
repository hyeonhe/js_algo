const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const arr = input[1].split(" ").map(Number);
const sortedArr = [...arr].sort((a, b) => a - b);
const answer = [];

for (const item of arr) {
  const index = sortedArr.findIndex((value) => value === item);
  sortedArr[index] = -1;
  answer.push(index);
}

console.log(answer.join(" "));