const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "text.txt";
let input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map((i) => +i);


const maxNum = Math.max(...input);
console.log(`${maxNum}\n${input.indexOf(maxNum) + 1}`);