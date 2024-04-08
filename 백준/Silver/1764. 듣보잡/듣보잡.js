const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const [n, m] = input.shift().split(" ").map(Number);
const a = new Set(input.slice(0, n));
const b = new Set(input.slice(n));

Set.prototype.intersection = function (set) {
  return [...this].filter((v) => set.has(v));
};

const answer = a.intersection(b);

console.log(answer.length);
console.log(answer.sort().join("\n"));