const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((i) => Number(i));

const n = input.shift();
const stack = [];
const answer = [];
let flag = true;
let count = 1;

for (let i = 0; i < n; i++) {
  const num = input[i];
  while (count <= num) {
    stack.push(count);
    answer.push("+");
    count++;
  }
  if (stack[stack.length - 1] === num) {
    stack.pop();
    answer.push("-");
  } else {
    flag = false;
  }
}

if (flag) {
  console.log(answer.join("\n"));
} else {
  console.log("NO");
}