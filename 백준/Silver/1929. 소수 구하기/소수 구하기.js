const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ")
  .map(Number);

const n = 1000000;
const array = Array(n+1).fill(1);
const answer = [];

for (let i = 2; i <= Math.sqrt(input[1]) + 1; i++) {
  if (array[i] === 1) {
    let j = 2;
    while (i * j <= n) {
      array[i * j] = 0;
      j++
    }
  }
}

for (let i = input[0]; i <= input[1]; i++) {
  if (i === 1) continue
  if (array[i] === 1) {
    answer.push(i)
  }
}

console.log(answer.join('\n'))