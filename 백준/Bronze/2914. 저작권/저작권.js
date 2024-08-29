const fs = require("fs");
const [A, I] = fs.readFileSync("/dev/stdin").toString().trim().split(" ");

console.log(A * (I - 1) + 1);