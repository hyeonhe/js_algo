const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ")
  .map(Number);

const [n, k] = input;

const queue = Array.from({ length: n }, (_, i) => i + 1);
const answer = [];

let count = 1;
while (queue.length) {
  const number = queue.shift();
  if (count % k === 0) {
    answer.push(number);
  } else queue.push(number);
  count++;
}

console.log(`<${answer.join(", ")}>`);