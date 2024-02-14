const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");

const [n, x] = input[0].split(" ").map((i) => Number(i));
const arr = input[1].split(" ").map((i) => Number(i));

console.log(arr.filter((i) => x > i).join(" "));