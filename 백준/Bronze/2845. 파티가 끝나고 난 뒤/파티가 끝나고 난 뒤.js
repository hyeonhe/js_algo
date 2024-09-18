const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [L, P] = input[0].split(" ").map(Number);
const ans = [];
const person = input[1].split(" ").map(Number);

person.forEach((item) => {
  ans.push(+item - L * P);
});

console.log(ans.join(" "));