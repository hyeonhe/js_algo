const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

input.pop();
let stack = [];
const answer = [];

const bracket = ["[", "]", "(", ")"];

input.forEach((char) => {
  for (let i = 0; i < char.length; i++) {
    if (!bracket.includes(char[i])) {
      continue;
    }
    if (char[i] === "[" || char[i] === "(") {
      stack.push(char[i]);
    } else if (stack.length === 0 && (char[i] === "]" || char[i] === ")")) {
      stack.push(char[i]);
      break;
    } else if (char[i] === "]" && stack[stack.length - 1] === "[") {
      stack.pop();
    } else if (char[i] === ")" && stack[stack.length - 1] === "(") {
      stack.pop();
    } else {
      break;
    }
  }

  answer.push(stack.length === 0 ? "yes" : "no");
  stack = [];
});

console.log(answer.join("\n"));