const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");

const [n, x] = input[0].split(" ").map((i) => Number(i));
const arr = input[1].split(" ").map((i) => Number(i));
const ans = [];

arr.forEach((i) => {
  if (x > i) {
    ans.push(i);
  }
});

console.log(ans.join(" "));