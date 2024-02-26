const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");
input.shift();

for (let i in input) {
  const [a, b] = input[i].split(" ");
  console.log(`Case #${+i + 1}: ${+a + +b}`);
}