const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const arr = [];
const n = +input[0];
const stack = [];
const commands = input.map((item) => item.split(" "));
commands.shift();

for (let i = 0; i < n; i++) {
  if (commands[i][0] === "push") {
    arr.push(commands[i][1]);
  } else if (commands[i][0] === "pop") {
    if (arr.length > 0) {
      stack.push(arr.pop());
    } else {
      stack.push(-1);
    }
  } else if (commands[i][0] === "size") {
    stack.push(arr.length);
  } else if (commands[i][0] === "empty") {
    stack.push(arr.length === 0 ? 1 : 0);
  } else if (commands[i][0] === "top") {
    stack.push(arr.length === 0 ? -1 : arr[arr.length - 1]);
  }
}

console.log(stack.join("\n"));