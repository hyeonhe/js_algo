const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const n = input.shift();
const queue = [];
const answer = [];

input.forEach((item) => {
  let command = item.split(" ");
  switch (command[0]) {
    case "push":
      queue.push(command[1]);
      break;
    case "pop":
      answer.push(queue.length === 0 ? -1 : queue.shift());
      break;
    case "size":
      answer.push(queue.length);
      break;
    case "empty":
      answer.push(queue.length === 0 ? 1 : 0);
      break;
    case "front":
      answer.push(queue[0] ? queue[0] : -1);
      break;
    case "back":
      answer.push(queue[queue.length - 1] ? queue[queue.length - 1] : -1);
  }
});

console.log(answer.join("\n"));