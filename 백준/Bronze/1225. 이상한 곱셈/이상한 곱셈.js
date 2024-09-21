const fs = require("fs");
const [a, b] = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ")
  .map((i) => i.split(""));

let ans = 0;

a.forEach((i) => {
  b.forEach((j) => (ans += i * j));
});

console.log(ans);
