const input = require("fs")
  .readFileSync("/dev/stdin", "utf8")
  .toString()
  .trim()
  .split("\n");

const [n, m] = input.shift().split(" ").map(Number);

const s = new Set(input.slice(0, n));
const words = input.slice(n);

let count = 0;

for (const word of words) {
  if (s.has(word)) {
    count++;
  }
}

console.log(count);