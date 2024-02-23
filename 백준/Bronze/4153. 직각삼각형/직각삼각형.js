const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

input.forEach((item) => {
  const triangle = item.split(" ").map((i) => +i);
  triangle.sort((a, b) => a - b);

  const [a, b, c] = triangle;
  const result = a * a + b * b === c * c ? "right" : "wrong";
  console.log(a > 0 ? result : "");
});
