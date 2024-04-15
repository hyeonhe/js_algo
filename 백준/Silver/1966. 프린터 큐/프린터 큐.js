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
    const max = Math.max(...array);
   
    if (max <= item) {
      if (position === 0) {
        answer.push(count);
        break;
      } else {
        count++;
        position--;
      }
    } else {
      if (position === 0) {
        position = array.length;
      } else {
        position--;
      }
      array.push(item);
    }
  }
}

console.log(answer.join("\n"));