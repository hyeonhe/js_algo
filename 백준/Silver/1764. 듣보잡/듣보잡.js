const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const [n, m] = input.shift().split(" ").map(Number);
const set = new Set(input.splice(0, n));
const answer = [];

for (const word of input) {
  if (set.has(word)) {
    answer.push(word);
  }
}

console.log(answer.length);
console.log(answer.sort().join("\n"));