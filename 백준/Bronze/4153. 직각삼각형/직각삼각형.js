const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

for (let i in input) {
  if (input[i] === "0 0 0") {
    break;
  }

  const triangle = input[i].split(" ").map((n) => +n * +n);
  triangle.sort((a, b) => a - b);
  const [a, b, c] = triangle;

  console.log(a + b === c ? "right" : "wrong");
}