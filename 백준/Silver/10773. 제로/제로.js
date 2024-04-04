const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map(Number);
input.shift();

const ans = [];

for (let i = 0; i < input.length; i++) {
  if (input[i] === 0) {
    ans.pop();
  } else {
    ans.push(input[i]);
  }
}

console.log(ans.reduce((a, b) => a + b, 0));