const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [x, n, ...arr] = input;
let amount = 0;

arr.forEach((item) => {
  const [a, b] = item.split(" ").map(Number);
  amount += a * b;
});

if (Number(x) === amount) console.log("Yes");
else console.log("No");