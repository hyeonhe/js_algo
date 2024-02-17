const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "text.txt";
const input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map((i) => +i);

input.shift();

input.sort((a, b) => {
  return a - b;
});

console.log(input.join("\n"));