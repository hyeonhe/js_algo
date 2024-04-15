const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const t = input.shift();

const answer = [];

for (let i = 0; i < t; i++) {
  let [n, position] = input.shift().split(" ").map(Number);
  const array = input.shift().split(" ").map(Number);
  let count = 1;

  while (true) {
    const item = array.shift();
    if (Math.max(...array) <= item && position === 0) {
      answer.push(count);
      break;
    } else if (Math.max(...array) <= item) {
      position--;
      count++;
    } else if (Math.max(...array) > item && position === 0) {
      array.push(item);
      position = array.length - 1;
    } else if (Math.max(...array) > item) {
      array.push(item);
      position--;
    }
  }
}

console.log(answer.join("\n"));