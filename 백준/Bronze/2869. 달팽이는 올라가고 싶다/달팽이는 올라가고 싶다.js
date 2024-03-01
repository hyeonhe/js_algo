const [A, B, V] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ");

let day = V - A;
day = Math.ceil(day / (A - B)) + 1;
console.log(day);