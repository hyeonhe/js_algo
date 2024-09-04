const fs = require("fs");
const arr = fs.readFileSync("/dev/stdin").toString().trim().split("");

console.log(arr.sort((a, b) => b - a).join(""));