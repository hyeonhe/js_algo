const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const n = input.shift();
let deque = [];
const answer = [];

input.forEach((item) => {
  let command = item.split(" ");
  switch (command[0]) {
    case "push_front":
      deque.splice(0, 0, command[1]);
      break;
    case "push_back":
      deque.push(command[1]);
      break;
    case "pop_front":
      answer.push(deque.length === 0 ? -1 : deque.shift());
      break;
    case "pop_back":
      answer.push(deque.length === 0 ? -1 : deque.pop());
      break;
    case "size":
      answer.push(deque.length);
      break;
    case "empty":
      answer.push(deque.length === 0 ? 1 : 0);
      break;
    case "front":
      answer.push(deque[0] ? deque[0] : -1);
      break;
    case "back":
      answer.push(deque[deque.length - 1] ? deque[deque.length - 1] : -1);
  }
});

console.log(answer.join("\n"));
