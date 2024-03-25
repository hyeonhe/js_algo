const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const card = input[1].split(" ").map(Number);
const numbers = input[3].split(" ").map(Number);
const answer = [];
const haveCardMap = new Map();

for (item of card) {
  if (haveCardMap.has(item)) {
    haveCardMap.set(item, haveCardMap.get(item) + 1);
  } else {
    haveCardMap.set(item, 1);
  }
}

for (item of numbers) {
  if (haveCardMap.has(item)) {
    answer.push(haveCardMap.get(item));
  } else answer.push(0);
}

console.log(answer.join(" "));