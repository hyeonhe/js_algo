const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

let [n, k] = input.shift().split(" ").map(Number);
const arr = input.map(Number).sort((a, b) => b - a);
let cnt = 0;

arr.forEach((money) => {
  const num = parseInt(k / money);
  cnt += num;
  k -= num * money;
});

console.log(cnt);