const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");
const [word, i] = input;

console.log(word[i - 1]);